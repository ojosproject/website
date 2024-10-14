import "./Button.scss";

export default function Button(props: { label: string; href: string }) {
	return (
		<a className="button-iris" href={props.href}>
			{props.label}
		</a>
	);
}
