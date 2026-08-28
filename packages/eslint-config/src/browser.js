import { defineConfig } from 'eslint/config';
import globals from 'globals';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import common from './common.js';

export default defineConfig([
    common,
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.jquery,
            },
            sourceType: 'script',
        },
    },
    eslintConfigPrettier,
]);
