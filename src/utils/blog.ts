export type NewsTag =
	| "all"
	| "announcements"
	| "project news"
	| "developers"
	| "engineers";

type ArticleMetadata = {
	id: string;
	title: string;
	description: string;
	timestamp: number;
	tags: NewsTag[];
};

export const articlesMetadata: ArticleMetadata[] = [
	{
		id: "introducing-iris",
		title: "Introducing Iris v0",
		description:
			"Ojos Project is proud to announce the release of Iris v0.1.0, the first iteration of our all-in-one caregiver tool!",
		timestamp: 0,
		tags: ["project news"],
	},
	{
		id: "urop-2024",
		title: "Ojos Project wins (another!) UROP grant",
		description:
			"In November 2024, Ojos Project submitted a proposal to the UC Irvine Undergraduate Research Opportunities Program.",
		timestamp: 0,
		tags: ["project news"],
	},
];
