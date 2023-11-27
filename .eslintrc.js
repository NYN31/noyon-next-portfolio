module.exports = {
  extends: 'next/core-web-vitals',
  rules: {
    'react-refresh/only-export-components': 'error',
    'react-refresh/only-export-components': 'off',
    'no-unused-vars': [
      'warn',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
    ],
  },
};
