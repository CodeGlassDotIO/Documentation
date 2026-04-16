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
  url: 'https://codeglassdotio.github.io/', 
  // Set the /<baseUrl>/ pathname under which your site is served (Make sure that it ends with '/', and that the name is not'docs' as it does not like that)
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'CodeGlass', // Usually your GitHub org/user name.
  projectName: 'CodeGlass', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [
  ],
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    // image: 'img/docusaurus-social-card.jpg', // 
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
          href: 'https://github.com/CodeGlassDotIO/CodeGlassDotIO',
          label: 'GitHub',
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
              label: 'About',
              to: '/docs/about'
            },
            {
              label: 'Contact',
              href: '/contact',
            },
            {
              label: 'Privacy',
              href: '/docs/privacy',
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
              href: 'https://discord.gg/ytczAxSmX4',
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
