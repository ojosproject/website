import Footer from "components/Footer";
import Header from "components/Header";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./global.css";

const inter = Inter({
	subsets: ["latin"],
});

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
