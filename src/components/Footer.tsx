import Link from "next/link";
import styles from "./Footer.module.css";
import { ReactNode } from "react";

type ListItemProps = {
	href: string;
	children: ReactNode;
};

function ListItem({ href, children }: ListItemProps) {
	const isExternal = href.includes("https://");

	return (
		<li>
			<Link
				href={href}
				target={isExternal ? "_blank" : null}
				rel={isExternal ? "noopener noreferrer" : null}>
				{children}
			</Link>
		</li>
	);
}

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<ul>
				<p>Ojos Project</p>
				<ListItem href="https://github.com/ojosproject/">GitHub</ListItem>
				<ListItem href="https://discord.gg/qZyQadbuMG">Discord</ListItem>
			</ul>
			<ul>
				<p>Documentation</p>
				<ListItem href="/docs/iris/">Iris</ListItem>
				<ListItem href="/docs/palliaview/">Palliaview</ListItem>
			</ul>
			<div className={styles.grandmaMessageContainer}>
				<p className={styles.grandmaMessage}>
					ojos means eyes, named after my grandma's nickname for me:{" "}
					<Link href="https://translate.google.com/?sl=es&tl=en&text=mis+ojos">
						mis ojos
					</Link>
				</p>
			</div>
		</footer>
	);
}
