// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Unpackerr',
  tagline: 'Automated Archive Extractions',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: {
      removeLegacyPostBuildHeadAttribute: true,
      fasterByDefault: true,
      siteStorageNamespacing: true,
      mdx1CompatDisabledByDefault: true,
      // Infima cascade layers restyle the existing custom CSS.
      useCssCascadeLayers: false,
    },
  },

  url: 'https://unpackerr.zip',
  baseUrl: '/',
  organizationName: 'Unpackerr',
  projectName: 'unpackerr.github.io',

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
    mdx1Compat: {
      // Keep :::tip Title working for docs and generate.sh output.
      admonitions: true,
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'Unpackerr',
          src: 'img/icon.png',
        },
        items: [
          {
            to: 'docs/introduction',
            label: 'Documentation',
            position: 'left',
          },
          {
            href: 'https://github.com/Unpackerr/unpackerr',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Support',
            items: [
              {
                label: 'Go Lift Discord',
                href: 'https://golift.io/discord',
              },
              {
                label: 'Send Feedback',
                href: 'https://github.com/Unpackerr/unpackerr/issues/new',
              },
            ],
          },
          {
            title: 'Downloads',
            items: [
              {
                label: 'Packagecloud',
                href: 'https://packagecloud.io/golift',
              },
              {
                label: 'Latest Release',
                href: 'https://github.com/Unpackerr/unpackerr/releases/latest',
              },
            ],
          },
          {
            title: 'Information',
            items: [
              {
                label: 'Contact Us',
                href: 'mailto:code@golift.io',
              },
              {
                label: 'Software License',
                href: '/docs/unpackerr/license',
              },
            ],
          },
        ],
        copyright: `<div class="row"><div class="col footer__col">
      <a href="https://hub.docker.com/r/golift/unpackerr">&#9733; THIS PROJECT ON Docker Hub</a>
      </div><div class="col footer__col" style="text-align:left;">
      Copyright © 2018-${new Date().getFullYear()} Go Lift
      </div></div>`,
      },
    }),
};

export default config;
