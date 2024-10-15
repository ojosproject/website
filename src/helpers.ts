// helpers.ts
// Ojos Project
//
// A file with functions and constants that are helpful.

import { Member } from "./types/types";
import membersJSON from "@site/static/data/members.json";

export function getActiveMembers(): Member[] {
	// A current member is a Member that meets the following criteria:
	//     - `Member.active` is `true`
	return membersJSON.filter((member) => member.active);
}

export function getActiveMemberWithContributions(): Member[] {
	// A current member with contributions is a Member that meets the following criteria:
	//     - `Member.active` is `true`
	//     - `Member.contributions` is not empty
	return membersJSON.filter((member) => member.active && member.contributed);
}

export function getFormerMembers(): Member[] {
	// A former member is a Member that meets the following criteria:
	//     - `Member.active` is `false`
	//     - `Member.contributions` is not empty
	return membersJSON.filter((member) => !member.active && member.contributed);
}

export const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];
