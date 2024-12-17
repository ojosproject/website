// SymposiumCountdown.tsx
// Ojos Project
//
// A countdown for the Symposium.

import Countdown from "react-countdown";
import styles from "./EventCountdown.module.css";
import Link from "@docusaurus/Link";

export default function EventCountdown() {
	// A countdown for the deadline submission to CHI Competition.
	//
	// * Important times:
	// * 1737806400000 - Jan 25, 4:00 AM: CHI Submission
	//
	// Times found in
	// https://chi2025.acm.org/
	//
	// todo: Once the countdown is no longer
	// todo: needed, run the following command to remove the dependency:
	// todo: `npm uninstall react-countdown`

	function numberPadding(number: number): string {
		return number > 9 ? `${number}` : "0" + number;
	}

	return (
		<Countdown
			date={1737806400000}
			renderer={({ days, hours, minutes, seconds, completed }) => {
				if (completed || minutes === 0) {
					return null;
				} else {
					return (
						<div className={styles.countdown_wrapper}>
							<p>
								We're working to submit to the CHI Conference in{" "}
								<strong>
									{days > 0 && (
										<>
											{days} {days === 1 ? "day" : "days"}
										</>
									)}
									{days === 0 && (
										<>
											{hours > 0 && (
												<>
													{hours} {hours === 1 ? "hour" : "hours"}
												</>
											)}
											{hours === 0 && minutes > 0 && (
												<>
													{numberPadding(minutes)}{" "}
													{minutes === 1 ? "minute" : "minutes"}
												</>
											)}
										</>
									)}
								</strong>
								! Read more about it{" "}
								<Link href="/news/fall-2024-wrap/#general-updates">here</Link>.
							</p>
						</div>
					);
				}
			}}
		/>
	);
}
