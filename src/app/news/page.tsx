import { articlesMetadata } from "utils/blog";
import styles from "./page.module.css";
import Link from "next/link";
import { metadataWith } from "utils/metadata";

export const metadata = metadataWith(
	"Project News | Ojos Project",
	"Want to learn about what's happening at Ojos Project? Start here at the Project News!",
	"https://ojosproject.org/news/",
	"/images/brand/oembed.png",
);

export default async function Page() {
	return (
		<section className={styles.blogContainer}>
			<section className={styles.topmostContainer}>
				<h1>Project News</h1>
				<p>Stay up to date with project news, announcements, and more.</p>
			</section>
			<section>
				<ul className={styles.listArticles}>
					{articlesMetadata.map((articleData) => {
						return (
							<li>
								<Link href={`/news/${articleData.id}`}>
									<div className={styles.articleContainer}>
										{articleData.title}
									</div>
								</Link>
							</li>
						);
					})}
				</ul>
			</section>
		</section>
	);
}
