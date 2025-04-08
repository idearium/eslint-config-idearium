import { defineConfig } from 'eslint/config';
import next from '@next/eslint-plugin-next';
import common from '@idearium/eslint-config/src/common.js';

export default defineConfig([
    {
        files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    },
    { extends: [next] },
    common,
]);
