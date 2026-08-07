import js from '@eslint/js';
import globals from 'globals';

const INFORMIND_RULES = {
  "no-console": ['error', { allow: ['warn', 'error'] }],
  "no-unused-vars": "error",
  "no-multiple-empty-lines": ['error', { max: 1, maxEOF: 0 }],
};

export default [
  js.configs.recommended,
  {
    // only on folder js only
    files: ['src/js/**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser, 
    },
    rules: INFORMIND_RULES
  }
];