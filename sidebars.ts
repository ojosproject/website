// sidebars.ts
// Ojos Project
// 
// Defines the sidebars that the files in `/docs/` can use.
// Learn more here:
// https://docusaurus.io/docs/sidebar/

import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  default: {
    'Groups': [
      'url/README'
    ],
    'Policies': [
      'policies/git',
      'policies/image',
      'policies/inf199-acknowledgement',
      'policies/paperwork',
      'policies/structure',
      'policies/team-docs',
      'policies/url-lab-attendance'
    ]
  },

  groupUrl: {
    'Teams': [
      'url/developers/README',
      'url/engineering/README',
      'url/research/README'
    ],
    'Requirements': [
      'url/requirements/README',
      'url/requirements/interviews',
    ]
  },

  groupBreathe: [
    'breathe/proposal'
  ],

  groupSocial: [
    'social/proposal'
  ],

  groupUrlTeamEngineering: [
    'url/engineering/getting-started'
  ],
  groupUrlTeamDevelopers: {
    'Design': [
      'url/developers/design/c4-model'
    ],
    'Guides': [
      'url/developers/guides/decrypt-interviews',
      'url/developers/guides/gitlab-ide',
      'url/developers/guides/gravatar',
      'url/developers/guides/installing-wsl',
      'url/developers/guides/linux-filesystem',
      'url/developers/guides/ssh-setup',
      'url/developers/guides/updating-news',
    ],
    'WebDev': [
      'url/developers/webdev/git-transition',
      'url/developers/webdev/updating-docs'
    ]
  },
  groupUrlTeamResearch: {
    'Notes': [
      'url/research/notes/0',
      'url/research/notes/1',
      'url/research/notes/2',
      'url/research/notes/3',
      'url/research/notes/5'
    ]
  },
};

export default sidebars;