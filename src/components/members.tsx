// members.tsx
// Ojos Project
//
// Gets and organizes the information about members of the Ojos Project to
// display it in https://docs.ojosproject.org/url/members/.
import "./members.scss";
import membersJSON from "@site/static/data/members.json";
import { useColorMode } from "@docusaurus/theme-common";

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

export function TeamMemberButton(props: { member?: Member }) {
	const { colorMode } = useColorMode();
	if (!props.member) {
		return <></>;
	}

	// Instead of using SCSS to configure light mode/dark mode changes,
	// Docusaurus uses the useColorMode hook because, well, React.
	// `members.scss` has a `.darkMemberBackground` and
	// `.lightMemberBackground` to help with giving them the appropriate
	// background to indicate that the member is clickable.
	return (
		<a
			className={
				"member_container " +
				(colorMode === "dark"
					? "darkMemberBackground"
					: "lightMemberBackground")
			}
			target="_blank"
			rel="noopener noreferrer"
			href={props.member.website.value}>
			<img
				src={props.member.avatar + "&s=175"}
				alt={`Gravatar for ${props.member.name}.`}
			/>
			<br />
			<h3>{props.member.name}</h3>
			<p>{props.member.association}</p>
			<p>{props.member.roles[0]}</p>
		</a>
	);
}
