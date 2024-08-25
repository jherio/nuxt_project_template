import { defineConfig } from 'eslint-define-config'

export default defineConfig({
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:storybook/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['index'],
      },
    ],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': 'allow-with-description',
        minimumDescriptionLength: 3,
      },
    ],
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'vue/require-default-prop': 'error',
    'vue/no-unused-properties': [
      'error',
      { groups: ['props', 'data', 'computed', 'methods'] },
    ],
  },
  overrides: [
    {
      files: ['*.stories.ts'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
    {
      files: ['Button.vue', 'Header.vue', 'Page.vue'],
      rules: {
        'vue/multi-word-component-names': 'off',
      },
    },
  ],
})
