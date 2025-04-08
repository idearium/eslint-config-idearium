import { defineConfig } from 'eslint/config';
import common from '@idearium/eslint-config/src/common.js';
import { FlatCompat } from '@eslint/eslintrc';
import eslintConfigPrettier from 'eslint-config-prettier/flat';

const compat = new FlatCompat();

export default defineConfig([
    common,
    {
        files: ['**/*.{jsx,tsx}'],
        extends: [...compat.config({ extends: ['next/core-web-vitals'] })],
        languageOptions: {
            sourceType: 'module',
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
    },
    eslintConfigPrettier,
]);
