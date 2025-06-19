import { articlesMetadata } from "utils/blog";
import styles from "./page.module.css";
import Link from "next/link";

export default async function Page() {
	return (
		<section className={styles.blogContainer}>
			<section className={styles.topmostContainer}>
				<h1>Ojos Project Blog</h1>
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
