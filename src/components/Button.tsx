"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export const Button = (props: any) => {
	if (props.local) {
		return (
			<Link href={props.button_link} passHref legacyBehavior>
				<motion.a
					rel="noreferrer"
					className="
			w-40 inline-flex justify-center items-center px-6 py-4 border border-transparent shadow-sm text-xl leading-4 font-medium rounded-md text-white bg-[#b21677] hover:bg-[#dc187f] transition-all ease-in-out duration-200
		"
					whileTap={{ scale: 0.95 }}
				>
					<h1>{props.button_text}</h1>
				</motion.a>
			</Link>
		);
	}
	return (
		<motion.a
			href={props.button_link}
			target="_blank"
			rel="noreferrer"
			className="
			w-40 inline-flex justify-center items-center px-6 py-4 border border-transparent shadow-sm text-xl leading-4 font-medium rounded-md text-white bg-[#b21677] hover:bg-[#dc187f] transition-all ease-in-out duration-200
		"
			whileTap={{ scale: 0.95 }}
		>
			<h1>{props.button_text}</h1>
		</motion.a>
	);
};
