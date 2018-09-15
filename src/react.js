'use strict';

module.exports = {
    'env': {
        'browser': true,
        'es6': true,
    },
    'extends': [
        '@idearium/eslint-config/src/common',
        'plugin:react/recommended'
    ],
    'parserOptions': {
        'ecmaVersion': 6,
        'sourceType': 'module',
    },
    rules: {
        'class-methods-use-this': 'off',
        'react/jsx-closing-bracket-location': 'error',
        'prefer-object-spread': 'off',
    }
};
