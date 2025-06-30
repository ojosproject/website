export type NewsTag =
	| "all"
	| "announcements"
	| "software"
	| "engineering"
	| "events";

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
		tags: ["announcements", "software"],
	},
	{
		id: "urop-2024",
		title: "Ojos Project wins (another!) UROP grant",
		description:
			"In November 2024, Ojos Project submitted a proposal to the UC Irvine Undergraduate Research Opportunities Program.",
		timestamp: 0,
		tags: ["announcements"],
	},
	{
		id: "palliaview-v0.2",
		title: "Palliaview V0.2 Update",
		description:
			"The Engineering team has developed the Palliaview system into the next stage. We have 3D printed the new shell and mount for the system, making it customizablev and adaptable for any surface and purpose.",
		timestamp: 0,
		tags: ["announcements", "engineering"],
	},
	{
		id: "fall-2024-wrap",
		title: "Fall 2024 Wrap Up",
		description:
			"Another quarter in, another quarter out. Let’s talk about what we’ve been doing in the Ojos Project!",
		timestamp: 0,
		tags: ["announcements"],
	},
	{
		id: "2024-research-outreach",
		title: "Outreach with Iris: From Us to You",
		description:
			"Our research team is excited to announce our ongoing outreach efforts to engage with individuals within the hospice sector and beyond. Through both personalized engagement and campus-wide initiatives, we aim to connect with diverse perspectives to gather informed opinions about Iris.\n\nWe believe that your insights and experiences are crucial to our mission. Whether you're a healthcare professional, a student, or someone with an interest in healthcare innovation, we want to hear from you!",
		timestamp: 0,
		tags: ["announcements"],
	},
	{
		id: "road-to-iris",
		title: "Road to Learning Rust, NextJS, and Tauri",
		description:
			"Iris has been in development for the entire summer. It's been a slow but steady pace, seeing as how Iris comes with new experiences for the developers. With any new experience, however, there are challenges.\n\nIn this more technical news post, learn about how the team managed to get around working with the Rust programming language, NextJS, and Tauri!",
		timestamp: 0,
		tags: ["software"],
	},
	{
		id: "summer-2024-wrap",
		title: "Summer 2024 Wrap",
		description: "",
		timestamp: 0,
		tags: ["announcements"],
	},
	{
		id: "spring-2024-wrap",
		title: "Spring 2024 Wrap Up",
		description:
			"Happy pride! The 2024 Spring quarter is nearly at a close. That means we're having an overview of the accomplishments we had for this quarter, as well as outline our plans for the summer.",
		timestamp: 0,
		tags: ["announcements"],
	},
	{
		id: "surp-fellowship-2024",
		title: "The Ojos Project has been accepted into LAEP & SURP Fellowship",
		description:
			"Hey everybody! We are announcing that his upcoming summer quarter several of our members were able to achieve the Learning Aligned Employment Program (LAEP) & Summer Undergraduate Research Program (SURP) Fellowship for this upcoming Summer 2024. This is a huge honor for the Ojos Project team!",
		timestamp: 0,
		tags: ["announcements"],
	},
	{
		id: "symposium-2024",
		title: "Ojos @ 2024 UCI Research Symposium",
		description:
			"On May 17, the Ojos Project gave a poster presentation at the 2024 UCI Undergraduate Research Symposium! After months of work, we finally got to present everything.",
		timestamp: 0,
		tags: ["announcements", "events"],
	},
	{
		id: "winter-2024-wrap",
		title: "Winter 2024 Wrap Up",
		description:
			"The 2024 Winter quarter is almost finished! As we get ready to wrap up for Spring break, let's go over some of the accomplishments we had this quarter, as well as the plans we have for Spring 2024. Be back soon!",
		timestamp: 0,
		tags: ["announcements"],
	},
	{
		id: "welcome-home",
		title: "Welcome to ojosproject.org",
		description:
			"Introducing our domain: ojosproject.org! Let's have a quick chat about what's in a domain, why we got the domain, and how the Ojos Project is slowly but surely developing.",
		timestamp: 0,
		tags: ["announcements"],
	},
	{
		id: "urop-and-finances",
		title: "Ojos Project wins a UROP grant",
		description:
			"The Ojos Project won a UROP Research Experience Fellowship in December! Let's talk the grant, finances, and transparency.",
		timestamp: 0,
		tags: ["announcements"],
	},
	{
		id: "1706645600",
		title: "The Ojos Project is searching for interview candidates",
		description:
			"The Ojos Project is searching for individuals to participate in an interview regarding their experiences as caregivers for hospice patients. As researchers, our main responsibility is to collect data to build the right thing. If you're interested, please keep reading!",
		timestamp: 1706645600,
		tags: ["announcements"],
	},
	{
		id: "join-us",
		title: "Join the Ojos Project",
		description:
			"The Ojos Project is looking for people to join our team! We are a research project under UC Irvine Professor Mark S. Baldwin's Undergraduate Research Lab. Join us to create a different way technology can help individuals in palliative care and hospice!",
		timestamp: "April 16, 2024",
		tags: ["announcements"],
	},
];
