import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'CodeGlass',
  tagline: 'Next Generation Profiling Tools',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'http://localhost:30340', 
  // Set the /<baseUrl>/ pathname under which your site is served (Make sure that it ends with '/', and that the name is not'docs' as it does not like that)
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/documentation/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'CodeGlass', // Usually your GitHub org/user name.
  projectName: 'CodeGlass', // Usually your repo name.

  onBrokenLinks: 'throw',
  trailingSlash: false,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [
    './plugins/case-sensitive-paths',
    // [
    //   'docusaurus-plugin-cookie-consent',
    //   {
    //     title: 'Cookie Consent',
    //     description: 'We use cookies to enhance your browsing experience and analyze our traffic.',
    //     links: [
    //       { label: 'Privacy Policy', href: './docs/privacy' },
    //     ],
    //     categories: {
    //       analytics: {
    //         enabled: false
    //       },
    //       marketing: {
    //         enabled: false
    //       },
    //       functional: {
    //         enabled: false
    //       }
    //     }
    //   },
    // ],
    // [
    //   '@docusaurus/plugin-google-gtag',
    //   {
    //     trackingID: 'G-BT1911BCXX',
    //   },
    // ],
  ],
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/CodeGlassDotIO/Documentation',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    // image: 'img/docusaurus-social-card.jpg', // TODO: Replace
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'CodeGlass',
      logo: {
        alt: 'CodeGlass Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo_dark.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          position: 'left',
          label: 'License',
          to: `/license`,
        },
        {
          position: 'left',
          label: 'Contact',
          to: `/contact`,
        },
        {
          href: 'https://tooling.codeglass.io/',
          label: '.NET and other Tools',
          position: 'right',
        },
        {
          href: 'https://github.com/CodeGlassDotIO/Documentation',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://github.com/CodeGlassDotIO/CodeGlass',
          label: 'Download',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'CodeGlass',
          items: [
            {
              label: 'Contact',
              href: '/contact',
            },
            {
              label: 'Privacy',
              href: '/docs/legal/privacy',
            },
          ],
        },
        {
          title: 'Documentation',
          items: [
            {
              label: 'Documentation',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.com/invite/YWAcBSyBS8',
            },
            {
              label: 'Github',
              href: 'https://github.com/CodeGlassDotIO',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CodeGlass. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["julia"]
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
