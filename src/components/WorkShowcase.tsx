import "./WorkShowcase.scss";
import Button from "./Button";

export default function WorkShowcase(props: {
	title: string;
	description: string;
	image: string;
	image_alt: string;
	button_label?: string;
	button_link?: string;
}) {
	return (
		<div className="work-showcase">
			<div className="work-showcase-left">
				<h2>{props.title}</h2>
				<p>{props.description}</p>
				{props.button_label ? (
					<Button label={props.button_label} href={props.button_link} />
				) : null}
			</div>
			<img src={props.image} alt={props.image_alt} />
		</div>
	);
}
