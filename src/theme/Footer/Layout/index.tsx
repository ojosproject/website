import React from "react";
import clsx from "clsx";
import type { Props } from "@theme/Footer/Layout";

export default function FooterLayout({
	style,
	links,
	logo,
	copyright,
}: Props): JSX.Element {
	return (
		<footer
			className={clsx("footer", {
				"footer--dark": style === "dark",
			})}>
			<div className="container container-fluid">
				{links}
				{(logo || copyright) && (
					<div className="footer__bottom text--center">
						{logo && <div className="margin-bottom--sm">{logo}</div>}
						{copyright}
					</div>
				)}
				{
					<div className="footer__bottom text--center margin-bottom--sm footer__grandma--grey">
						<p className="footer_message">
							ojos means eyes, named after my grandma's nickname for me:{" "}
							<a
								href="https://translate.google.com/?sl=es&tl=en&text=mis+ojos"
								target="_blank"
								rel="noopener noreferrer">
								mis ojos
							</a>
						</p>
					</div>
				}
			</div>
		</footer>
	);
}
