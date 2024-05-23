import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
	// Appears as the order the keys appear in
	// https://docusaurus.io/docs/api/docusaurus-config
	title: "Ojos Project - a UCI research project",
	url: "https://ojosproject.org",
	baseUrl: "/",

	favicon: "https://ojosproject.org/images/logo.png",
	trailingSlash: true,
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	headTags: [
		{
			tagName: "meta",
			attributes: {
				name: "description",
				content:
					"The Ojos Project is a research project developing a tablet-like device that can be used in an at-home hospice care setting. This device is being developed under Professor Mark S. Baldwin's Undergraduate Research Lab at the University of California, Irvine.",
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
					editUrl: "https://github.dev/ojosproject/website/blob/dev/",
					showLastUpdateAuthor: true,
					showLastUpdateTime: true,
				},
				blog: {
					path: "./news",
					routeBasePath: "/news",
					blogTitle: "Project News",
					// ? Cannot have last update time show up without an editUrl link set
					editUrl: "https://github.dev/ojosproject/website/blob/dev/",
					showLastUpdateTime: true,
				},
				theme: {
					customCss: "./src/css/custom.scss",
				},
			} satisfies Preset.Options,
		],
	],

	plugins: [
		"docusaurus-plugin-sass",
		[
			"@docusaurus/plugin-client-redirects",
			{
				redirects: [
					{ from: "/join-us/", to: "/news/join-us/" },
					{ from: "/qr/", to: "/" }, // Old `/qr/`
					{ from: "/iris/", to: "/docs/iris/" },
					{
						from: "/docs/url/requirements/",
						to: "/docs/iris/requirements/",
					},
					{
						from: "/docs/url/developers/design/",
						to: "/docs/iris/design/",
					},
					{
						from: "/docs/url/developers/c4-model/",
						to: "/docs/iris/c4-model/",
					},
					{
						from: "/docs/url/developers/database-schema/",
						to: "/docs/iris/database-schema/",
					},
					{
						from: "/docs/url/developers/flowcharts/",
						to: "/docs/iris/flowcharts/",
					},
					{
						from: "/events/uci-symposium-2024/",
						to: "/",
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
					label: "Project News",
					to: "/news/",
				},
				{
					label: "Documentation",
					to: "/docs/",
					position: "right",
				},
			],
		},
		footer: {
			links: [
				{
					title: "Ojos Project",
					items: [
						{
							label: "Slack",
							href: "https://ojosproject.slack.com/",
						},
						{
							label: "Finances",
							href: "https://docs.google.com/spreadsheets/d/1W9qHV4Bm3wPtvsBWxmY4jpJY9JbhpSFIvcgRSFbrr78/",
						},
						{
							label: "GitHub",
							href: "https://github.com/ojosproject/",
						},
						{
							label: "Undergraduate Research Lab",
							href: "https://markbaldw.in/url/",
						},
					],
				},
				{
					title: "Documentation",
					items: [
						{
							label: "URL Group Docs",
							to: "/docs/url/",
						},
						{
							label: "Developers Docs",
							to: "/docs/url/developers/",
						},
						{
							label: "Engineering Docs",
							to: "/docs/url/engineering/",
						},
						{
							label: "Glossary",
							to: "/docs/url/glossary/",
						},
						{
							label: "Meeting Reports",
							to: "/docs/url/meeting-reports/",
						},
						{
							label: "Policies",
							to: "/docs/policies/",
						},
					],
				},
			],
		},
	} satisfies Preset.ThemeConfig,
};

export default config;
