// members.tsx
// Ojos Project
//
// Gets and organizes the information about members of the Ojos Project to
// display it in https://docs.ojosproject.org/url/members/.
import "./members.css";
import { Member } from "../types/types";
import { getActiveMembers, getFormerMembers } from "../helpers";
import { months } from "../helpers";

function getRowForCurrentMember(member: Member) {
	const joined = new Date(member.joined * 1000);

	return (
		<tr>
			<td>
				<img src={member.avatar + "&s=200"} alt={`${member.name}'s Gravatar`} />
			</td>
			<td>
				<p>
					<strong>{member.name}</strong>
				</p>
				<p>
					<strong>Primary Role:</strong> {member.roles[0]}
				</p>
				<p>
					<strong>Association:</strong> {member.association}
				</p>
				<p>
					<strong>Join Date:</strong>{" "}
					{`${months[joined.getMonth()]} ${joined.getDate()}, ${joined.getFullYear()}`}
				</p>
				<p>
					<strong>Email:</strong>{" "}
					<a
						href={`mailto:${member.email}`}
						target="_blank"
						rel="noopener noreferrer">
						{member.email}
					</a>
				</p>
				<p>
					<strong>Homepage:</strong>{" "}
					<a
						href={member.website.value}
						target="_blank"
						rel="noopener noreferrer">
						{member.website.label}
					</a>
				</p>
				{member.public_key && (
					<p>
						<strong>Public Key:</strong>{" "}
						{member.public_key ? (
							<a href={"/data/gpg/" + member.public_key}>GPG</a>
						) : (
							"None"
						)}
					</p>
				)}
			</td>
		</tr>
	);
}

function getRowForFormerMember(member: Member) {
	return (
		<tr>
			<td>
				<img src={member.avatar + "&s=200"} alt={`${member.name}'s Gravatar`} />
			</td>
			<td>
				<p>
					<strong>{member.name}</strong>
				</p>
				<p>
					<strong>Email:</strong>{" "}
					<a
						href={`mailto:${member.email}`}
						target="_blank"
						rel="noopener noreferrer">
						{member.email}
					</a>
				</p>
				<p>
					<strong>Website:</strong>{" "}
					<a
						href={member.website.value}
						target="_blank"
						rel="noopener noreferrer">
						{member.website.label}
					</a>
				</p>
			</td>
		</tr>
	);
}

export const CurrentMembersTable = () => (
	<table>
		<thead>
			<tr>
				<td>Photo</td>
				<td>Information</td>
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
			<td>Information</td>
		</thead>
		<tbody>
			{getFormerMembers().map((member) => {
				return getRowForFormerMember(member);
			})}
		</tbody>
	</table>
);

export function TeamMemberButton(props: { member?: Member }) {
	if (!props.member) {
		return <></>;
	}
	return (
		<a
			href={props.member.website.value}
			title={
				props.member.website.value.includes("https://")
					? `Visit ${props.member.name}'s ${props.member.website.label}`
					: `Email ${props.member.name}`
			}
			className="team-member-container"
			target="_blank"
			rel="noopener noreferrer">
			<img src={props.member.avatar} width={50} height={50} />
		</a>
	);
}
