"use client";
import styles from "./ArticlePicker.module.css";
import Link from "next/link";
import { useState } from "react";
import { articlesMetadata, NewsTag } from "utils/blog";

export default function ArticlePicker() {
	const [selectedTag, setSelectedTag] = useState<NewsTag>("all");

	function determineTag(tag: NewsTag) {
		setSelectedTag(selectedTag === tag ? "all" : tag);
	}
	return (
		<>
			<section className={styles.tagsContainer}>
				<button
					className={selectedTag === "announcements" ? "primary" : "secondary"}
					onClick={() => determineTag("announcements")}>
					Announcements
				</button>
				<button
					className={selectedTag === "events" ? "primary" : "secondary"}
					onClick={() => determineTag("events")}>
					Events
				</button>
				<button
					className={selectedTag === "software" ? "primary" : "secondary"}
					onClick={() => determineTag("software")}>
					Software
				</button>
				<button
					className={selectedTag === "engineering" ? "primary" : "secondary"}
					onClick={() => determineTag("engineering")}>
					Engineering
				</button>
			</section>
			<section>
				<h2>Latest news</h2>
				<div className={styles.newsStand}>
					{articlesMetadata
						.filter(
							(articleMetadata) =>
								selectedTag === "all" ||
								articleMetadata.tags.includes(selectedTag),
						)
						.map((articleMetadata) => {
							return (
								<Link
									key={articleMetadata.id}
									href={`/news/${articleMetadata.id}`}
									className={styles.articleContainer}>
									<div>
										<div className={styles.tagsFlex}>
											<h3>{articleMetadata.title}</h3>
											{articleMetadata.tags.map((tag) => {
												return (
													<span
														key={articleMetadata.title + tag}
														className={styles.tagLabel}>
														{tag}
													</span>
												);
											})}
										</div>
										<p>{articleMetadata.description}</p>
										<p>{articleMetadata.timestamp}</p>
									</div>
								</Link>
							);
						})}
				</div>
			</section>
		</>
	);
}
