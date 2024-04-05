// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@pinia/nuxt', '@nuxt/image', '@nuxtjs/i18n'],
  ui: {
    icons: ['line-md', 'circle-flags'],
  },
  i18n: {
    vueI18n: './i18n.config.ts',
    locales: [
      { code: 'en-US', name: 'English' },
      { code: 'es-MX', name: 'Español' },
    ],
    strategy: 'no_prefix',
    defaultLocale: 'en-US',
  },
  colorMode: {
    preference: 'system',
    fallback: 'dark',
  },
});
