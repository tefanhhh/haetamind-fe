import withNuxt from './.nuxt/eslint.config.mjs'
import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import eslintConfigPrettier from 'eslint-config-prettier'

export default withNuxt(
  { files: ['**/*.{js,mjs,cjs,ts,vue}'] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  eslintConfigPrettier,
  {
    files: ['**/*.vue'],
    languageOptions: { parserOptions: { parser: tseslint.parser } },
  },
  {
    rules: {
      'vue/multi-word-component-names': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'vue/component-name-in-template-casing': [
        'error',
        'PascalCase',
        {
          registeredComponentsOnly: false,
          ignores: [],
        },
      ],
    },
  },
  {
    ignores: [
      '.output',
      '.data',
      '.nuxt',
      '.playground',
      '.nitro',
      '.cache',
      'dist',
      'node_modules',
      'logs',
      '*.log',
      '.DS_Store',
      '.fleet',
      '.idea',
      '.env',
      '.env.*',
      '!.env.example',
      'public',
      'eslint.config.js',
    ],
  },
)
