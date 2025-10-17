import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
	// Appears as the order the keys appear in
	// https://docusaurus.io/docs/api/docusaurus-config
	title: "Ojos Project",
	url: "https://ojosproject.org",
	baseUrl: "/",

	favicon: "https://ojosproject.org/images/logo.png",
	trailingSlash: true,
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},
	future: { experimental_faster: true, v4: true },
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	headTags: [
		{
			tagName: "meta",
			attributes: {
				name: "description",
				content:
					"The Ojos Project is a research project developing a kiosk-like device that can be used in an at-home care setting. This device is being developed under Undergraduate Research Lab at the University of California, Irvine.",
			},
		},
	],

	markdown: {
		mermaid: true,
	},
	themes: ["@docusaurus/theme-mermaid"],

	presets: [
		[
			"classic",
			{
				docs: {
					sidebarPath: "./sidebars.ts",
				},
				blog: {
					path: "./news",
					routeBasePath: "/news",
					blogTitle: "Project News",
					blogDescription:
						"Stay updated with the Ojos Project, a research project at the University of California, Irvine. The Ojos Project is creating a hospice device to help with the coordination of hospice patient care.",
					blogSidebarCount: 10,
					onInlineAuthors: "throw",
					onUntruncatedBlogPosts: "throw",
				},
				theme: {
					customCss: "./src/css/custom.css",
				},
			} satisfies Preset.Options,
		],
	],

	plugins: [
		[
			"@docusaurus/plugin-client-redirects",
			{
				redirects: [
					{ from: "/join-us/", to: "/news/join-us/" },
					{ from: "/qr/", to: "/" }, // Old `/qr/`
					{
						from: "/iris/",
						to: "https://github.com/ojosproject/iris/",
					},
					{
						from: "/docs/iris/",
						to: "https://github.com/ojosproject/iris/tree/main/docs",
					},
					{
						from: "/docs/iris/requirements/",
						to: "https://docs.google.com/document/d/1EJlghYqhiPrZsjPUHxxG_WeHkHulPB4a-HF8fL7QsCs/",
					},
					{
						from: "/events/uci-symposium-2024/",
						to: "/",
					},
					{
						from: "/docs/url/meeting-reports/",
						to: "/docs/meeting-reports/",
					},
					{
						from: "/docs/url/members/",
						to: "/docs/members/",
					},
					{
						from: "/docs/url/proposal/",
						to: "/docs/proposal/",
					},
					{
						from: "/docs/policies/url-lab-attendance/",
						to: "/docs/policies/url-attendance/",
					},
					{
						from: "/data/gpg/",
						to: "/docs/members/",
					},
				],
			},
		],
	],

	themeConfig: {
		colorMode: {
			defaultMode: "light",
			respectPrefersColorScheme: true,
		},
		image: "https://ojosproject.org/images/header.png",
		navbar: {
			title: "Ojos Project",
			logo: {
				alt: "Ojos Project logo",
				src: "https://ojosproject.org/images/logo-space.png",
				className: "ojos_logo_in_navbar",
			},
			items: [
				{
					label: "News",
					to: "/news/",
				},
				{
					label: "Our Team",
					to: "/docs/members/",
				},
			],
		},
		footer: {
			links: [
				{
					title: "Ojos Project",
					items: [
						{
							label: "Discord",
							href: "https://discord.gg/qZyQadbuMG",
						},
						{
							label: "GitHub",
							href: "https://github.com/ojosproject/",
						},
					],
				},
				{
					title: "Documentation",
					items: [
						{
							label: "Iris Docs",
							href: "https://github.com/ojosproject/iris/tree/main/docs",
						},
						{
							label: "Palliaview Docs",
							href: "https://docs.google.com/document/d/1l60y9Kog3sbdiTm0TlWQSpLGMTpvvO05bGnn72r-dA8/",
						},
						{
							label: "Website Docs",
							to: "/docs/website/",
						},
					],
				},
			],
		},
	} satisfies Preset.ThemeConfig,
};

export default config;
