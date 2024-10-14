// root.tsx
// Ojos Project
import "./index.scss";
import Layout from "@theme/Layout";
import LogoHeader from "/static/images/header.png";
import {
	Member,
	getActiveMemberWithContributions,
	TeamMemberButton,
} from "../components/members";
import WorkShowcase from "../components/WorkShowcase";

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
				<WorkShowcase
					title="Iris: The Hospice Management System"
					description="Iris is the Ojos Project's free and open-source hospice management system."
					button_label="Read the Iris Docs"
					button_link="/docs/iris/"
					image={LogoHeader}
					image_alt="Header of the Ojos Project"
				/>
				<WorkShowcase
					title="Palliaview"
					description="Palliaview is the Ojos Project's plug-and-play solution for Iris. It uses material specific to healthcare environments."
					button_label="Read the Palliaview Docs"
					button_link="/docs/palliaview/"
					image={LogoHeader}
					image_alt="Header of the Ojos Project"
				/>
				<WorkShowcase
					title="Research"
					description="Ojos Project is ultimately a research project. We're actively researching various technologies and interviewing healthcare professionals to get input for Iris and Palliaview."
					image={LogoHeader}
					image_alt="Header of the Ojos Project"
				/>
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
