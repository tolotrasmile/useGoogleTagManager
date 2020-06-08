module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  plugins: ['react'],
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {},
}
