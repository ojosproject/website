"use client";
import { useRouter } from "next/navigation";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";

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

export default function Header() {
	const router = useRouter();
	const [showMenu, setShowMenu] = useState(true);
	const [hamburgerIcon, setHamburgerIcon] = useState(false);

	useEffect(() => {
		setHamburgerIcon(window.outerWidth < 480);
		setShowMenu(window.outerWidth > 480);

		return () => {
			setHamburgerIcon(window.outerWidth < 480);
			setShowMenu(window.outerWidth > 480);
		};
	}, []);

	return (
		<header className={styles.header}>
			<Image
				src="/images/brand/logo-space.png"
				alt="Ojos Project logo"
				width={35}
				height={35}
				className={styles.ojosIcon}
				onClick={() => router.push("/")}
			/>

			{hamburgerIcon && (
				<button
					onClick={() => {
						console.log(showMenu);
						setShowMenu(!showMenu);
					}}>
					M
				</button>
			)}

			{showMenu && (
				<ul className={styles.navigationMenu}>
					<MenuItem href="/iris/">Iris</MenuItem>
					<MenuItem href="/palliaview/">Palliaview</MenuItem>
					<MenuItem href="/news/">News</MenuItem>
					<MenuItem href="/team/">Our Team</MenuItem>
				</ul>
			)}
		</header>
	);
}
