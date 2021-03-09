const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
);

module.exports = {
  extends: ['react-app', 'react-app/jest', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    'no-console': 'off',
  },
  overrides: [
    {
      files: ['**/*.js'],
      rules: { 'prettier/prettier': ['warn', prettierOptions] },
    },
  ],
};
