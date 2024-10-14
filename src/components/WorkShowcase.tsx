import "./WorkShowcase.scss";
import Button from "./Button";
import { ReactNode } from "react";
import { Member } from "../types/types";
import { TeamMemberButton } from "./members";

export default function WorkShowcase(props: {
	title: string;
	image: string;
	image_alt: string;
	button_label?: string;
	button_link?: string;
	button_secondary_label?: string;
	button_secondary_link?: string;
	members: Member[];
	children: ReactNode;
}) {
	return (
		<div className="work-showcase">
			<div className="work-showcase-left">
				<h2>{props.title}</h2>
				{props.children}
				<div className="button-row">
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
			</div>
			<div className="work-showcase-right">
				<img
					className="work-showcase-image"
					src={props.image}
					alt={props.image_alt}
				/>
				<div className="work-showcase-member-container">
					<h3>{props.title.split(":")[0] + " Team"}</h3>
					<div className="work-showcase-members-row">
						{props.members.map((member) => (
							<TeamMemberButton member={member} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
