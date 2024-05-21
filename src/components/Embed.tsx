// Figma Embed
// Ojos Project
//
// A simple Figma embed.

import { ReactNode } from "react";

export default function Embed(props: {
	type: "figma";
	url: string;
}): ReactNode {
	if (props.type === "figma") {
		return (
			<iframe
				src={`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(props.url)}`}
				allowFullScreen
				width="100%"
				height="400px"
			/>
		);
	} else {
		return (
			<iframe src={props.url} allowFullScreen width="100%" height="400px" />
		);
	}
}
