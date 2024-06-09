import Layout from "@theme/Layout";
import "./newsletter.scss";
import { Button, Step, StepLabel, Stepper, TextField } from "@mui/material";
import { useState } from "react";

export default function Newsletter() {
	const steps = ["Type your email", "You're all set!"];
	const [email, setEmail] = useState("");

	function emailValidation(): boolean {
		if (email === "") {
			return false;
		} else if (!email.includes("@") || !email.includes(".")) {
			return true;
		}
	}

	return (
		<Layout wrapperClassName="newsletter-page">
			<div className="form">
				<h1>Newsletter Sign-Up</h1>
				<p>Use this tool to sign up to the Ojos Project's newsletter!</p>
				<Stepper activeStep={0} alternativeLabel className="stepper">
					{steps.map((label) => (
						<Step key={label}>
							<StepLabel>{label}</StepLabel>
						</Step>
					))}
				</Stepper>

				<div id="outlined-basic">
					<TextField
						label="Email Address"
						variant="outlined"
						required
						error={emailValidation()}
						helperText="Please use a valid email address."
						onChange={(event) => {
							setEmail(event.currentTarget.value);
						}}
					/>
				</div>

				<Button className="button" variant="contained">
					Sign up
				</Button>
			</div>
		</Layout>
	);
}
