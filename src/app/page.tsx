import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";

export default function Page() {
	return (
		<>
			<div className={styles.irisContainer} id="iris">
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
					src="/images/brand/iris/v0/hub.png"
					alt="Iris Client hub"
					className={styles.irisImage}
					width={25}
					height={25}
				/>
			</div>
			<div className={styles.palliaviewContainer}>
				<div className={styles.palliaviewDetails}>
					<h1>Palliaview</h1>
					<p>A Better Hospice Monitoring System</p>
				</div>
			</div>
		</>
	);
}
