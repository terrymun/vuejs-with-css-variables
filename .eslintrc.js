module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'class-methods-use-this': 'off',
    'object-curly-newline': ['error', {
      'ImportDeclaration': 'never',
    }],
    'import/prefer-default-export': ['off'],
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
};
