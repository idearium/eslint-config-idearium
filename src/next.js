import { defineConfig } from 'eslint/config';
import common from '@idearium/eslint-config/src/common.js';
import { FlatCompat } from '@eslint/eslintrc';
import eslintConfigPrettier from 'eslint-config-prettier/flat';

const compat = new FlatCompat({ baseDirectory: import.meta.dirname });

export default defineConfig([
    common,
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
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
