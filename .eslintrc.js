module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'react/no-unstable-nested-components': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
