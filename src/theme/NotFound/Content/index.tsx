// src/theme/NotFound/Content/index.tsx
// Ojos Project
//
// This is our custom 404 Not Found page. It lets the user know that the link
// is broken and provides resources. As a little bonus, mostly for myself, I
// added an icon by Sawaratsuki, who's been making cute software logos on X.
//
// This is a little different to other aspects of this repository. For one, it
// uses swizzling, which changes the structure of the page itself.
// More information on swizzling here:
// https://docusaurus.io/docs/swizzling
//
// Another difference in this code is that it uses the Docusaurus
// `<Translations/>` component, which we don't really use.. yet! More
// information on that here:
// https://docusaurus.io/docs/docusaurus-core#translate
//
// If you have any questions, let Carlos know.
import React from "react";
import clsx from "clsx";
import Translate from "@docusaurus/Translate";
import type { Props } from "@theme/NotFound/Content";
import Heading from "@theme/Heading";
import SawaratsukiNotFound from "@site/static/images/404NotFound.png";

export default function NotFoundContent({ className }: Props): JSX.Element {
	return (
		<main className={clsx("container margin-vert--xl", className)}>
			<div className="row">
				<div className="col col--6 col--offset-3">
					<Heading as="h1" className="hero__title">
						<Translate
							id="theme.NotFound.title"
							description="The title of the 404 page">
							Page Not Found
						</Translate>
					</Heading>

					<img src={SawaratsukiNotFound} alt="NotFound logo by Sawaratsuki." />

					<p>
						<Translate
							id="theme.NotFound.p1"
							description="The first paragraph of the 404 page">
							We could not find what you were looking for. Here are some
							resources:
						</Translate>
					</p>

					<ul>
						<li>
							<a
								href="https://github.com/ojosproject/website/issues/new/choose/"
								target="_blank"
								rel="noreferrer noopener">
								<Translate id="theme.NotFound.a1">
									Create a GitHub issue
								</Translate>
							</a>
						</li>
						<li>
							<a
								href="mailto:carlos@vldz.tech"
								target="_blank"
								rel="noreferrer noopener">
								<Translate id="theme.NotFound.a2">
									Email Carlos Valdez
								</Translate>
							</a>
						</li>
					</ul>

					<a
						href="https://twitter.com/sawaratsuki1004/"
						target="_blank"
						rel="noreferrer noopener">
						<Translate id="theme.NotFound.a3">
							"NotFound" logo by Sawaratsuki.
						</Translate>
					</a>
				</div>
			</div>
		</main>
	);
}
