import Link from "next/link";
import styles from "./page.module.css";
import { articlesMetadata } from "utils/blog";

export default function Page() {
	return (
		<>
			<section id="iris" className={styles.promo}>
				<div className={styles.promoText}>
					<h1>Iris for Desktop</h1>
					<p>
						<strong>The all-in-one caregiver tool.</strong> Iris for Desktop is
						a free and open-source care system. Track medications, keep track of
						your care, video monitoring, and more.
					</p>
					<div>
						<Link href="/iris#download">
							<button className="primary">Try for free</button>
						</Link>
						<Link href="/iris/">
							<button className="secondary">Learn more</button>
						</Link>
					</div>
				</div>
				<img src="/images/iris/promo/hub.png" />
			</section>
			<section id="palliaview" className={styles.promo}>
				<div className={styles.promoText}>
					<h1>Palliaview</h1>
					<p>
						<strong>The best way to interact with Iris.</strong> Palliaview is a
						hardware solution designed by students at the Undergraduate Research
						Lab at UC Irvine.
					</p>
					<div>
						<Link href="/palliaview">
							<button className="primary">Build now</button>
						</Link>
						<Link href="/palliaview/">
							<button className="secondary">Learn more</button>
						</Link>
					</div>
				</div>
				<img src="/images/palliaview/promo/model.jpg" />
			</section>
			<section id="news" className={styles.newsroom}>
				<h2>News</h2>
				<p>Read the recent news from Ojos Project.</p>
				<div className={styles.cardContainer}>
					{articlesMetadata.slice(0, 4).map((m) => {
						return (
							<div key={m.id} className={styles.newsCard}>
								<h4>{m.title}</h4>
								<p>{m.description}</p>
								<p>{m.timestamp}</p>
							</div>
						);
					})}
				</div>
			</section>
			<div className={styles.mentorAndGetInvolved}>
				<section id="mentorship" className={styles.mentorshipOrGetInvolved}>
					<h2>Mentoring the next generation</h2>
					<p>
						Our projects don't just build software, they build futures.
						Contributors gain in-demand skills like Git-based collaboration,
						modern web development, hardware prototyping and teamwork. We tackle
						real-world problems, learn code review etiquette, and get feedback
						from experienced engineers.
					</p>
				</section>
				<section id="get-involved" className={styles.mentorshipOrGetInvolved}>
					<h2>Get Involved</h2>
					<p>
						If you'd like to join our mission in creating great healthcare
						tools, consider contributing to our open-source software.
					</p>
					<ul>
						<li>Join our Discord to stay updated</li>
						<li>Start a contributing group</li>
						<li>Donate</li>
					</ul>
				</section>
			</div>
		</>
	);
}
