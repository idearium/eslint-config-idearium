'use strict';

const config = {
    env: { browser: true, node: true },
    extends: [
        '@idearium/eslint-config/src/common',
        'next/core-web-vitals',
        'prettier',
    ],
};

module.exports = config;
