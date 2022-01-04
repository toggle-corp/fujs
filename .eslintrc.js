module.exports = {
    extends: [
        'airbnb/base',

        'plugin:@typescript-eslint/recommended',
    ],
    env: {
        browser: true,
        jest: true,
    },
    plugins: [
        'import',
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
    },
    rules: {
        strict: 1,
        indent: ['error', 4, { SwitchCase: 1 }],

        'no-unused-vars': 0,
        '@typescript-eslint/no-unused-vars': 1,

        'no-use-before-define': 0,
        '@typescript-eslint/no-use-before-define': 1,

        'no-shadow': 0,
        '@typescript-eslint/no-shadow': ['error'],

        'import/extensions': ['off', 'never'],
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],

        'prefer-destructuring': 'warn',
        'function-paren-newline': ['warn', 'consistent'],
        'object-curly-newline': [2, {
            ObjectExpression: { consistent: true },
            ObjectPattern: { consistent: true },
            ImportDeclaration: { consistent: true },
            ExportDeclaration: { consistent: true },
        }],

        '@typescript-eslint/no-empty-interface': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/camelcase': 0,
    },
};
