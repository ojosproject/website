import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  // Appears as the order the keys appear in
  // https://docusaurus.io/docs/api/docusaurus-config
  title: 'Ojos Project - a UCI research project',
  url: 'https://ojosproject.org',
  baseUrl: '/',

  favicon: 'https://docs.ojosproject.org/img/logo.png',
  trailingSlash: true,
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'description',
        content: 'The Ojos Project is a research project developing a tablet-like device that can be used in an at-home hospice care setting. This device is being developed under Professor Mark S. Baldwin\'s Undergraduate Research Lab at the University of California, Irvine.'
      }
    }
  ],

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: {
          path: './news',
          routeBasePath: '/news',
          blogTitle: 'Project News',
          // ? Cannot have last update time show up without an editUrl link set
          editUrl: "https://gitlab.com/ojosproject/website/-/tree/dev/",
          showLastUpdateTime: true,
        },
        theme: {
          customCss: './src/css/custom.scss'
        }
      } satisfies Preset.Options,
    ],
  ],

  plugins: ['docusaurus-plugin-sass', [
    '@docusaurus/plugin-client-redirects',
    {
      redirects: [
        {from: '/join-us/', to: '/news/join-us/'}
      ]
    }
  ]],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false
    },
    image: 'https://docs.ojosproject.org/img/header.png',
    navbar: {
      title: 'Ojos Project',
      logo: {
        alt: 'Ojos Project logo',
        src: 'https://docs.ojosproject.org/img/logo-space.png',
      },
      items: [
        {
          label: 'Project News',
          to: '/news/'
        },
        {
          label: 'Join us!',
          to: '/news/join-us/'
        },
        {
          label: "Documentation",
          href: "https://docs.ojosproject.org/url/",
          position: "right"
        }
      ],
    },
    footer: {
      links: [
        {
          title: 'Ojos Project',
          items: [
            {
              label: 'Slack',
              href: 'https://ojosproject.slack.com/'
            },
            {
              label: 'Finances',
              href: 'https://docs.google.com/spreadsheets/d/1W9qHV4Bm3wPtvsBWxmY4jpJY9JbhpSFIvcgRSFbrr78/'
            },
            {
              label: 'GitHub',
              href: 'https://github.com/ojosproject/'
            },
            {
              label: 'Undergraduate Research Lab',
              href: 'https://markbaldw.in/url/'
            },
          ]
        },
        {
          title: 'Documentation',
          items: [
            {
              label: 'URL Group Docs',
              href: 'https://docs.ojosproject.org/url/'
            },
            {
              label: 'Developers Docs',
              href: 'https://docs.ojosproject.org/url/developers/'
            },
            {
              label: 'Engineering Docs',
              href: 'https://docs.ojosproject.org/url/engineering/'
            }
          ]
        }
      ],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
