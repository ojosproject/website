// types.ts
// Ojos Project
//
// This file includes types for the website.

export type Member = {
	name: string;
	email: string;
	roles: string[];
	association: string;
	public_key: string;
	website: { label: string; value: string };
	joined: number;
	avatar: string;
	contributed: boolean;
	active: boolean;
};
