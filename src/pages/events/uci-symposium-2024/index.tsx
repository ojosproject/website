import React from "react";
import Layout from "@theme/Layout";
import { motion } from "framer-motion";
import "./styles.scss";

function Section(props: { title: string; paragraphs: string[] }) {}

export default function SymposiumPage() {
	return (
		<Layout
			title="UCI Undergraduate Research Symposium"
			description="Read some supplemental content related to our 2024 Undergraduate Research Symposium poster from the Ojos Project! You know we love to go the extra mile. 💙💛">
			<div id="wrapper">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: [0, 0, 0, 1] }}>
					<h1 className="introducing">Ojos Project</h1>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: [0, 0, 0, 0, 0, 0, 0, 0, 1] }}>
					<h2 className="subheader">@ UCI Symposium</h2>
				</motion.div>

				<p className="regular-text">
					This is neat, isn't it? Read everything we couldn't fit into our
					poster below!
				</p>
			</div>
		</Layout>
	);
}
