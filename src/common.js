import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';

export default defineConfig([
    {
        files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
        languageOptions: { globals: { ...globals.jest } },
    },
    {
        extends: ['js/recommended'],
        files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
        plugins: { js },
    },
]);
