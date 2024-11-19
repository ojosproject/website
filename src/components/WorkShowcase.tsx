// WorkShowcase.tsx
// Ojos Project
//
// This includes the WorkShowcase component. This is part of the homepage that
// displays the kind of work we do. One WorkShowcase per part of the project.
// That is, Iris, Palliaview, and Research.

import "./WorkShowcase.css";
import Button from "./Button";
import { ReactNode } from "react";
import { Member } from "../types/types";
import { TeamMemberButton } from "./members";

// WorkShowcase component
// This component is used to display information about an aspect of the
// project. It showcases our work.
//
// To use this, you must provide the following information:
// - title:						A title for the work
// - image:						An image of the work
// - image_alt:					Alt text for the image
// - button_label:				Optional primary button label
// - button_link:				Optional primary button link
// - button_secondary_label:	Optional secondary button label
// - button_secondary_link:		Optional secondary button link
// - members:					An array of members that work on this
// - members_label:				A label for the members' photos
// - children:					React components to create a description, e.g.: <p>
//
// Various examples can be found in `index.tsx`.
export default function WorkShowcase(props: {
	title: string;
	image: string;
	image_alt: string;
	button_label?: string;
	button_link?: string;
	button_secondary_label?: string;
	button_secondary_link?: string;
	members: Member[];
	members_label: string;
	children: ReactNode;
}) {
	return (
		<div className="work-showcase">
			<div className="work-showcase-left">
				<h2>{props.title}</h2>
				{/* `props.children` is meant to be the description. You can
					add <p> tags to make the description, as well as any other
					tag to help you write a neat description. */}
				{props.children}
				<div className="button-row">
					{/* Buttons are optional. If no label is provided, null returned */}
					{props.button_label ? (
						<Button
							type="PRIMARY"
							label={props.button_label}
							href={props.button_link}
						/>
					) : null}{" "}
					{props.button_secondary_label ? (
						<Button
							type="SECONDARY"
							label={props.button_secondary_label}
							href={props.button_secondary_link}
						/>
					) : null}{" "}
				</div>
			</div>
			<div className="work-showcase-right">
				<img
					className="work-showcase-image"
					src={props.image}
					alt={props.image_alt}
				/>
				<div className="work-showcase-member-container">
					<h3>{props.members_label}</h3>
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
