import { metadataWith } from "utils/metadata";
import ArticlePicker from "./_components/ArticlePicker";
import styles from "./page.module.css";

export const metadata = metadataWith(
	"Project News | Ojos Project",
	"Keep up to date with the Iris and Palliaview on the Ojos Project website.",
	"https://ojosproject.org/news/",
	"/images/brand/oembed.png",
);

export default function Page() {
	return (
		<>
			<section className={styles.welcome}>
				<h1>Ojos Project News</h1>
				<p>Stay up to date with announcement, events, and more.</p>
			</section>
			<ArticlePicker />
		</>
	);
}
