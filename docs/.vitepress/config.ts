export default {
  title: 'Finsweet Open Source',
  description: 'A fully tree shakeable and strongly typed utility library for TypeScript and Webflow',
  cleanUrls: true,
  head: [
    [
      'script',
      {
        src: '/index.js', // inject github versions to navbar
        defer: true,
      },
    ],
  ],
  base: '/open-source/ts-utils/',
  rewrites: {
    'get-started.md': 'index.md',
  },
  themeConfig: {
    aside: true,
    // Navbar Link
    nav: [
      {
        text: 'Finsweet Docs',
        items: [
          {
            text: 'ts-utils',
            link: '/',
          },
          { text: 'attributes', link: 'https://finsweet.com/attributes', target: '_blank' },
          { text: 'Wized', link: 'https://wized.com/', target: '_blank' },
        ],
      },
      {
        // Dropdown Menu (Manual for now)
        // TODO: there is an open issue for this: https://github.com/vuejs/vitepress/issues/1550
        text: 'Changelog',
        items: [{ text: ' A', link: '/item-1', target: '_blank', id: 'version-link' }],
      },
    ],
    // Social Icons
    socialLinks: [
      { icon: 'github', link: 'https://github.com/finsweet', target: '_blank' },
      { icon: 'twitter', link: 'https://twitter.com/thatsfinsweet', target: '_blank' },
      { icon: 'slack', link: 'https://finsweet.com/community/plus', target: '_blank' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/company/finsweet/', target: '_blank' },
    ],
    // Sidebar
    sidebar: [
      {
        text: 'Finsweet Docs',
        collapsed: false,
        items: [
          {
            text: 'ts-utils',
            link: '/',
          },
          { text: 'attributes', link: 'https://finsweet.com/attributes', target: '_blank' },
          { text: 'Wized', link: 'https://wized.com/', target: '_blank' },
        ],
      },
      {
        text: 'Table of Contents',
        collapsed: false,
        items: [
          { text: 'Get Started', link: '/' },
          { text: 'Webflow', link: '/webflow' },
          { text: 'Components', link: '/components' },
          { text: 'Type Guards', link: '/type-guards' },
          { text: 'Types', link: '/types' },
          { text: 'Helpers', link: '/helpers' },
        ],
      },
    ],
    footer: {
      message: 'Released under the ISC License.',
      copyright: 'Copyright © 2023-present Finsweet',
    },
    markdown: {
      theme: 'material-palenight',
      lineNumbers: true,
    },
    docFooter: {
      prev: 'Previous page',
      next: 'Next page',
    },
  },
};
//trigger deploy
