// SymposiumRegistration
// Ojos Project
//
// Admonition for the Symposium Registration Google Form.
// Meant to be injected into `/news/2024/04-23-symposium-2024.mdx`.
import Admonition from "@theme/Admonition";
import Countdown from "react-countdown";

const expirationDate = 1715410800000;

function singleOrPlural(word: string, number: number) {
	return number === 1 ? `${number} ${word}` : `${number} ${word}s`;
}

export function RegistrationAdmonition() {
	// * Important times:
	// * 1715410800000 - May 11, 12:00 AM: Registration to attend the symposium closes
	return (
		<Countdown
			date={expirationDate}
			renderer={({ days, hours, minutes, seconds, completed }) => {
				if (completed) {
					return <></>;
				} else {
					return (
						<Admonition type="important">
							<p>
								You must register to attend the Symposium! Please register using{" "}
								<a
									href="https://docs.google.com/forms/d/e/1FAIpQLSfND0jIPndxC67ti6G_jhxZcHuTNso3-fX79TIPtH3Kw5z6Yw/viewform"
									target="_blank"
									rel="noreferrer noopener">
									this short Google Form
								</a>{" "}
								by <strong>May 10</strong>!
							</p>

							<p>
								Registration closes in {singleOrPlural("day", days)},{" "}
								{singleOrPlural("hour", hours)},{" "}
								{singleOrPlural("minute", minutes)}, and{" "}
								{singleOrPlural("second", seconds)}.
							</p>
						</Admonition>
					);
				}
			}}
		/>
	);
}
