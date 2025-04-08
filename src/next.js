import { defineConfig } from 'eslint/config';
import common from '@idearium/eslint-config/src/common.js';
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({ baseDirectory: import.meta.dirname });
const nextConfig = [...compat.plugins('eslint-plugin-next')];

export default defineConfig([nextConfig, common]);
