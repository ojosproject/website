import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";

export default function Page() {
	return (
		<>
			<section className={styles.irisContainer} id="iris">
				<div className={styles.irisDetails}>
					<h1>iris</h1>
					<p className={styles.tagline}>
						A <span style={{ color: "var(--blue-light)" }}>modern</span> care
						management system
					</p>
					<div style={{ margin: "10px 0" }}>
						<Link href="/iris#download">
							<button className="primary">Free download</button>
						</Link>
						<Link
							href="https://github.com/ojosproject/iris/"
							target="_blank"
							rel="noreferrer noopener">
							<button className="secondary">Learn more</button>
						</Link>
					</div>
					<p className={styles.irisPlatforms}>Windows, macOS, & Linux</p>
				</div>
				<Image
					src="/images/iris/promo/hub.png"
					alt="Iris Client hub"
					className={styles.irisImage}
					width={25}
					height={25}
				/>
			</section>
			<section className={styles.palliaviewContainer}>
				<div className={styles.palliaviewDetails} id="palliaview">
					<h1>Palliaview</h1>
					<p>A Better Hospice Monitoring System</p>
					<div>
						<Link href="ojosproject.org">
							<button className="primary">Get 3D files</button>
						</Link>
						<Link href="ojosproject.org">
							<button className="secondary">Learn more</button>
						</Link>
					</div>
				</div>
				<div className={styles.palliaviewImageTextContainer}>
					<Image
						src="/images/palliaview/promo/model.jpg"
						alt="Palliaview 3D model"
						className={styles.palliaviewImage}
						width={25}
						height={25}
					/>
					<p
						style={{
							margin: "0 50px;",
							textAlign: "right",
							minWidth: "100px",
						}}>
						Palliaview is powered by Iris software.
					</p>
				</div>
			</section>
			<section>
				<div>
					<h1>Mentorship through research</h1>
					<p>Mentoring the future of healthcare developers.</p>
				</div>
			</section>
		</>
	);
}
