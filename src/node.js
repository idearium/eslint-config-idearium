import { defineConfig } from 'eslint/config';
import globals from 'globals';

import common from './common';

export default defineConfig([
    {
        files: ['**/*.{js,mjs,cjs,ts}'],
        languageOptions: {
            globals: { ...globals.node },
            sourceType: 'commonjs',
        },
    },
    common,
]);
