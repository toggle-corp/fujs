import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { eslint } from 'rollup-plugin-eslint';

import pkg from './package.json';

export default {
    input: 'src/index.ts',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            sourcemap: true,
        },
        {
            file: pkg.module,
            format: 'es',
            sourcemap: true,
        },
    ],
    external: [
        ...Object.keys(pkg.dependencies || {}),
        ...Object.keys(pkg.peerDependencies || {}),
    ],
    plugins: [
        // Allows node_modules resolution
        resolve({ extensions: ['.js', '.ts'] }),

        // Allow bundling cjs modules. Rollup doesn't understand cjs
        commonjs(),

        eslint({
            throwOnError: true,
        }),

        babel({
            exclude: 'node_modules/**',
            extensions: ['.js', '.ts'],
            sourceMaps: true,
            inputSourceMap: true,

            runtimeHelpers: true,
        }),
    ],
};
