import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@pinia/nuxt', '@nuxtjs/i18n'],
  i18n: {
    langDir: 'locales',
    lazy: true,
    locales: [
      { code: 'en', file: 'en.json' },
      { code: 'fr', file: 'fr.json' },
    ],
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
  },
  typescript: {
    strict: true,
  },
  nitro: {
    // @ts-expect-error: Nitro config type is not up to date
    compatibilityDate: '2024-08-22',
  },
  runtimeConfig: {
    public: {
      compatibilityDate: '2024-08-22',
    },
  },
  routeRules: {
    '/': { redirect: '/IndexPage' },
  },
})
