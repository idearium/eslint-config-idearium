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
        'comma-dangle': 'off',
        'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
        'function-paren-newline': 'off',
        'object-curly-newline': 'off',
        'padded-blocks': 'off',
        'prefer-object-spread': 'off',
        'react/jsx-closing-bracket-location': 'error',
        'require-jsdoc': 'off',
        'space-before-function-paren': 'off',
    }
};
