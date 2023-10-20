'use strict';

const config = {
    env: { 'shared-node-browser': true },
    extends: [
        '@idearium/eslint-config/src/common',
        'next/core-web-vitals',
        'prettier',
    ],
};

module.exports = config;
