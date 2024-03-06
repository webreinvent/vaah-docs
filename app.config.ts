let credits = 'Copyright © '+new Date().getFullYear()
export default defineAppConfig({
  ui: {
    primary: 'green',
    danger: 'red',
    gray: 'slate',
    footer: {
      bottom: {
        left: 'text-sm text-gray-500 dark:text-gray-400',
        wrapper: 'border-t border-gray-200 dark:border-gray-800'
      }
    }
  },
  seo: {
    siteName: 'WebReinvent Internal Docs',
  },
  header: {
    logo: {
      alt: 'WebReinvent Internal Docs',
      light: '/logos/light.svg',
      dark: '/logos/dark.svg'
    },
    search: false,
    colorMode: true,
    links: [{
      icon: 'i-simple-icons-github',
      to: 'https://github.com/webreinvent/webreinvent-docs',
      target: '_blank',
      'aria-label': 'Docs template on GitHub'
    }]
  },
  footer: {
    credits: credits,
    colorMode: false,
    links: [{
      icon: 'i-simple-icons-github',
      to: 'https://github.com/webreinvent',
      target: '_blank',
      'aria-label': 'WebReinvent on GitHub'
    }]
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Community',
      edit: 'https://github.com/webreinvent/webreinvent-docs/edit/develop/content',
      links: [{
        icon: 'i-heroicons-book-open',
        label: 'Nuxt UI Pro docs',
        to: 'https://ui.nuxt.com/pro/guide',
        target: '_blank',
      }]
    }
  }
})
