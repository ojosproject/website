import Link from "next/link";
import styles from "./Footer.module.css";
import { ReactNode } from "react";
import { Discord, Github, Instagram, OpenNewWindow } from "iconoir-react";

type ListItemProps = {
	href: string;
	icon?: boolean;
	children: ReactNode;
};

function ListItem({ href, icon = false, children }: ListItemProps) {
	const isExternal = href.includes("https://");

	return (
		<li>
			<Link
				href={href}
				target={isExternal ? "_blank" : null}
				rel={isExternal ? "noopener noreferrer" : null}>
				{children}{" "}
				{isExternal && !icon && (
					<OpenNewWindow width={20} style={{ marginLeft: 8 }} />
				)}
			</Link>
		</li>
	);
}

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<ul>
				<div className={styles.iconList}>
					<ListItem icon href="https://discord.gg/qZyQadbuMG">
						<Discord className={styles.socialIcon} />
					</ListItem>
					<ListItem icon href="https://github.com/ojosproject/">
						<Github className={styles.socialIcon} />
					</ListItem>
					<ListItem icon href="https://instagram.com/theojosproject/">
						<Instagram className={styles.socialIcon} />
					</ListItem>
				</div>
			</ul>
			<ul>
				<p>Solutions</p>
				<ListItem href="/iris/">Iris for Desktop</ListItem>
				<ListItem href="/palliaview/">Palliaview</ListItem>
			</ul>
			<ul>
				<p>Support</p>
				<ListItem href="https://ko-fi.com/ojosproject/">
					Donations (Ko-fi)
				</ListItem>
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
