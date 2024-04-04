import { motion } from "framer-motion";
import { Element } from "react-scroll";

export default function App() {
	return (
		<div className="flex justify-center items-center flex-col space-y-7 pb-96">
			<Element name="Home">
				<div className="h-[100vh] w-[98vw] flex justify-center items-center flex-col gap-4 mb-[30vh]">
					<motion.div
						className="-z-40"
						drag
						dragConstraints={{
							top: -200,
							left: -200,
							right: 200,
							bottom: 200,
						}}
						dragSnapToOrigin={true}
					>
						<p className="font-Noto text-[8.5vw] font-black text-[#663556]">I'm Takayama Haruto.</p>
					</motion.div>
					<div className="font-Noto hidden md:flex justify-center items-center gap-4 break-normal tracking-[0.4em]">
						<p className="text-2xl">IT</p>
						<p className="text-2xl">IS</p>
						<p className="text-2xl">FRONT-END</p>
						<p className="text-2xl">DEVELOPER'S</p>
						<p className="text-2xl">PORTFOLIO</p>
						<p className="text-2xl">SITE.</p>
					</div>
					<div className="font-Noto flex md:hidden justify-center items-center flex-col">
						<div className="flex gap-3">
							<p className="text-1xl">IT</p>
							<p className="text-1xl">IS</p>
							<p className="text-1xl">FRONT-END</p>
							<p className="text-1xl">DEVELOPER'S</p>
						</div>
						<div className="flex gap-3">
							<p className="text-1xl">PORTFOLIO</p>
							<p className="text-1xl">SITE.</p>
						</div>
					</div>
				</div>
			</Element>
			<Element name="About">
				<motion.div
					className="h-auto md:w-[80vw] w-[85vw] flex flex-col items-start bg-gradient-to-r from-red-400/20 to-blue-600/60; backdrop-filter backdrop-blur-3xl bg-opacity-10 rounded-xl shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
					whileHover={{ scale: 1.025 }}
					transition={{ duration: 0.3 }}
				>
					<h2 className="md:text-7xl text-6xl font-black text-slate-300 mb-5 mx-10 mt-8">About</h2>
					<p className="md:flex hidden font-Noto font-bold text-lg text-stone-950 mx-10">
						長岡技術科学大学 工学部 機械創造工学課程 2年
					</p>
					<p className="md:flex hidden font-Noto text-lg text-stone-950 mb-8 mx-10">
						技大祭実行委員会 情報局 / NUTMEG / フロントエンジニア
					</p>
					<p className="flex md:hidden font-Noto font-bold text-lg text-stone-950 mb-2 mx-10">
						長岡技術科学大学 工学部
						<br />
						機械創造工学課程 2年
						<br />
					</p>
					<p className="flex md:hidden font-Noto text-lg text-stone-950 mb-8 mx-10">
						技大祭実行委員会
						<br />
						情報局 / NUTMEG
						<br />
						フロントエンジニア
					</p>
				</motion.div>
			</Element>
			<Element name="Works">
				<motion.div
					className="h-auto md:w-[80vw] w-[85vw] flex flex-col items-start bg-gradient-to-r from-red-400/20 to-blue-600/60; backdrop-filter backdrop-blur-3xl bg-opacity-10 rounded-xl shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
					whileHover={{ scale: 1.025 }}
					transition={{ duration: 0.3 }}
				>
					<h2 className="md:text-7xl text-6xl font-black text-slate-300 mb-5 mx-10 mt-8">Works</h2>
					<div className="md:mx-16 mx-10 mb-5">
						<ol className="relative border-s border-[#252525] ">
							<li className="mb-10 ms-4">
								<div className="absolute w-3 h-3 bg-[#252525] rounded-full mt-1.5 -start-1.5 border border-[#252525]"></div>
								<time className="mb-1 text-sm font-Noto leading-none text-stone-950 ">March 2023</time>
								<p className="text-xl font-bold text-stone-950 ">新潟明訓高等学校 卒業</p>
								<p className="mb-4 text-base font-normal text-slate-800"></p>
							</li>
							<li className="mb-10 ms-4">
								<div className="absolute w-3 h-3 bg-[#252525] rounded-full mt-1.5 -start-1.5 border border-[#252525]"></div>
								<time className="mb-1 text-sm font-Noto leading-none text-stone-950 ">April 2023</time>
								<p className="text-xl font-bold text-stone-950 ">長岡技術科学大学 入学</p>
								<p className="mb-4 text-base font-normal text-slate-800"></p>
							</li>
							<li className="mb-10 ms-4">
								<div className="absolute w-3 h-3 bg-[#252525] rounded-full mt-1.5 -start-1.5 border border-[#252525]"></div>
								<time className="mb-1 text-sm font-Noto leading-none text-stone-950 ">July 2023</time>
								<p className="text-xl font-bold text-stone-950 ">技育展2023 中部ブロック予選 参加</p>
								<p className="mb-4 text-base font-normal text-slate-800"></p>
							</li>
							<li className="mb-10 ms-4">
								<div className="absolute w-3 h-3 bg-[#252525] rounded-full mt-1.5 -start-1.5 border border-[#252525]"></div>
								<time className="mb-1 text-sm font-Noto leading-none text-stone-950 ">February 2024</time>
								<p className="text-xl font-bold text-stone-950 ">【技育CAMP】マンスリーハッカソン vol.14 参加</p>
								<p className="mb-4 text-base font-normal text-slate-800"></p>
							</li>
						</ol>
					</div>
				</motion.div>
			</Element>
			<Element name="Contact">
				<motion.div
					className="h-auto md:w-[80vw] w-[85vw] flex flex-col items-start bg-gradient-to-r from-red-400/20 to-blue-600/60; backdrop-filter backdrop-blur-3xl bg-opacity-10 rounded-xl shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
					whileHover={{ scale: 1.025 }}
					transition={{ duration: 0.3 }}
				>
					<h2 className="md:text-7xl text-6xl font-black text-slate-300 mb-5 mx-10 mt-8">Contact</h2>
					<div className="flex flex-row gap-4 mx-10 mb-5">
						<a className="flex flex-col items-center gap-1" href="https://www.instagram.com/mikan_taka.h/">
							<img width={100} src="Icons//Instagram_icon.svg" alt="Instagram Link" />
							<p className="font-Noto">Instagram</p>
						</a>
						<a className="flex flex-col items-center gap-1" href="https://twitter.com/ForHobbiesBY">
							<img width={100} src="Icons/X_icon.svg" alt="X Link" />
							<p className="font-Noto">X</p>
						</a>
						<a className="flex flex-col items-center gap-1" href="https://github.com/TkymHrt">
							<img width={100} src="Icons/GitHub_icon.svg" alt="GitHub Link" />
							<p className="font-Noto">GitHub</p>
						</a>
					</div>
				</motion.div>
			</Element>
		</div>
	);
}
