import js from '@eslint/js';

export default [
  // Reemplaza .eslintignore:
  { ignores: ['node_modules', 'coverage', 'dist', 'build'] },

  js.configs.recommended,

  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        node: 'readonly',
        jest: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': 'error',
      'no-undef': 'error',
    },
  },
];
