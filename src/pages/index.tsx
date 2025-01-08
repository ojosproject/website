// index.tsx
// Ojos Project
import "../css/index.css";
import Layout from "@theme/Layout";
import IrisCodeScreenshot from "/static/images/iris_code_screenshot.png";
import PalliaviewDesign from "/static/images/v0.2-digital-model.jpg";
import SymposiumPhoto from "/static/images/2024-symposium-group.png";
import WorkShowcase from "../components/WorkShowcase";
import { getActiveMemberWithContributions } from "../helpers";
import EventCountdown from "../components/temp/EventCountdown";

export default function Root() {
	const members = getActiveMemberWithContributions();

	return (
		<Layout>
			<EventCountdown />
			<header className="index-header">
				<h1>Working with you for a better hospice experience.</h1>
				<p>
					Ojos Project is a UCI-backed research endeavor in which we aim to
					understand the needs of hospice patients, caregivers, and healthcare
					specialists. Our end goal is to build quality and open products for
					the hospice experience.
				</p>
			</header>

			<div className="our_work">
				<h1>Our Work</h1>
				<WorkShowcase
					title="Iris: The Hospice Management System"
					button_label="Read the Iris Docs"
					button_link="https://github.com/ojosproject/iris/tree/main/docs"
					button_secondary_label="GitHub Repo"
					button_secondary_link="https://github.com/ojosproject/iris/"
					image={IrisCodeScreenshot}
					image_alt="Header of the Ojos Project"
					members={members.filter(
						(m) =>
							m.roles.includes("Developers Team") ||
							m.roles.includes("Developers Lead"),
					)}
					members_label="Developers Team">
					<p>
						Iris is the Ojos Project's hospice management system. Iris' goal is
						to improve the hospice experience by providing various features,
						such as <strong>medication logging</strong>,{" "}
						<strong>video monitoring</strong>, and more.
					</p>
					<p>
						Iris is being built using modern technologies, such as React/NextJS
						and Rust/Tauri. In the Ojos Project's Developers Team, our team
						learns how to use software in a way that is used in industry. Some
						of the topics we've touched so far include: a collaborative
						Git/GitHub workflow, creating Figma wireframes, software design,
						terminal usage, and more.
					</p>

					<p>
						Iris is 100% open-source software and is protected with the GNU
						GPLv3 license.
					</p>
				</WorkShowcase>
				<WorkShowcase
					title="Palliaview: A Better Hospice Monitoring System"
					button_label="Read the Palliaview Docs"
					button_link="https://drive.google.com/drive/folders/1owV0YqtF37tkHizjPn0HzeRXbxK7gnIP/"
					button_secondary_label="View 3D Files"
					button_secondary_link="https://drive.google.com/drive/folders/1hgPBY2IzzHujGLQLzD2xgjgWIx_gFRIS/"
					image={PalliaviewDesign}
					image_alt="Header of the Ojos Project"
					members={members.filter(
						(m) =>
							m.roles.includes("Engineering Team") ||
							m.roles.includes("Engineering Lead"),
					)}
					members_label="Engineering Team">
					<p>
						Palliaview <i>(pal-lee-a-view)</i> is a hospice and moreover
						palliative monitoring system with the aim of providing ease of mind
						to caregivers and independence to patients.
					</p>
					<p>
						Thus far, our goals are affordability and accessibility technology.
					</p>
				</WorkShowcase>
				<WorkShowcase
					title="Ojos Project: A Research Endeavor"
					button_label="Visit urlatuci.org"
					button_link="https://urlatuci.org/"
					image={SymposiumPhoto}
					image_alt="Header of the Ojos Project"
					members={members.filter(
						(m) =>
							m.roles.includes("Research Team") ||
							m.roles.includes("Research Lead"),
					)}
					members_label="Research Team">
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
		</Layout>
	);
}
