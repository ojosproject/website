// members.tsx
// Ojos Project
//
// Gets and organizes the information about members of the Ojos Project to
// display it in https://docs.ojosproject.org/url/members/.
import "./members.scss";
import membersJSON from "@site/static/data/url/members.json";

export interface Member {
	name: string;
	email: string;
	roles: string[];
	association: string;
	website: { label: string; value: string };
	joined: number;
	avatar: string;
	contributions: string[];
	active: boolean;
}

function getActiveMembers(): Member[] {
	// A current member is a Member that meets the following criteria:
	//     - `Member.active` is `true`
	return membersJSON.filter((member) => member.active);
}

export function getActiveMemberWithContributions(): Member[] {
	// A current member with contributions is a Member that meets the following criteria:
	//     - `Member.active` is `true`
	//     - `Member.contributions` is not empty
	return membersJSON.filter(
		(member) => member.active && member.contributions.length,
	);
}

function getFormerMembers(): Member[] {
	// A former member is a Member that meets the following criteria:
	//     - `Member.active` is `false`
	//     - `Member.contributions` is not empty
	return membersJSON.filter(
		(member) => !member.active && member.contributions.length,
	);
}

function getRowForCurrentMember(member: Member) {
	const joined = new Date(member.joined * 1000);
	const months = [
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

	return (
		<tr>
			<td>
				<img src={member.avatar + "&s=150"} alt={`${member.name}'s Gravatar`} />
			</td>
			<td>{member.name}</td>
			<td>{`${months[joined.getMonth()]} ${joined.getDate()}, ${joined.getFullYear()}`}</td>
			<td>
				<a
					href={`mailto:${member.email}`}
					target="_blank"
					rel="noopener noreferrer">
					{member.email}
				</a>
			</td>
			<td>
				<a
					href={member.website.value}
					target="_blank"
					rel="noopener noreferrer">
					{member.website.label}
				</a>
			</td>
		</tr>
	);
}

function getRowForFormerMember(member: Member) {
	return (
		<tr>
			<td>
				<img src={member.avatar + "&s=150"} alt={`${member.name}'s Gravatar`} />
			</td>
			<td>{member.name}</td>
			<td>
				<a
					href={`mailto:${member.email}`}
					target="_blank"
					rel="noopener noreferrer">
					{member.email}
				</a>
			</td>
			<td>
				<a
					href={member.website.value}
					target="_blank"
					rel="noopener noreferrer">
					{member.website.label}
				</a>
			</td>
			<td>
				<ul>
					{member.contributions.map((contribution) => {
						return <li>{contribution}</li>;
					})}
				</ul>
			</td>
		</tr>
	);
}

export const CurrentMembersTable = () => (
	<table>
		<thead>
			<tr>
				<td>Photo</td>
				<td>Name</td>
				<td>Joined</td>
				<td>Email</td>
				<td>Website</td>
			</tr>
		</thead>
		<tbody>
			{getActiveMembers().map((member) => {
				return getRowForCurrentMember(member);
			})}
		</tbody>
	</table>
);

export const FormerMembersTable = () => (
	<table>
		<thead>
			<td>Photo</td>
			<td>Name</td>
			<td>Email</td>
			<td>Website</td>
			<td>Contributions</td>
		</thead>
		<tbody>
			{getFormerMembers().map((member) => {
				return getRowForFormerMember(member);
			})}
		</tbody>
	</table>
);
