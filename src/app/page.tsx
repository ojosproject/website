import styles from "./page.module.css";

export default function Page() {
	return (
		<>
			<section>
				<h1>Working with you for a better care experience.</h1>
				<p>
					Ojos Project is a group of volunteers committed to building open tools
					to improve the care experience.
				</p>
				<p>We believe that healthcare tools should be accessible.</p>
			</section>
			<section>
				<h2>Projects & Tools</h2>
				<p>Here are some of the things we've been working on.</p>
				<ul>
					<li>Iris</li>
					<li>Palliaview</li>
				</ul>
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
