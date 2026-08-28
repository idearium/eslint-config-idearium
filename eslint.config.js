const { defineConfig, globalIgnores } = require('eslint/config');

module.exports = (async () => {
    const ideariumConfig =
        await import('@idearium/eslint-config/src/node.js').then(
            (module) => module.default
        );

    return defineConfig([
        globalIgnores(['**/node_modules/', '**/node_modules/*']),
        ideariumConfig,
    ]);
})();
