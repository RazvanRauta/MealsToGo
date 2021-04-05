module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  extends: ['eslint:recommended', '@react-native-community', 'plugin:react/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {},
      {
        usePrettierrc: true,
      },
    ],
    'react/display-name': 'off',
    'react/prop-types': 'off',
    semi: 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
