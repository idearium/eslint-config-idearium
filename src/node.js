'use strict';

const config = {
    env: { node: true },
    extends: [
        '@idearium/eslint-config/src/common',
        'plugin:node/recommended',
        'prettier',
    ],
};

module.exports = config;
