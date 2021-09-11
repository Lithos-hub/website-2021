module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },

  extends: [
    'plugin:vue/essential',
    'airbnb-base',
  ],

  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    parser: 'babel-eslint'
  },

  plugins: [
    'vue',
  ],

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/max-len': ['error', {
      'code': 500,
      'template': 80,
      'tabWidth': 2,
      'comments': 80,
      'ignorePattern': '',
      'ignoreComments': false,
      'ignoreTrailingComments': false,
      'ignoreUrls': false,
      'ignoreStrings': false,
      'ignoreTemplateLiterals': false,
      'ignoreRegExpLiterals': false,
      'ignoreHTMLAttributeValues': false,
      'ignoreHTMLTextContents': false,
  }]
  },

  root: true,

  'extends': [
    'plugin:vue/essential',
    'airbnb-base',
    'eslint:recommended',
    '@vue/prettier'
  ]
};
