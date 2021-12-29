module.exports = function config(api) {
    api.cache(true);

    return {
        presets: [
            '@babel/preset-env',
            '@babel/preset-typescript',
        ],

        plugins: [
            // Reuse babel's injected headers
            // ["@babel/plugin-transform-runtime", { "version": "^7.11.2" }],

            // Handle absolute imports
            ['polyfill-corejs3', {
                method: 'usage-pure',
            }],

            '@babel/plugin-syntax-dynamic-import',
        ],
    };
};
