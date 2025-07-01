import Link from "next/link";
import styles from "./page.module.css";

export default function Page() {
	return (
		<>
			<section className={styles.promoIris}>
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
			<section>
				<h1>Palliaview</h1>
				<p>The best way to interact with Iris.</p>
			</section>
			<section>
				<h2>News</h2>
				<p>Read the recent news by Ojos Project.</p>
			</section>
			<section>
				<h2>Mentorship</h2>
				<p>
					We started with the Undergraduate Research Lab. As we move beyond
					university, we're mentoring the future developers of healthcare
					software.
				</p>
			</section>
			<section>
				<h2>Get Involved</h2>
				<p>
					If you'd like to join our mission in creating great healthcare tools,
					consider contributing to our open-source software.
				</p>
				<ul>
					<li>Join our Discord to stay updated</li>
					<li>Start a contributing group</li>
					<li>Donate</li>
				</ul>
			</section>
		</>
	);
}
