import "./WorkShowcase.scss";
import Button from "./Button";
import { ReactNode } from "react";

export default function WorkShowcase(props: {
	title: string;
	image: string;
	image_alt: string;
	button_label?: string;
	button_link?: string;
	button_secondary_label?: string;
	button_secondary_link?: string;
	children: ReactNode;
}) {
	return (
		<div className="work-showcase">
			<div className="work-showcase-left">
				<h2>{props.title}</h2>
				{props.children}
				{props.button_label ? (
					<Button
						type="PRIMARY"
						label={props.button_label}
						href={props.button_link}
					/>
				) : null}
				{props.button_secondary_label ? (
					<Button
						type="SECONDARY"
						label={props.button_secondary_label}
						href={props.button_secondary_link}
					/>
				) : null}
			</div>
			<img src={props.image} alt={props.image_alt} />
		</div>
	);
}
