import babel from 'rollup-plugin-babel'
import pkg from './package.json'

const config = {
  input: 'src/index.js',
  output: [
    {
      file: pkg.module,
      format: 'esm'
    }
  ],
  plugins: [babel()]
}

export default config
