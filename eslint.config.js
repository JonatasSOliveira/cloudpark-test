// eslint.config.js
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import reactPlugin from 'eslint-plugin-react';
import reactNativePlugin from 'eslint-plugin-react-native';
import prettierPlugin from 'eslint-plugin-prettier';

// Compatibilizador para legacy configs
const compat = new FlatCompat({
  baseDirectory: import.meta.url, // ou __dirname se usar .cjs
  recommendedConfig: {
    parser: true,
    plugin: true,
  },
});

export default [
  // 1) JS recomendado
  js.configs.recommended,

  // 2) Shareable / legacy configs trazidos pelo compat
  ...compat.extends(
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'plugin:prettier/recommended'
  ),

  // 3) Override específico para TS/TSX
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      react: reactPlugin,
      'react-native': reactNativePlugin,
      prettier: prettierPlugin,
    },
    rules: {
      // Prettier como regra de erro (lê prettier.config.js automaticamente)
      'prettier/prettier': 'error',

      // React / React Native
      'react/react-in-jsx-scope': 'off',
      'react-native/no-inline-styles': 'warn',

      // Substitui no-unused-vars padrão pelo do TS, que entende private ctor
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          args: 'after-used',
          argsIgnorePattern: '^_',
          vars: 'all',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],

      // Espaçamento sempre dentro de chaves
      'object-curly-spacing': ['error', 'always'],
    },
    settings: {
      react: { version: 'detect' },
    },
  },
];
