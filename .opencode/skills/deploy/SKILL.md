---
name: deploy
description: 'Version bump and publish the eslint-config package to npm. Use when the user says deploy, version bump, release, or publish.'
---

## When to use

This skill is purely reactive. Use it only when the user explicitly asks to deploy or version bump the package.

## Overview

eslint-config-idearium is an npm monorepo. The package is published to npm via GitHub Actions CI triggered by git tags. There are no Docker images, manifests, Cloud Functions, or Workers.

## Definitive package inventory

This is the only package that can be deployed. If the user specifies a name other than `eslint-config`, show them the valid option and stop.

| Short name      | Package name              | Directory                 | CI workflow                            |
| --------------- | ------------------------- | ------------------------- | -------------------------------------- |
| `eslint-config` | `@idearium/eslint-config` | `packages/eslint-config/` | `.github/workflows/eslint-config.yaml` |

## Version resolution algorithm

The source of truth for the "current version" is the **highest semver across `v*` git tags and published npm versions**, never `package.json`. `package.json` can drift ahead of the published tags (e.g. a bump was committed but never tagged), so reading it produces skipped or wrong versions. npm is authoritative: published versions (currently 6.0.0) run ahead of this repository's git tags (which stop at v4.0.0), so git tags alone understate the current version.

Before bumping, determine the next version:

1. Find the latest released version — check git tags (local and remote) and the npm registry, and take the highest semver:
    ```bash
    git fetch origin --tags
    git tag --list 'v*' --sort=-v:refname
    git ls-remote --tags origin 'v*'
    npm view @idearium/eslint-config versions --json
    ```
    Parse the highest semver from the combined set (strip the `v` prefix). This is the **current version**.
2. **First release** — if no `v*` tags exist (both local and remote lists are empty) **and** no npm versions exist, this is the first deploy of the package. Read the `"version"` field from `packages/eslint-config/package.json`, confirm it is unpublished (`npm view @idearium/eslint-config@{version}` returns no matching version), and propose it **as-is** for the first deploy — do not bump. Bump normally from the second deploy onward.
3. Determine the next version from that current version based on environment:
    - **Beta**: if the current version has a `-beta.N` suffix, increment `N`. If the current version is a production version (no `-beta.N`), bump the patch and add `-beta.1`.
        - Example: `1.1.0` → `1.1.1-beta.1`
        - Example: `1.1.1-beta.1` → `1.1.1-beta.2`
    - **Production**: strip the `-beta.N` suffix from the current beta version.
        - Example: `1.1.1-beta.2` → `1.1.1`
        - Example: `0.2.0-beta.1` → `0.2.0`
4. **Tag collision check** — confirm the proposed tag is free:
    ```bash
    git ls-remote --tags origin 'v{proposed_version}'
    npm view @idearium/eslint-config@{proposed_version}
    ```
    Both must come back empty (no matching tag, no matching npm version). If either is non-empty, the version is taken — surface the conflict to the user. Do not silently skip ahead.
5. If `package.json` contains a version higher than the computed next version (drift), flag it explicitly to the user rather than jumping to the higher number.

## Per-package file maps

| File                                  | What to edit                                |
| ------------------------------------- | ------------------------------------------- |
| `packages/eslint-config/package.json` | `"version"` field                           |
| `packages/eslint-config/CHANGELOG.md` | Add/rename entry (see CHANGELOG convention) |

After editing any `package.json`, run `npm install` at the **repository root** to update `package-lock.json`.

## CHANGELOG convention

The package has a `CHANGELOG.md` in its directory.

### Beta bump

Add a new entry directly under `## Unreleased`:

```markdown
## Unreleased

## v{version} - {YYYY-MM-DD}

### Added

- {summary of changes}

## v{previous} - ...
```

Ask the user to summarize the changes for the CHANGELOG entry. Categories follow Keep a Changelog: `### Added`, `### Changed`, `### Fixed`, `### Removed`, `### Breaking`.

