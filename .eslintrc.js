module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  extends: [
    'react-app',
    'plugin:react/recommended',
    'prettier/react',
    'prettier/@typescript-eslint',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'prettier/prettier': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
