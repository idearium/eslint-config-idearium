'use strict';

const config = {
    env: {
        node: true,
    },
    extends: [
        '@idearium/eslint-config/src/common',
        'plugin:node/recommended',
        'prettier',
    ],
    parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'script',
    },
};

module.exports = config;
