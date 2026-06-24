import js from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';

const eslintConfig = [
  { ignores: ['dist'] },
  js.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    settings: {
      react: { version: 'detect' },
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      import: importPlugin,
      'simple-import-sort': simpleImportSort,
      prettier: prettierPlugin,
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactPlugin.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'react/prop-types': 'off',
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
      'import/first': 'error',
      'import/exports-last': 'error',
      'import/no-duplicates': 'error',
      'import/order': 'off',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^node:'],
            ['^react$'],
            ['^@?\\w'],
            ['^@/'],
            ['^\\.\\./', '^\\./'],
            ['^.+\\.?(css)$'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
    },
  },
  prettierConfig,
];

export default eslintConfig;
