import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import type {Props} from '@theme/NotFound/Content';
import Heading from '@theme/Heading';

export default function NotFoundContent({className}: Props): JSX.Element {
  return (
    <main className={clsx('container margin-vert--xl', className)}>
      <div className="row">
        <div className="col col--6 col--offset-3">
          <Heading as="h1" className="hero__title">
            <Translate
              id="theme.NotFound.title"
              description="The title of the 404 page">
              Page Not Found
            </Translate>
          </Heading>

          <img src="https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/e1cf3d23e1a6161c6ccfdb8c8e8edbada3b4384f/404Notfound/NotFound.png" alt="NotFound logo by Sawaratsuki." />

          <p>
            <Translate
              id="theme.NotFound.p1"
              description="The first paragraph of the 404 page">
              We could not find what you were looking for. Here are some resources:
            </Translate>
          </p>

          <ul>
          <li>
              <a href="https://github.com/ojosproject/website/issues/new/choose/" target="_blank" rel="noreferrer noopener" >
                <Translate
                  id="theme.NotFound.a1">
                    Create a GitHub issue
                </Translate>
              </a>
            </li>
            <li>
              <a href="mailto:cvaldezh@uci.edu" target="_blank" rel="noreferrer noopener" >
                <Translate
                  id="theme.NotFound.a2">
                    Email Carlos Valdez
                </Translate>
              </a>
            </li>
          </ul>

          <a href="https://github.com/SAWARATSUKI/ServiceLogos/blob/e1cf3d23e1a6161c6ccfdb8c8e8edbada3b4384f/404Notfound/NotFound.png" target="_blank" rel="noreferrer noopener" >
            <Translate
              id="theme.NotFound.a3">
                "NotFound" logo by Sawaratsuki.
            </Translate>
          </a>

        </div>
      </div>
    </main>
  );
}
