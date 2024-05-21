// SymposiumCountdown.tsx
// Ojos Project
//
// A countdown for the Symposium.

import Countdown from "react-countdown";

export default function CountdownWrapper(props: { colorModeHook }) {
	// A countdown for the 2024 Undergraduate Research Symposium.
	//
	// * Important times:
	// * 1715977800000 - May 17,  1:30 PM: Start of Ojos' poster presentation
	// * 1715989500000 - May 17,  4:45 PM: End of the symposium
	// * 1716015600000 - May 18, 12:00 AM: End of the day
	//
	// Times found in
	// https://urop.uci.edu/symposium/symposium-attendee-2024/
	//
	// todo: After the Symposium is over and the countdown is no longer
	// todo: needed, run the following command to remove the dependency:
	// todo: `npm uninstall react-countdown`

	if (new Date() > new Date(1716015600000)) {
		// If it's the next day, return nothing.
		return <></>;
	}

	const { colorMode } = props.colorModeHook();

	function numberPadding(number: number): string {
		return number > 9 ? `${number}` : "0" + number;
	}

	return (
		<div
			className={
				"countdown-wrapper " +
				(colorMode === "dark" ? "symposium-dark" : "symposium-light")
			}>
			<Countdown
				date={1715977800000}
				renderer={({ days, hours, minutes, seconds, completed }) => {
					if (new Date() > new Date(1715989500000)) {
						// If the current date is past 4:45 PM, the end time for the symposium
						return (
							<>
								<p>From the bottom of our hearts,</p>
								<span className="countdown">THANK YOU!</span>
								<p>
									The{" "}
									<a
										href="https://urop.uci.edu/symposium/"
										target="_blank"
										rel="noopener noreferrer">
										Undergraduate Research Symposium
									</a>{" "}
									has concluded. ❤️ 🤘
								</p>
							</>
						);
					}

					if (completed) {
						// If it's 1:30 AM, show this
						return (
							<>
								<p>Ojos Project is presenting</p>
								<span className="countdown">RIGHT NOW!</span>
								<p>
									Show your support to the team and UCI research by attending!
									🤘🤘🤘
								</p>
								<p>
									Read more about it <a href="/news/symposium-2024/">here</a>.
								</p>
							</>
						);
					} else {
						// Show the actual countdown otherwise
						return (
							<>
								<p>Ojos Project will present in...</p>
								<span className="countdown">
									{days !== 0 ? `${days}:` : null}
									{hours !== 0 || days > 0 ? `${numberPadding(hours)}:` : null}
									{numberPadding(minutes)}:{numberPadding(seconds)}
								</span>
								<p>
									Show your support to the team and UCI research by attending!
									🤘🤘🤘
								</p>
								<p>
									Read more about it <a href="/news/symposium-2024/">here</a>.
								</p>
							</>
						);
					}
				}}
			/>
		</div>
	);
}
