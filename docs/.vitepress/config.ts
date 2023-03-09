export default {
  title: 'Finsweet Open Source',
  description: 'A fully tree shakeable and strongly typed utility library for TypeScript and Webflow',
  cleanUrls: true,
  themeConfig: {
    aside: true,
    // Navbar Link
    nav: [
      {
        text: 'Finsweet Docs',
        items: [
          {
            text: 'ts-utils',
            link: '/get-started',
          },
          { text: 'attributes', link: 'https://finsweet.com/attributes', target: '_blank' },
          { text: 'Wized', link: 'https://wized.com/', target: '_blank' },
        ],
      },
      {
        // Dropdown Menu (Manual for now)
        // TODO: there is an open issue for this: https://github.com/vuejs/vitepress/issues/1550
        text: 'Changelog',
        items: [
          {
            text: 'v0.38.0',
            link: 'https://github.com/finsweet/ts-utils/releases/tag/v0.38.0',
            target: '_blank',
          },
          { text: 'v0.37.3', link: 'https://github.com/finsweet/ts-utils/releases/tag/v0.37.3', target: '_blank' },
          { text: 'v0.37.2', link: 'https://github.com/finsweet/ts-utils/releases/tag/v0.37.2', target: '_blank' },
          { text: 'v0.37.1', link: 'https://github.com/finsweet/ts-utils/releases/tag/v0.37.1', target: '_blank' },
          { text: 'v0.37.0', link: 'https://github.com/finsweet/ts-utils/releases/tag/v0.37.0', target: '_blank' },
        ],
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
            link: '/get-started',
          },
          { text: 'attributes', link: 'https://finsweet.com/attributes', target: '_blank' },
          { text: 'Wized', link: 'https://wized.com/', target: '_blank' },
        ],
      },
      {
        text: 'Table of Contents',
        collapsed: false,
        items: [
          { text: 'Get Started', link: '/get-started' },
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
