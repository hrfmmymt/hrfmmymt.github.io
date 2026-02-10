import js from '@eslint/js';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      'strict': 'error',
      'default-case': 'error',
      'comma-style': ['error', 'last'],
      'brace-style': ['error', '1tbs', { allowSingleLine: false }],
      'eqeqeq': 'warn',
      'no-var': 'error',
      'quotes': ['error', 'single'],
    },
  },
  {
    ignores: ['node_modules/**', 'dist/**', 'workbox-*.js', 'service-worker.js'],
  },
];
