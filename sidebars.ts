// sidebars.ts
// Ojos Project
// 
// Defines the sidebars that the files in `/docs/` can use.
// Learn more here:
// https://docusaurus.io/docs/sidebar/

import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  policies: [
      'policies/git',
      'policies/image',
      'policies/inf199-acknowledgement',
      'policies/paperwork',
      'policies/structure',
      'policies/team-docs',
      'policies/url-lab-attendance'
  ],

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

  groupUrlTeamEngineering: [
    'url/engineering/getting-started'
  ],
  groupUrlTeamDevelopers: {
    'Design': [
      'url/developers/c4-model'
    ],
    'Guides': [
      'url/developers/decrypt-interviews',
      'url/developers/gitlab-ide',
      'url/developers/gravatar',
      'url/developers/installing-wsl',
      'url/developers/linux-filesystem',
      'url/developers/ssh-setup',
      'url/developers/updating-news',
    ],
    'WebDev': [
      'url/developers/git-transition',
      'url/developers/updating-docs'
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