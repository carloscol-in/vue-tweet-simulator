module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'comma-dangle': ['error', {
        'arrays': 'always',
        'objects': 'always',
        'imports': 'never',
        'exports': 'always',
        'functions': 'never'
    }],
    'no-unused-vars': 'off',
    'space-before-function-paren': ['error', {
        'anonymous': 'always',
        'named': 'never',
        'asyncArrow': 'always',
    }],
    'quotes': ['error', 'single'],
    'prefer-const': 'off',
  }
}
