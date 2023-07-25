module.exports = {
  env: {
    browser: true,
    es2021: true,
    es6: true,
    amd: true,
    node: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: false,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'import/extensions': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-var-requires': 'off',
    'default-param-last': 'off',
    'max-len': ['error', { ignoreUrls: true, code: 140 }],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'no-param-reassign': [2, { props: false }],
    'no-console': 'off',
    'no-new': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
      },
    },
  },
};
