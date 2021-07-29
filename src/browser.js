'use strict';

const config = {
    env: {
        browser: true,
        commonjs: true,
        jquery: true,
    },
    extends: ['@idearium/eslint-config/src/common', 'prettier'],
    parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'script',
    },
};

module.exports = config;
