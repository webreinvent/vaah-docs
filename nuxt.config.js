export default defineNuxtConfig({

  devtools: {
    enabled: false,
  },

  // https://github.com/nuxt-themes/docus
  extends: '@nuxt-themes/docus',

  modules: [
    // https://github.com/nuxt-modules/plausible
    '@nuxtjs/plausible',
    // https://github.com/nuxt/devtools
    '@nuxt/devtools',
    '@nuxthq/ui',
  ],
  ui: {
    primary: '#fb2d4f',
  }

})