### Production bump

Rename the existing beta entry — remove the `-beta.N` suffix from the version, update the date:

```markdown
## v0.2.0 - 2026-06-10
```

Was:

```markdown
## v0.2.0-beta.1 - 2026-06-09
```

Only the heading line changes. The body (description of changes) stays the same.

## Commit message convention

```
Version bump eslint-config to v{version}
```

Examples:

- `Version bump eslint-config to v0.1.0-beta.2`
- `Version bump eslint-config to v1.1.1`

## Tag convention

```
v{version}
```

Examples:

- `v0.1.0-beta.2`
- `v1.1.1`

Tags are pushed to GitHub. The CI workflow (`.github/workflows/eslint-config.yaml`) triggers on tag pattern `v*`, runs CI, then publishes the package to npm.

## Beta deployment workflow

1. Determine the next beta version using the resolution algorithm above (on the first deploy of the package, propose the seeded `package.json` version as-is per the first-release rule)
2. **Confirm the version (once and only once)** — present the proposed version to the user and stop. Do not edit any files, write the CHANGELOG entry, commit, or push until the user explicitly confirms the version. This is the only time the version is confirmed; do not re-ask about it later.
3. Edit the `"version"` field in `packages/eslint-config/package.json`
4. Run `npm install` at the repository root to update `package-lock.json`
5. Ask the user to summarize changes, then add a CHANGELOG entry under `## Unreleased`
6. Present the full plan (files changed, commit message, tag) for user approval
7. Commit with message: `Version bump eslint-config to v{version}`
8. Tag: `git tag v{version}`
9. Ask "Ready to push?" before pushing — never push without explicit approval
10. Push commit and tag to trigger CI

## Production deployment workflow

1. Determine the current version per the resolution algorithm; read `packages/eslint-config/package.json` only to cross-check
2. **Confirm the version (once and only once)** — present the proposed production version to the user and stop. Do not proceed until the user confirms. Do not re-ask about the version later.
3. Edit the `"version"` field in `packages/eslint-config/package.json` (strip `-beta.N` suffix)
4. Run `npm install` at the repository root to update `package-lock.json`
5. Update CHANGELOG: rename the beta entry heading to production (remove `-beta.N`, update date)
6. Present the full plan for user approval
7. Commit with message: `Version bump eslint-config to v{version}`
8. Tag: `git tag v{version}`
9. Ask "Ready to push?" before pushing — never push without explicit approval
10. Push commit and tag to trigger CI

## CI workflow details

The GitHub Actions workflow (`.github/workflows/eslint-config.yaml`) triggers on tag push matching `v*`. The workflow:

1. Uses `idearium/actions/.github/workflows/environment.yaml@v4` to determine the CI environment (beta vs production) from the tag's semver pre-release suffix
2. Runs CI (tests, lint, etc.)
3. Publishes to npm, authenticated via **npm trusted publishing (OIDC)** — the workflow's `id-token: write` permission handles authentication; there is no `NPM_TOKEN` secret:
    - **Beta**: `npm publish --tag beta --access public`
    - **Production**: `npm publish --access public`

## Things to watch out for

- **Published npm versions and git tags are the source of truth, not package.json** — package.json can drift ahead of published tags and cause skipped versions. Always derive the next version from the highest `v*` tag and the highest published npm version, treating npm as authoritative when they disagree. The only exception is the first release, where no tags and no npm versions exist yet and the seeded `package.json` version is proposed as-is.
- **Confirm the version exactly once** — ask the user to confirm the proposed version before any edits, then never re-ask. Don't bundle version confirmation with the CHANGELOG summary or the push approval.
- **Always run the tag collision check** — verify `git ls-remote --tags origin` and `npm view @idearium/eslint-config@{version}` before committing to a version, as another branch may have already pushed the same tag or published the same version
- **Never reuse a version number** — always bump to the next available version
- **Run `npm install` at the repository root** after editing `package.json`, not in the package directory
