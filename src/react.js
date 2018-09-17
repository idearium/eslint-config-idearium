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
    'parser': 'babel-eslint',
    'parserOptions': {
        'ecmaVersion': 6,
        'sourceType': 'module',
    },
    rules: {
        'class-methods-use-this': 'off',
        'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
        'react/jsx-closing-bracket-location': 'error',
        'require-jsdoc': 'off',
        'prefer-object-spread': 'off',
    }
};
