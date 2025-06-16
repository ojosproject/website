import Footer from "components/Footer";
import Header from "components/Header";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./global.css";
import { Metadata } from "next";

const inter = Inter({
	subsets: ["latin"],
});
const webpageTitle = "Ojos Project";
const webpageDescription =
	"Ojos Project is building Iris and Palliaview to improve the caregiver space with modern technology.";
const webpageUrl = "https://ojosproject.org/";
const webpageHeaderFile = "/images/header.png";

export const metadata: Metadata = {
	title: webpageTitle,
	description: webpageDescription,
	metadataBase: new URL(webpageUrl),
	icons: ["/images/logo.png"],
	openGraph: {
		type: "website",
		url: webpageUrl,
		title: webpageTitle,
		description: webpageDescription,
		images: webpageHeaderFile,
	},
	twitter: {
		card: "summary_large_image",
		site: webpageUrl,
		title: webpageTitle,
		description: webpageDescription,
		images: webpageHeaderFile,
	},
};

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
