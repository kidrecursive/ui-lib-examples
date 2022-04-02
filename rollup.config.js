import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import externals from 'rollup-plugin-node-externals';
import sizes from 'rollup-plugin-sizes';
import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: ['src/index.ts', 'src/icons.ts'],
    output: [
      {
        dir: 'dist/cjs',
        format: 'cjs',
        sourcemap: true,
      },
      {
        dir: 'dist/esm',
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      externals(),
      resolve(),
      commonjs(),
      typescript(),
      terser(),
      sizes({
        details: true,
      }),
    ],
  },
];
