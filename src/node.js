import { defineConfig } from 'eslint/config';
import globals from 'globals';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import common from '@idearium/eslint-config/src/common.js';

export default defineConfig([
    common,
    { languageOptions: { globals: { ...globals.node } } },
    eslintConfigPrettier,
]);
