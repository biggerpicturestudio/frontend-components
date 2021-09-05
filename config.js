const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://frontend.studiosidekicks.com',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: '/studio-sidekicks-logo.svg',
    logoLink: '/',
    title:
      "Front-end components at Studio Sidekicks - library",
    githubUrl: '',
    helpUrl: '',
    tweetText: '',
    social: ``,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/overview',
      '/navigations',
    ],
    collapsedNav: [
    ],
    links: [
      { text: 'Bigger Picture', link: 'https://www.biggerpicture.agency' },
      { text: 'Studio Sidekicks', link: 'https://www.studiosidekicks.com' },
      { text: 'Web Dev Insider', link: 'https://www.webdevinsider.pl' },
      { text: 'Alfred', link: 'https://docs.alfred-cms.com' },
    ],
    frontline: false,
    ignoreIndex: true,
    title:
      "",
  },
  siteMetadata: {
    title: 'Front-end components at Studio Sidekicks - library',
    description: 'Ready-to-use, front-end components. Dedicated for Alfred-based web projects.',
    ogImage: null,
    docsLocation: 'https://github.com/hasura/gatsby-gitbook-boilerplate/tree/master/content',
    favicon: '/favicon.png',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Front-end components',
      short_name: 'Frontend',
      start_url: '/',
      background_color: '#000000',
      theme_color: '#000000',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        /*{
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },*/
      ],
    },
  },
};

module.exports = config;
