import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Ojos Project - a UCI research project',
  favicon: 'https://docs.ojosproject.org/img/logo.png',

  url: 'https://ojosproject.org',
  baseUrl: '/',
  trailingSlash: true,

  organizationName: 'ojosproject',
  projectName: 'website',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: {
          routeBasePath: '/news',
          blogTitle: 'Project News',
          showReadingTime: false,
        },
        theme: {
          customCss: './src/css/custom.css'
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
          href: "https://docs.ojosproject.org/",
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
              label: 'Discord',
              href: 'https://discord.gg/SejmYUthEj'
            },
            {
              label: 'Finances',
              href: 'https://docs.google.com/spreadsheets/d/1W9qHV4Bm3wPtvsBWxmY4jpJY9JbhpSFIvcgRSFbrr78/'
            },
            {
              label: 'Found a bug? Email us!',
              href: 'mailto:contact-project+ojosproject-website-54703113-issue-@incoming.gitlab.com'
            }
          ]
        },
        {
          title: 'URL Team',
          items: [
            {
              label: 'URL Team Docs',
              href: 'https://docs.ojosproject.org/teams/url/'
            },
            {
              label: 'GitLab',
              href: 'https://gitlab.com/ojosproject/'
            },
            {
              label: 'Undergraduate Research Lab',
              href: 'https://markbaldw.in/url/'
            }
          ]
        },
        {
          title: 'Research Team',
          items: [
            {
              label: 'Research Team Docs',
              href: 'https://docs.ojosproject.org/teams/research/',
            },
            {
              label: 'Google Scholar',
              href: 'https://scholar.google.com/'
            },
            {
              label: 'IVC Library',
              href: 'https://imperial.edu/courses-and-programs/divisions/arts-and-letters/library-2/index.html'
            },
            {
              label: 'UCI Library',
              href: 'https://www.lib.uci.edu/'
            }
          ]
        }
      ],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
