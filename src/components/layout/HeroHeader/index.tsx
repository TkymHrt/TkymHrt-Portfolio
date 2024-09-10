import { motion } from "framer-motion";
import { Element } from "react-scroll";

const HeroHeader = () => (
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
				<p className="text-[8.5vw] font-black text-[#663556] text-nowrap">I'm Takayama Haruto.</p>
			</motion.div>
			<div className="hidden md:flex justify-center items-center gap-4 break-normal tracking-[0.4em]">
				{["IT", "IS", "FRONT-END", "DEVELOPER'S", "PORTFOLIO", "SITE."].map((text) => (
					<p key={text} className="text-2xl">
						{text}
					</p>
				))}
			</div>
			<div className="flex md:hidden justify-center items-center flex-col">
				<div className="flex gap-3">
					{["IT", "IS", "FRONT-END", "DEVELOPER'S"].map((text) => (
						<p key={text} className="text-1xl">
							{text}
						</p>
					))}
				</div>
				<div className="flex gap-3">
					{["PORTFOLIO", "SITE."].map((text) => (
						<p key={text} className="text-1xl">
							{text}
						</p>
					))}
				</div>
			</div>
		</div>
	</Element>
);

export default HeroHeader;
