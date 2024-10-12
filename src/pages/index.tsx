// root.tsx
// Ojos Project
import "./index.scss";
import Layout from "@theme/Layout";
import {
	Member,
	getActiveMemberWithContributions,
	TeamMemberButton,
} from "../components/members";
import WorkContainer from "../components/WorkContainer";

export default function Root() {
	return (
		<Layout>
			<header className="index-header">
				<h1>Working with you for a better hospice experience.</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.
				</p>
			</header>

			<div className="our_work">
				<h1>Our Work</h1>
				<div className="our_work_wrap">
					<WorkContainer
						image=""
						header="Iris"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua."
						href="/docs/iris/"
						href_label="Iris Docs"
					/>
					<WorkContainer
						image=""
						header="Palliaview"
						description="Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat."
						href="/docs/palliaview/"
						href_label="Palliaview Docs"
					/>
				</div>
			</div>

			<div className="our_team" id="team">
				<h1>Our Team</h1>
				<div className="team_members">
					{getActiveMemberWithContributions().map((member: Member) => {
						return <TeamMemberButton member={member} />;
					})}
				</div>

				<p>
					... and <a href="/docs/members/">more</a>.
				</p>
			</div>
		</Layout>
	);
}
