# eslint-config-idearium

[![npm](https://img.shields.io/npm/v/@idearium/eslint-config.svg)](https://www.npmjs.com/package/@idearium/eslint-config)

## Installation

This package is available on [NPM](https://www.npmjs.com/package/@eslint/eslint-config):

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
