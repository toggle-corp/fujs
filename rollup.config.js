import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import eslint from '@rollup/plugin-eslint';
import { visualizer } from 'rollup-plugin-visualizer';
import filesize from 'rollup-plugin-filesize';

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
        nodeResolve({ extensions: ['.js', '.ts'] }),

        // Allow bundling cjs modules. Rollup doesn't understand cjs
        commonjs(),

        eslint({
            throwOnError: true,
            include: ['**/*.jsx', '**/*.js', '**/*.ts', '**/*.tsx'],
        }),

        babel({
            // babelHelpers: 'runtime',
            babelHelpers: 'bundled',
            exclude: 'node_modules/**',
            extensions: ['.js', '.ts'],
        }),
        filesize(),
        visualizer({ template: 'sunburst' }),
    ],
};
