import Link from "next/link";
import styles from "./page.module.css";

export default function Page() {
	return (
		<>
			<section id="iris" className={styles.productPromo}>
				<div className={styles.promoText}>
					<h2>Iris for Desktop</h2>
					<p className="bigText">
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
			<section id="palliaview" className={styles.productPromo}>
				<div className={styles.promoText}>
					<h2>Palliaview</h2>
					<p className="bigText">
						<strong>The best way to interact with Iris.</strong> Palliaview is a
						hardware solution designed by students at the Undergraduate Research
						Lab at UC Irvine.
					</p>
					<div>
						<Link href="/palliaview/">
							<button className="secondary">Learn more</button>
						</Link>
					</div>
				</div>
				<img src="/images/palliaview/promo/model.jpg" />
			</section>
		</>
	);
}
