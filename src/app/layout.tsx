import Footer from "components/Footer";
import Header from "components/Header";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./global.css";
import { metadataWith } from "utils/metadata";

const inter = Inter({
	subsets: ["latin"],
});

export const metadata = metadataWith(
	"Ojos Project — Iris, Palliaview, and caregiver research",
	"Ojos Project is building Iris and Palliaview to improve the caregiver space with modern technology.",
	"https://ojosproject.org/",
	"/images/header.png",
);

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" className={inter.className}>
			<body>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
