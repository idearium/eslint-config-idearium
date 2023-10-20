'use strict';

const config = {
    env: {
        browser: true,
        jquery: true,
    },
    extends: ['@idearium/eslint-config/src/common', 'prettier'],
};

module.exports = config;
