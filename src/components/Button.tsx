import "./Button.scss";

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
