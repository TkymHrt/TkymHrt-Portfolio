"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Element } from "react-scroll";

const motionDivClasses =
	"h-auto md:w-[80vw] w-[85vw] flex flex-col items-start bg-gradient-to-r from-red-400/20 to-blue-600/60; backdrop-filter backdrop-blur-3xl bg-opacity-10 rounded-xl shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] p-8 md:p-10";

const Contact = () => (
	<Element name="Contact">
		<motion.div
			className={motionDivClasses}
			whileHover={{ scale: 1.025 }}
			transition={{ duration: 0.3 }}
		>
			<h2 className="md:text-7xl text-6xl font-black text-slate-300 mb-5">
				Contact
			</h2>
			<div className="flex flex-row gap-4 w-full mb-5">
				{[
					{
						id: "instagram",
						href: "https://www.instagram.com/mikan_taka.h/",
						src: "Icons/Instagram_icon.svg",
						alt: "Instagram Link",
						text: "Instagram",
					},
					{
						id: "twitter",
						href: "https://twitter.com/ForHobbiesBY",
						src: "Icons/X_icon.svg",
						alt: "X Link",
						text: "X",
					},
					{
						id: "github",
						href: "https://github.com/TkymHrt",
						src: "Icons/GitHub_icon.svg",
						alt: "GitHub Link",
						text: "GitHub",
					},
				].map((link) => (
					<a
						key={link.id}
						className="flex flex-col items-center gap-1"
						href={link.href}
					>
						<Image width={50} height={50} src={link.src} alt={link.alt} />
						<p className="font-Noto md:text-base text-xs">{link.text}</p>
					</a>
				))}
			</div>
		</motion.div>
	</Element>
);

export default Contact;
