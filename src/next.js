import { defineConfig } from 'eslint/config';

import common from './common';

export default defineConfig([{ extends: ['next'] }, common]);
