'use strict';

const config = {
    env: {
        browser: true,
        commonjs: true,
        jquery: true,
    },
    extends: ['@idearium/eslint-config/src/common', 'prettier'],
    parserOptions: {
        ecmaVersion: 5,
        sourceType: 'script',
    },
};

module.exports = config;
