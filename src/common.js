import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier/flat';

export default defineConfig([
    {
        files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
        languageOptions: { globals: { ...globals.jest } },
    },
    {
        extends: ['js/recommended'],
        plugins: { js },
    },
    eslintConfigPrettier,
]);
