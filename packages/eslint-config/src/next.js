import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import { defineConfig } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier/flat';

import common from './common.js';

export default defineConfig([
    common,
    ...nextCoreWebVitals,
    eslintConfigPrettier,
]);
