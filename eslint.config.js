// @ts-check

import globals from 'globals';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config(
  // Ignora los directorios globalmente
  {
    ignores: ['node_modules/', 'dist/', 'build/'],
  },

  // Configuración base recomendada por ESLint
  js.configs.recommended,

  // Configuración base recomendada para TypeScript
  ...tseslint.configs.recommended,

  // Tu configuración personalizada
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
    },
  },

  // ¡Importante! La configuración de Prettier siempre debe ir al final.
  // Desactiva las reglas de ESLint que pueden entrar en conflicto con Prettier.
  eslintConfigPrettier,
);
