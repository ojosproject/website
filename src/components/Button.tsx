// Button.tsx
// Ojos Project
//
// This is a Button component that is styled with the Iris Branding Guidelines.

import "./Button.css";

export default function Button(props: {
	type: "PRIMARY" | "SECONDARY";
	label: string;
	href: string;
}) {
	return (
		<a
			className={
				props.type === "PRIMARY"
					? "button-iris-primary"
					: "button-iris-secondary"
			}
			href={props.href}
			rel={props.href.includes("https://") ? "noopener noreferrer" : null}
			target={props.href.includes("https://") ? "_blank" : null}>
			{props.label}
		</a>
	);
}
