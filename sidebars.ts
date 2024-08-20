// sidebars.ts
// Ojos Project
//
// Defines the sidebars that the files in `/docs/` can use.
// Learn more here:
// https://docusaurus.io/docs/sidebar/

import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
	default: [
		{
			type: "category",
			label: "Software",
			collapsible: true,
			collapsed: false,
			items: [
				"iris/README",
				{ type: "link", label: "Website Docs", href: "/docs/website/" },
			],
		},
		
		,
	],

	policies: [
		{
			type: "category",
			label: "Policies",
			link: {
				type: "generated-index",
				title: "Ojos Project Policies",
				description:
					"These are the policies we follow at the Ojos Project. Make sure you understand them. If you have any questions, please contact Carlos. Thanks!",
				slug: "/policies/",
				image: "@site/static/images/uci-pride-header.png",
			},
			items: [
				"policies/email",
				"policies/git",
				"policies/logo",
				"policies/inf199-acknowledgement",
				"policies/paperwork",
				"policies/url-attendance",
			],
		},
	],
	hardwarePalliview:[{
		type: "category",
		link: { type: "doc", id: "palliview/README" },
		label: "Palliview Docs",
		collapsible: false,
		items: [
			"palliview/requirements",
			{
				type: "category",
				link: {
					type: "generated-index",
					title: "Hardware Design",
					description:
						"The is made by the engineer team using computer aided software programs such as Solidworks,OnShape, and AutoDesk Fusion ",
					slug: "palliview/design/",
					image: "@site/static/images/uci-pride-header.png",
				},
				label: "Itteration 1",
				collapsible: true,
				items: [
					"iris/documentation",
					"iris/engineering-models",
					"iris/licensing",
					"iris/palliview-digital-models",
				],
			},
		]
	},
],

	]
	softwareIris: [
		{
			type: "category",
			link: { type: "doc", id: "iris/README" },
			label: "Iris Docs",
			collapsible: false,
			items: [
				"iris/requirements",
				{
					type: "category",
					link: {
						type: "generated-index",
						title: "Software Design",
						description:
							"These are designs made by the Developers team. They're often made with Figma.",
						slug: "iris/design/",
						image: "@site/static/images/uci-pride-header.png",
					},
					label: "Design",
					collapsible: true,
					items: [
						"iris/c4-model",
						"iris/database-schema",
						"iris/filesystem",
						"iris/flowcharts",
					],
				},
			],
		},
	],

	softwareWebsite: [
		{
			type: "category",
			link: {
				type: "generated-index",
				title: "Website Docs",
				description:
					"Our website has a lot of neat little features, such as Gravatar implementation and keeping track of member contributions. This is here to ensure you know how to interact with the website if you need to.",
				slug: "/website/",
				image: "@site/static/images/header.png",
			},
			label: "Website Docs",
			collapsible: false,
			items: [
				"website/gravatar",
				"website/kimai",
				"website/members-json",
				"website/updating-docs",
				"website/updating-meeting-reports",
				"website/updating-news",
			],
		},
	],
};

export default sidebars;
