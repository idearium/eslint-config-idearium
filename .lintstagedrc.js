const config = {
    '*.{css,md}': 'prettier --write',
    '*.{js,jsx}': ['eslint', 'prettier --write'],
    'packages/eslint-config/**/*.{js,jsx}': () =>
        'npm test -w packages/eslint-config',
};

export default config;
