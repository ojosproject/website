import styles from "./page.module.css";
import { AppleMac, HeartSolid, Linux, Windows } from "iconoir-react";
import { metadataWith } from "utils/metadata";
import Download from "./_components/Download";
import Link from "next/link";
import Image from "next/image";

export const metadata = metadataWith(
	"Iris, a modern care management system | Ojos Project",
	"Iris is a desktop app to help you manage your care through medication management, video monitoring, with more features coming soon. Learn more.",
	"https://ojosproject.org/iris/",
	"/images/iris/promo/summary.png",
);

// notes:
// todo: "online. or not."

export default async function Page() {
	const features: {
		label: string;
		description: string;
		imagePath?: string;
	}[] = [
		{
			label: "Medication management",
			description:
				"Log your medication to ensure that everybody in your care team is coordinated.",
		},
		{
			label: "Patient Reporting Outcome tracking",
			description:
				"Answer the daily surveys to ensure you're getting the best possible care.",
		},
		{
			label: "Care instruction documentation",
			description:
				"Leave notes on the system so that everybody knows how to care for you.",
		},
		{
			label: "Video monitoring",
			description: "Record video footage to feel secure with your care.",
		},
		{
			label: "Contacts",
			description:
				"Leave important contacts on the system for the team to remain in contact.",
		},
	];

	return (
		<>
			<section className={styles.irisHeadliner}>
				<Image
					src="/images/iris/promo/icon.png"
					alt="The Iris app logo"
					className={styles.irisHeadlinerImage}
					width={100}
					height={100}
				/>
				<p>
					A <span className={styles.blueHighlight}>modern</span> care management
					system
				</p>

				<a href="#download">
					<button className="primary">Try for free</button>
				</a>

				<div>
					<Windows className={styles.platformIcon} />
					<AppleMac className={styles.platformIcon} />
					<Linux className={styles.platformIcon} />
				</div>
			</section>

			<section id="features" className={styles.featuresFlex}>
				<h2>Features</h2>
				<p className="bigText">Say hello to your new toolkit.</p>
				<div className={styles.newToolkit}>
					<img src="/images/iris/promo/hub.png" />
				</div>

				<ul className={styles.featureList}>
					{features.map((feature) => {
						return (
							<li key={feature.label}>
								{feature.imagePath && <img src={feature.imagePath} />}
								{feature.label === "Video monitoring" && (
									<p
										style={{
											fontSize: "0.8rem",
											color: "var(--gray)",
											margin: 0,
										}}>
										(Windows & macOS only)
									</p>
								)}
								<h3 className={styles.featureHeader}>{feature.label}</h3>
								<p>{feature.description}</p>
							</li>
						);
					})}
				</ul>
			</section>

			<section id="research" className={styles.basedOnResearch}>
				<div className={styles.sideText}>
					<h2>Based on research</h2>
					<p className="bigText">
						Iris for Desktop is developed alongside the Undergraduate Research
						Lab (URL) at UC Irvine with Palliaview. Since 2023, students have
						been actively researching existing caregiver technologies,
						interviewing healthcare professionals and family caregivers, and
						iterating on Iris through user interviews and direct feedback.
					</p>
					<p className="bigText">
						As a research project, Palliaview won three grants from the UCI
						Undergraduate Research Opportunities Program (UROP).
					</p>
					<Link href="/palliaview/">
						<button className="secondary">Learn about Palliaview</button>
					</Link>
				</div>
				<img src="/images/urop/ayush.png" />
			</section>

			<section id="oss" className={styles.openSourceContainer}>
				<div className={styles.openSourceStatement}>
					<h2>Because we want to help.</h2>
					<p className="bigText">
						Many of us became caregivers before we were ready. Iris is the tool
						we wish we had—built by those who once felt helpless, for those who
						still do.
					</p>
					<p className="bigText">
						We believe care tools should be as accessible as possible. That's
						why Iris for Desktop is fully open-source. Anybody can use it, study
						it, or build upon it.
					</p>
					<p className="bigText">
						Iris for Desktop is licensed with the GNU General Public License v3.
					</p>
					<HeartSolid />
				</div>
			</section>
			<Download productName="Iris for Desktop" repoPath="ojosproject/iris" />
		</>
	);
}
