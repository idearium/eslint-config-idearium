# eslint-config-idearium

[![npm](https://img.shields.io/npm/v/@idearium/eslint-config.svg)](https://www.npmjs.com/package/@idearium/eslint-config)

## Installation

This package is available on [NPM](https://www.npmjs.com/package/@eslint/eslint-config):

  ```shell
  $ npm install @idearium/eslint-config
  ```
  ```javascript
  // @ .eslintrc
  // For node.js code (ES6).
  {
    "extends": "@idearium/eslint-config"
  }

  // For browser code (ES5).
  {
    "extends": "@idearium/eslint-config/src/browser"
  }
  ```

## Deploying

To deploy a new version, first update the changelog and then:

```shell
$ yarn version
info Current version: 1.0.0
question New version: <enter the new version>

$ git push --follow-tags
```
