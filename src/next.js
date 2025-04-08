import { defineConfig } from 'eslint/config';
import next from '@next/eslint-plugin-next';
import common from '@idearium/eslint-config/src/common.js';

export default defineConfig([{ extends: [next] }, common]);
