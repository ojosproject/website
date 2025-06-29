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

export function isoToReadable(iso: string) {
	const date = new Date(iso);
	return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}
