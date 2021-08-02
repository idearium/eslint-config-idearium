'use strict';

const config = {
    root: true,
    env: {
        'es6': true,
        'jest': true,
        'shared-node-browser': true,
    },
    extends: ['eslint:recommended'],
    plugins: ['eslint-comments'],
    rules: {
        'no-await-in-loop': 'error',
        'no-console': 'error',
        'no-duplicate-imports': ['error', { includeExports: true }],
        'no-label-var': 'error',
        'no-loss-of-precision': 'error',
        'no-shadow': 'error',
        'no-template-curly-in-string': 'error',
        'no-undef-init': 'error',
        'no-undefined': 'error',
        'no-unreachable-loop': 'error',
        'no-unsafe-optional-chaining': 'error',
        'no-use-before-define': 'error',
        'no-useless-backreference': 'error',
        'no-useless-computed-key': 'error',
        'no-useless-constructor': 'error',
        'no-useless-rename': 'error',
        'prefer-const': 'error',
        'prefer-destructuring': 'error',
        'prefer-rest-params': 'error',
        'require-atomic-updates': 'error',
    },
};

module.exports = config;
