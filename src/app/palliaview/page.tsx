import { metadataWith } from "utils/metadata";
import styles from "./page.module.css";
import Image from "next/image";

export const metadata = metadataWith(
	"Palliaview: Keeping compassion within reach | Ojos Project",
	"Learn more about Palliaview, a system powered by Iris.",
	"https://ojosproject.org/palliaview/",
	"/images/brand/oembed.png",
);

export default async function Page() {
	return (
		<>
			<Image
				src="/images/urop/joseph-meadow.jpg"
				alt="Students showing their Palliaview research project."
				width="100"
				height="100"
				className={styles.headerImage}
			/>
			<section className={styles.headline}>
				<h1>Palliaview</h1>
				<p>Keeping compassion within reach.</p>
			</section>
			<section className={styles.contentWithImage}>
				<div className={styles.text}>
					<h2>Overview</h2>
					<p className="bigText">
						Palliaview is a culmination of research conducted by UC Irvine's
						Undergraduate Research Lab. The project focuses on developing an
						open-source, affordable remote monitoring kiosk designed to
						supplement in-person care for patients in hospice and palliative
						medicine (HPM).
					</p>
				</div>

				<Image
					src="/images/palliaview/promo/model.jpg"
					alt="Palliaview model"
					width={500}
					height={100}
				/>
			</section>
			<section className={styles.content}>
				<h2>Empowering independence</h2>
				<p className="bigText">
					The system is built with accessibility and adaptability in mind,
					making it especially valuable in environments where traditional
					retrofitting or constant in-person monitoring is not feasible.
				</p>
				<p className="bigText">
					Palliaview empowers patient independence through inclusive design and
					Augmented and Alternative Communication (ACC).
				</p>
			</section>
			<section className={styles.content}>
				<h2>Built by students</h2>
				<p className="bigText">
					Palliaview is a research project by the Undergraduate Research Lab.
					Since 2023, the team has been developing this system from the ground
					up to provide a solution that'll help people caring for a loved one.
				</p>
				<p className="bigText">
					We've conducted various interviews with healthcare professionals and
					caregivers alike, hoping to build the best possible system for
					everybody involved in your treatment.
				</p>
			</section>
			<section className={styles.content} style={{ alignItems: "center" }}>
				<div className={styles.centerContainer}>
					<h2>Open development</h2>
					<p className="bigText">
						The Palliaview team invites individuals, researchers, and healthcare
						organizations to collaborate, customize, and expand the platform to
						meet evolving care needs.
					</p>
					<p className="bigText">
						Stay tuned for updates, tutorials, and build instructions as we
						continue to develop and share Palliaview with the wider care
						community.
					</p>
				</div>
			</section>
		</>
	);
}
