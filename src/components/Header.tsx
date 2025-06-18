"use client";
import { useRouter } from "next/navigation";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

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
			<ul className={styles.navigationMenu}>
				<MenuItem href="/news/">News</MenuItem>
				<MenuItem href="/team/">Our Team</MenuItem>
			</ul>
		</header>
	);
}
