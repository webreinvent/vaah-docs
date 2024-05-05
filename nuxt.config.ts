
const routeRules = require("./json/routeRules.json");

export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],
  runtimeConfig: {
    public: {
      gtagId: 'G-XTMX8KRPPK'
    }
  },
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxtjs/fontaine',
    '@nuxtjs/google-fonts',
    'nuxt-og-image',
    '@pinia/nuxt',
  ],
  plugins: [
    "~/plugins/gtag.client"
  ],
  hooks: {
    // Define `@nuxt/ui` components as global to use them in `.md` (feel free to add those you need)
    'components:extend': (components) => {
      const globals = components.filter((c) => ['UButton', 'UIcon'].includes(c.pascalName))

      globals.forEach((c) => c.global = true)
    }
  },
  components: {
    "dirs": [
      {
        path: "components",
        global: true,
        pathPrefix: false,
        preload: true,
      }
    ]
  },
  content:{
    highlight: {
      theme: {
        // Default theme (same as single string)
        default: 'github-light',
        // Theme used if `html.dark`
        dark: 'github-dark',
        // Theme used if `html.sepia`
        sepia: 'monokai'
      },
      preload: [
        'php',
        'html',
        'css',
        'javascript',
        'js',
        'shell',
        'bash',
        'sh'
      ]
    }
  },
  ui: {
    icons: ['heroicons', 'simple-icons']
  },
  // Fonts
  fontMetrics: {
    fonts: ['DM Sans']
  },
  googleFonts: {
    display: 'swap',
    download: true,
    families: {
      'DM+Sans': [400, 500, 600, 700]
    }
  },
  routeRules: routeRules,
  devtools: {
    enabled: false
  },
  typescript: {
    strict: false
  }
})
