"use client";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import { useIsMobile } from "utils/useIsMobile";
import { Menu as MenuIcon, Xmark } from "iconoir-react";

type MenuItemProps = {
	href: string;
	children: ReactNode;
};

function MenuItem({ href, children }: MenuItemProps) {
	return (
		<li>
			<Link href={href}>{children}</Link>
		</li>
	);
}

function Menu() {
	return (
		<ul className={styles.navigationMenu}>
			<MenuItem href="/iris/">Iris</MenuItem>
			<MenuItem href="/palliaview/">Palliaview</MenuItem>
			<MenuItem href="/news/">News</MenuItem>
			<MenuItem href="/team/">Our Team</MenuItem>
		</ul>
	);
}

export default function Header() {
	const isMobile = useIsMobile();
	const [showMenu, setShowMenu] = useState(false);

	useEffect(() => {
		if (isMobile !== undefined) {
			setShowMenu(!isMobile);
		}
	}, []);

	if (isMobile === undefined) return null;

	return (
		<header className={styles.header}>
			<Link href="/">
				<Image
					src="/images/brand/logo-space.png"
					alt="Ojos Project logo"
					width={35}
					height={35}
					className={styles.ojosIcon}
				/>
			</Link>

			{isMobile ? (
				<>
					{showMenu ? (
						<Xmark
							onClick={() => {
								setShowMenu(false);
							}}
						/>
					) : (
						<MenuIcon
							onClick={() => {
								setShowMenu(true);
							}}
						/>
					)}
					{showMenu && <Menu />}
				</>
			) : (
				<Menu />
			)}
		</header>
	);
}
