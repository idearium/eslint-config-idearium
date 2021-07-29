'use strict';

const config = {
    env: {
        es6: true,
        node: true,
    },
    extends: [
        '@idearium/eslint-config/src/common',
        'plugin:node/recommended',
        'prettier',
    ],
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'script',
    },
};

module.exports = config;
