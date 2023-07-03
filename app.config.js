export default defineAppConfig({
  docus: {
    title: 'Vaah Docs',
    description: 'Documentations of Vaah Products',



    socials: {
      twitter: 'weinvent',
      github: 'webreinvent/vaah-docs'
    },
    github: {
      dir: 'content',
      branch: 'master',
      repo: 'vaah-docs',
      owner: 'webreinvent',
      edit: true
    },
    aside: {
      level: 0,
      collapsed: true,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    },
    footer: {
      credits: {
        text: 'Build by WebReinvent',
        href: 'https://webreinvent.com',
        icon: ''
      },
      iconLinks: [
        {
          href: 'https://vaah.dev',
        }
      ]
    }
  }
})
