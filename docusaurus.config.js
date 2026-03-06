// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'xBerkth Modding',
  tagline: 'Thanks for checking out my mods 💙',
  favicon: 'img/favicon.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://xberkth.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/palworld-modding/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'xberkth', // Usually your GitHub org/user name.
  projectName: 'palworld-modding', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/xberkth/xberkth.github.io/',
          exclude: [
            '**/tutorial-basics/**',
            '**/tutorial-extras/**',
            '**/legendary-glider/**',
          ],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
      type: 'text/css',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/social-card.png',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      // docs: {
      //   sidebar: {
      //     hideable: true,
      //   },
      // },
      navbar: {
        title: 'xBerkth Modding',
        logo: {
          alt: 'xBerkth Modding Logo',
          src: 'img/logo-dark.png',
          srcDark: 'img/logo-light.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'Sidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://discord.gg/AvKjngsppx',
            position: 'right',
            className: 'header-discord-link',
            'aria-label': 'Discord',
          },
          {
            href: 'https://github.com/xberkth/xberkth.github.io/palworld-modding',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/docs/introduction',
                className: 'footer-icon-intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                html: `
                  <a class="footer__link-item" href="https://www.nexusmods.com/profile/xBerkth" target="_blank" rel="noopener">
                    <i class="fa-solid fa-cube" style="margin-right: 8px;"></i> Nexus Mods
                  </a>
                `,
              },
              {
                html: `
                  <a class="footer__link-item" href="https://www.curseforge.com/members/xberkth/projects" target="_blank" rel="noopener">
                    <i class="fa-solid fa-fire" style="margin-right: 8px;"></i> CurseForge
                  </a>
                `,
              },
              {
                html: `
                  <a class="footer__link-item" href="https://discord.gg/AvKjngsppx" target="_blank" rel="noopener">
                    <i class="fa-brands fa-discord" style="margin-right: 8px;"></i> Discord
                  </a>
                `,
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                html: `
                  <a class="footer__link-item" href="https://github.com/xberkth/xberkth.github.io/palworld-modding" target="_blank" rel="noopener">
                    <i class="fa-brands fa-github" style="margin-right: 8px;"></i> GitHub
                  </a>
                `,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} xBerkth. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    })
};

export default config;
