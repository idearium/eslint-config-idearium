import { defineConfig } from 'eslint/config';
import globals from 'globals';

import common from '@idearium/eslint-config/src/common.js';

export default defineConfig([
    {
        files: ['**/*.js'],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.commonjs,
                ...globals.jquery,
            },
            sourceType: 'script',
        },
    },
    common,
]);
