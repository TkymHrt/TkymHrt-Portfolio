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
						<p className="font-Noto text-[8.5vw] font-black text-[#663556]">
							I'm Takayama Haruto.
						</p>
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
					className="h-[60vh] w-[80vw] flex justify-center items-center bg-gradient-to-r from-red-400/20 to-blue-600/60; backdrop-filter backdrop-blur-3xl bg-opacity-10 rounded-xl shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
					whileHover={{ scale: 1.025 }}
					transition={{ duration: 0.3 }}
				>
					<h2 className="font-Noto text-7xl text-slate-300">About</h2>
				</motion.div>
			</Element>
			<Element name="Works">
				<motion.div
					className="h-[60vh] w-[80vw] flex justify-center items-center bg-gradient-to-r from-red-400/20 to-blue-600/60; backdrop-filter backdrop-blur-3xl bg-opacity-10 rounded-xl shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
					whileHover={{ scale: 1.025 }}
					transition={{ duration: 0.3 }}
				>
					<h2 className="text-7xl text-slate-300">Works</h2>
				</motion.div>
			</Element>
			<Element name="Contact">
				<motion.div
					className="h-[60vh] w-[80vw] flex justify-center items-center bg-gradient-to-r from-red-400/20 to-blue-600/60; backdrop-filter backdrop-blur-3xl bg-opacity-10 rounded-xl shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
					whileHover={{ scale: 1.025 }}
					transition={{ duration: 0.3 }}
				>
					<h2 className="text-7xl text-slate-300">Contact</h2>
				</motion.div>
			</Element>
		</div>
	);
}
