# eslint-config-idearium

![Publish @idearium/eslint-config](https://github.com/idearium/eslint-config-idearium/actions/workflows/eslint-config.yaml/badge.svg)

This repository contains the Idearium ESLint config, published to npm as `@idearium/eslint-config`.

## Installation

This package is available on [NPM](https://www.npmjs.com/package/@idearium/eslint-config):

```shell
$ npm install @idearium/eslint-config
```

```javascript
// @ eslint.config.js
import { defineConfig } from 'eslint/config';

// For node.js code.
import ideariumConfig from '@idearium/eslint-config';

// For next.js code.
import ideariumConfig from '@idearium/eslint-config/src/next';

// For browser code (ES5).
import ideariumConfig from '@idearium/eslint-config/src/browser';

export default defineConfig([{ extends: [ideariumConfig] }]);
```

### Packages

The packages are stored under `packages/*` and managed as npm workspaces. We currently have the following:

- `@idearium/eslint-config` (`packages/eslint-config`) — The Idearium ESLint config. This is the only package, and it is published to npm.

## Local development

1. `npm install`
2. `npm test`
3. `npm run lint`

## Deployment

### Using OpenCode (recommended)

If you're using [OpenCode](https://opencode.ai), deployments are automated via the `/deploy` command:

```
/deploy beta
/deploy production
```

This handles version bumping, CHANGELOG updates, git commits, tags, and pushes. GitHub Actions CI then runs tests and publishes the package to npm.

### Deployable packages

- `eslint-config` — `@idearium/eslint-config` — The Idearium ESLint config

### How it works

1. Version is bumped in `packages/eslint-config/package.json`
2. CHANGELOG is updated in `packages/eslint-config/CHANGELOG.md`
3. Changes are committed and tagged with `v{version}`
4. Tag push triggers GitHub Actions CI (`.github/workflows/eslint-config.yaml`)
5. CI runs tests, then publishes to npm via trusted publishing (OIDC) — no NPM token:
    - **Beta**: `npm publish --tag beta --access public`
    - **Production**: `npm publish --access public`

Published packages include automatic provenance attestations (trusted publishing via OIDC).

### Manual deployment

1. Edit the `"version"` field in `packages/eslint-config/package.json`
2. Run `npm install` at the repository root to update `package-lock.json`
3. Update `packages/eslint-config/CHANGELOG.md` with the new version entry
4. Commit: `git commit -m "Version bump eslint-config to v{version}"`
5. Tag: `git tag v{version}`
6. Push: `git push && git push --tags`
