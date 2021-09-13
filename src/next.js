'use strict';

const config = {
    env: {
        browser: true,
        commonjs: true,
    },
    extends: ['@idearium/eslint-config/src/common', 'next', 'prettier'],
};

module.exports = config;
