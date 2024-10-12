import "./WorkContainer.scss";
export default function WorkContainer(props: {
	image: string;
	header: string;
	description: string;
	href: string;
	href_label: string;
}) {
	return (
		<a href={props.href} className="container-work">
			<h2>{props.header}</h2>
			<p>{props.description}</p>
			<a className="container-work-button" href={props.href}>
				{props.href_label}
			</a>
		</a>
	);
}
