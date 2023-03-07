export default {
  title: 'Finsweet ts-utils',
  description: 'A fully tree shakeable and strongly typed utility library for TypeScript and Webflow',

  themeConfig: {
    aside: true,
    logo: 'https://res.cloudinary.com/dfxtzg164/image/upload/v1670266641/logo_full_black_u3khkr.svg',
    siteTitle: 'ts-utils',
    // Navbar Link
    nav: [
      {
        // Dropdown Menu
        text: 'Changelog',
        items: [
          { text: 'v0.0.1', link: '/item-1' },
          { text: 'v0.0.2', link: '/item-2' },
          { text: 'v0.0.3', link: '/item-3' },
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
