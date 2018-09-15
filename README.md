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

  // For React code (transpiled).
  {
    "extends": "@idearium/eslint-config/src/react"
  }

  // For browser code (ES5).
  {
    "extends": "@idearium/eslint-config/src/browser"
  }
  ```
