// /backend/eslint.config.cjs
const js = require('@eslint/js');

module.exports = [
  // Reemplaza .eslintignore
  { ignores: ['node_modules', 'coverage', 'dist', 'build'] },

  // Reglas base recomendadas
  js.configs.recommended,

  // Backend Node con CommonJS
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs', // 👈 CommonJS (require/module.exports)
      globals: {
        // Node/CommonJS
        require: 'readonly',
        module: 'readonly',
        __dirname: 'readonly',
        console: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': 'error',
      'no-undef': 'error',
    },
  },

  // Tests: habilita describe/it/expect (Jest)
  {
    files: ['tests/**/*.test.js'],
    languageOptions: {
      globals: {
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
      },
    },
  },
];

