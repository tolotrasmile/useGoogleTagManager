import babel from "rollup-plugin-babel";
import pkg from "./package.json";
import minify from "rollup-plugin-babel-minify";

const config = {
  input: "src/index.js",
  output: [
    {
      file: pkg.main,
      format: "cjs"
    },
    {
      file: pkg.module,
      format: "esm"
    },
    {
      file: pkg.browser,
      format: "umd"
    }
  ],
  plugins: [
    babel(),
    minify({
      comments: false
    })
  ]
};

export default config;
