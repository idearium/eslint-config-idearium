'use strict';

const config = {
    env: {
        'browser': true,
        'commonjs': true,
        'es6': true,
        'jquery': true,
        'node': true,
        'shared-node-browser': true,
    },
    extends: [
        'eslint:recommended',
        'plugin:node/recommended',
        'plugin:@next/next/recommended',
        'prettier',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        'no-await-in-loop': 'error',
        'no-console': 'error',
        'no-loss-of-precision': 'error',
        'no-template-curly-in-string': 'error',
        'no-unreachable-loop': 'error',
        'no-unsafe-optional-chaining': 'error',
        'no-useless-backreference': 'error',
        'require-atomic-updates': 'error',
        'no-label-var': 'error',
        'no-shadow': 'error',
        'no-undef-init': 'error',
        'no-undefined': 'error',
        'no-use-before-define': 'error',
        'no-duplicate-imports': ['error', { includeExports: true }],
        'no-useless-computed-key': 'error',
        'no-useless-constructor': 'error',
        'no-useless-rename': 'error',
        'prefer-const': 'error',
        'prefer-destructuring': 'error',
        'prefer-rest-params': 'error',
    },
};

module.exports = config;
