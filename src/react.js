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
        'lines-between-class-members': 'off',
        'object-curly-newline': 'off',
        'operator-linebreak': 'off',
        'padded-blocks': 'off',
        'padding-line-between-statements': 'off',
        'prefer-object-spread': 'off',
        'react/jsx-closing-bracket-location': 'error',
        'require-jsdoc': 'off',
        'space-before-function-paren': 'off',
    }
};
