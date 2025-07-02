import { metadataWith } from "utils/metadata";

export const metadata = metadataWith(
	"Palliaview, a better care monitoring system | Ojos Project",
	"Learn more about Palliaview, a system powered by Iris.",
	"https://ojosproject.org/palliaview/",
	"/images/brand/oembed.png",
);

export default function Page() {
	return (
		<>
			<section>
				<h1>Palliaview</h1>
				<p>A better care monitoring system.</p>
			</section>
			<section>
				<h2>Overview</h2>
				<p>
					Palliaview is a device built to interact with the patient on a
					day-to-day basis to improve their care. It uses state of the art
					engineering to improve a patient's care.
				</p>
			</section>
			<section>
				<h2>Benefits</h2>
				<ul>
					<li>
						<strong>Patients:</strong> Independence, accessible
					</li>
					<li>
						<strong>Caregivers:</strong> Remote monitoring
					</li>
					<li>
						<strong>Agencies:</strong> Open source, customizable
					</li>
				</ul>
			</section>
			<section>
				<h2>Built by students</h2>
				<p>
					Palliaview is a research project by the Undergraduate Research Lab.
				</p>
			</section>
			<section>
				<h2>Powered by Iris</h2>
				<p>Palliaview is tightly integrated with Iris.</p>
			</section>
			<section>
				<h2>Raspberry Pi Edition</h2>
				<p>
					Want to try our demo version of Palliaview? Grab a Raspberry Pi and
					get started.
				</p>
			</section>
			<section>
				<h2>Get Involved</h2>
				<p>
					Get involved by donating and staying up to date on the Discord server.
				</p>
			</section>
		</>
	);
}
