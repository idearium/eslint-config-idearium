import { defineConfig } from 'eslint/config';
import globals from 'globals';

import common from '@idearium/eslint-config/src/common.js';

export default defineConfig([
    {
        files: ['**/*.{js,mjs,cjs,ts}'],
    },
    {
        languageOptions: {
            globals: { ...globals.node },
            sourceType: 'commonjs',
        },
    },
    common,
]);
