import { motion } from "framer-motion";
import { Element } from "react-scroll";

const commonClasses = "font-Noto text-lg text-stone-950";
const motionDivClasses =
	"h-auto md:w-[80vw] w-[85vw] flex flex-col items-start bg-gradient-to-r from-purple-400/20 to-pink-600/60 backdrop-filter backdrop-blur-3xl bg-opacity-10 rounded-xl shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] p-8 md:p-10";

const About = () => (
	<Element name="About">
		<motion.div
			className={motionDivClasses}
			whileHover={{ scale: 1.025 }}
			transition={{ duration: 0.3 }}
		>
			<h2 className="md:text-7xl text-6xl font-black text-slate-300 mb-5">
				About
			</h2>
			<p className={`md:flex hidden font-bold ${commonClasses}`}>
				長岡技術科学大学 工学部 機械工学分野 2年
			</p>
			<p className={`md:flex hidden ${commonClasses} mb-8`}>
				技大祭実行委員会 情報局 / NUTMEG / フロントエンジニア
			</p>
			<p className={`flex md:hidden font-bold ${commonClasses} mb-2`}>
				長岡技術科学大学 工学部
				<br />
				機械創造工学課程 2年
				<br />
			</p>
			<p className={`flex md:hidden ${commonClasses} mb-8`}>
				技大祭実行委員会
				<br />
				情報局 / NUTMEG
				<br />
				フロントエンジニア
			</p>
		</motion.div>
	</Element>
);

export default About;
