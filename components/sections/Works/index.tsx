import { motion } from "framer-motion";
import { Element } from "react-scroll";

const motionDivClasses =
	"h-auto md:w-[80vw] w-[85vw] flex flex-col items-start bg-gradient-to-r from-purple-400/20 to-pink-600/60 backdrop-filter backdrop-blur-3xl bg-opacity-10 rounded-xl shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] p-8 md:p-10";

const Works = () => (
	<Element name="Works">
		<motion.div
			className={motionDivClasses}
			whileHover={{ scale: 1.025 }}
			transition={{ duration: 0.3 }}
		>
			<h2 className="md:text-7xl text-6xl font-black text-slate-300 mb-5">
				Works
			</h2>
			<div className="w-full">
				<ol className="relative border-s border-[#252525] space-y-10">
					{[
						{ id: "1", date: "March 2023", title: "新潟明訓高等学校 卒業" },
						{ id: "2", date: "April 2023", title: "長岡技術科学大学 入学" },
						{
							id: "3",
							date: "July 2023",
							title: "技育展2023 中部ブロック予選 参加",
						},
						{
							id: "4",
							date: "February 2024",
							title: "【技育CAMP】マンスリーハッカソン vol.14 参加",
						},
						{
							id: "5",
							date: "August 2024",
							title: "【技育CAMP】マンスリーハッカソン vol.12 参加",
						},
						{ id: "6", date: "September 2024", title: "技育博 Vol.4 参加" },
					].map((item) => (
						<li key={item.id} className="ms-4 flex flex-col items-start">
							<div className="absolute w-3 h-3 bg-[#252525] rounded-full mt-1.5 -start-1.5 border border-[#252525]" />
							<time className="mb-1 text-sm font-Noto leading-none text-stone-950">
								{item.date}
							</time>
							<h3 className="text-xl font-bold text-stone-950">{item.title}</h3>
						</li>
					))}
				</ol>
			</div>
		</motion.div>
	</Element>
);

export default Works;
