import { Metadata } from "next";

export function metadataWith(
	webpageTitle: string,
	webpageDescription: string,
	webpageUrl: string,
	webpageHeaderUrl: string,
): Metadata {
	return {
		title: webpageTitle,
		description: webpageDescription,
		metadataBase: new URL("https://ojosproject.org/"),
		icons: ["/images/brand/logo.png"],
		openGraph: {
			type: "website",
			url: webpageUrl,
			title: webpageTitle,
			description: webpageDescription,
			images: webpageHeaderUrl,
		},
		twitter: {
			card: "summary_large_image",
			site: webpageUrl,
			title: webpageTitle,
			description: webpageDescription,
			images: webpageHeaderUrl,
		},
	};
}
