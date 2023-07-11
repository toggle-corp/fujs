import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import eslint from '@rollup/plugin-eslint';
import filesize from 'rollup-plugin-filesize';

import pkg from './package.json' assert { type: 'json' };

const INPUT_FILE_PATH = 'src/index.ts';

const PLUGINS = [
    eslint({
        throwOnError: true,
        include: ['**/*.js', '**/*.ts'],
    }),
    babel({
        babelHelpers: 'runtime',
        exclude: 'node_modules/**',
        extensions: ['.js', '.ts'],
    }),
    resolve({
        browser: true,
        extensions: ['.js', '.ts'],
    }),
    commonjs(),
    filesize(),
];

const OUTPUT_DATA = [
    {
        dir: 'build/cjs',
        format: 'cjs',
    },
    {
        dir: 'build/esm',
        format: 'esm',
        preserveModules: true,
        preserveModulesRoot: 'src',
    },
];

const config = OUTPUT_DATA.map((options) => ({
    input: INPUT_FILE_PATH,
    output: {
        ...options,
        sourcemap: true,
        exports: 'named',
    },
    external: [
        ...Object.keys(pkg.dependencies || {}),
        ...Object.keys(pkg.peerDependencies || {}),
    ],
    plugins: PLUGINS,
}));

export default config;
