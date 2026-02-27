import { fetchAPI } from "@/lib/strapi";
import { Work } from "@/lib/types";
import { motion } from "framer-motion";
import React from "react";
import { Element } from "react-scroll";

const motionDivClasses =
	"h-auto md:w-[80vw] w-[85vw] flex flex-col items-start bg-white backdrop-filter backdrop-blur-3xl bg-opacity-10 rounded-xl shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] p-8 md:p-10";

async function getWorks(): Promise<Work[] | null> {
	try {
		const res = await fetchAPI(
			"/works",
			{
				sort: "date:desc",
			},
			{
				next: {
					revalidate: 3600, // Revalidate every hour
				},
			},
		);
		return res.data;
	} catch (error) {
		console.error("Error fetching works:", error);
		return null;
	}
}

const Works = async () => {
	const works = await getWorks();

	if (!works) {
		return (
			<Element name="Works">
				<div className={motionDivClasses}>
					<h2 className="md:text-7xl text-6xl font-black text-slate-300 mb-5">Works</h2>
					<p>No works found.</p>
				</div>
			</Element>
		);
	}

	return (
		<Element name="Works">
			<motion.div className={motionDivClasses} whileHover={{ scale: 1.025 }} transition={{ duration: 0.3 }}>
				<h2 className="md:text-7xl text-6xl font-black text-slate-300 mb-5">Works</h2>
				<div className="w-full">
					<ol className="relative border-s border-[#252525] space-y-10">
						{works.map((item) => (
							<li key={item.id} className="ms-4 flex flex-col items-start">
								<div className="absolute w-3 h-3 bg-[#252525] rounded-full mt-1.5 -start-1.5 border border-[#252525]" />
								<time className="mb-1 text-sm font-Noto leading-none text-stone-950">{item.attributes.date}</time>
								<h3 className="text-xl font-bold text-stone-950">
									{item.attributes.title.split("<br />").map((line, index) => (
										<React.Fragment key={`${item.id}-${line}`}>
											<span className={index === 1 ? "text-pink-900" : ""}>{line}</span>
											<br />
										</React.Fragment>
									))}
								</h3>
							</li>
						))}
					</ol>
				</div>
			</motion.div>
		</Element>
	);
};

export default Works;
