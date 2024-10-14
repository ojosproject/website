// root.tsx
// Ojos Project
import "./index.scss";
import Layout from "@theme/Layout";
import LogoHeader from "/static/images/header.png";
import IrisCodeScreenshot from "/static/images/iris_code_screenshot.png";
import SymposiumPhoto from "/static/images/2024-symposium-group.png";
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
					Ojos Project is a UCI-backed research endeavor in which we aim to
					understand the needs of hospice patients, caregivers, and healthcare
					specialists.
				</p>
			</header>

			<div className="our_work">
				<h1>Our Work</h1>
				<WorkShowcase
					title="Iris: The Hospice Management System"
					button_label="Read the Iris Docs"
					button_link="/docs/iris/"
					button_secondary_label="GitHub Repo"
					button_secondary_link="https://github.com/ojosproject/iris/"
					image={IrisCodeScreenshot}
					image_alt="Header of the Ojos Project">
					<p>
						Iris is the Ojos Project's hospice management system. Iris' goal is
						to improve the hospice experience by providing various features,
						such as <strong>medication logging</strong>,{" "}
						<strong>video monitoring</strong>, and more.
					</p>
					<p>
						Iris is being built using modern technologies, such as React/NextJS
						and Rust/Tauri.
					</p>

					<p>
						Iris is free and open-source software, meaning that you can install
						it on any Windows/Mac/Linux device.
					</p>
				</WorkShowcase>
				<WorkShowcase
					title="Palliaview"
					button_label="Read the Palliaview Docs"
					button_link="/docs/palliaview/"
					image={LogoHeader}
					image_alt="Header of the Ojos Project">
					<p>
						Palliaview is the Ojos Project's plug-and-play solution for Iris. It
						uses material specific to healthcare environments.
					</p>
				</WorkShowcase>
				<WorkShowcase
					title="Ojos Project: A Research Endeavor"
					button_label="Visit urlatuci.org"
					button_link="https://urlatuci.org/"
					image={SymposiumPhoto}
					image_alt="Header of the Ojos Project">
					<p>
						Thanks to the Undergraduate Research Lab, Ojos Project has been able
						to continue its research since 2023.
					</p>
					<p>
						As a research project, we{" "}
						<strong>read various academic papers</strong> and{" "}
						<strong>
							conduct interviews with caregivers and healthcare professionals
						</strong>
						. We will soon we conducting UI/UX research once we have a beta
						version of Iris up and running.
					</p>
					<p>
						We've also participated in UCI's Undergraduate Research
						Opportunities Program (UROP), winning{" "}
						<a href="/news/urop-and-finances/">one grant</a> and{" "}
						<a href="/news/surp-fellowship-2024/">a fellowship</a>. We also did{" "}
						<a href="/news/symposium-2024/">a poster presentation</a> at the UCI
						Undergraduate Research Symposium.
					</p>
				</WorkShowcase>
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
