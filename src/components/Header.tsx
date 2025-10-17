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
			<MenuItem key="iris" href="/iris/">
				Iris
			</MenuItem>
			<MenuItem key="palliaview" href="/palliaview/">
				Palliaview
			</MenuItem>
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
		<header className={styles.headerContainer}>
			<div className={styles.header}>
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
								color="white"
								onClick={() => {
									setShowMenu(false);
								}}
							/>
						) : (
							<MenuIcon
								color="white"
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
			</div>
		</header>
	);
}
