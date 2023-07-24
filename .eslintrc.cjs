module.exports = {
    extends: [
        'airbnb-base',
        // 'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/strict-type-checked',
        'plugin:@typescript-eslint/stylistic-type-checked',
    ],
    env: {
        browser: true,
        jest: true,
    },
    plugins: [
        '@typescript-eslint',
    ],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.ts'],
            },
        },
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2018,
        ecmaFeatures: {
            jsx: false,
        },
        sourceType: 'module',
        allowImportExportEverywhere: true,
        project: ['tsconfig.json'],
    },
    rules: {
        strict: 1,
        indent: ['error', 4, { SwitchCase: 1 }],

        '@typescript-eslint/no-unnecessary-condition': 'warn',

        'no-unused-vars': 0,
        '@typescript-eslint/no-unused-vars': 1,

        'no-use-before-define': 0,
        '@typescript-eslint/no-use-before-define': 1,

        // note you must disable the base rule as it can report incorrect errors
        'no-shadow': 0,
        '@typescript-eslint/no-shadow': ['error'],

        // 'import/no-unresolved': ['error', { ignore: Object.keys(pkg.peerDependencies) }],
        'import/extensions': ['off', 'never'],
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],

        '@typescript-eslint/no-empty-function': 0,
        '@typescript-eslint/no-extra-semi': 0,
    },
};
