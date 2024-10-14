export type Member = {
	name: string;
	email: string;
	roles: string[];
	association: string;
	website: { label: string; value: string };
	joined: number;
	avatar: string;
	contributions: string[];
	active: boolean;
};
