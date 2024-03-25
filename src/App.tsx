import { motion } from "framer-motion";

export default function App() {
	return (
		<div className="flex justify-center items-center flex-col space-y-7 pb-96">
			<div className="h-[100vh] w-[100vw] flex justify-center items-center">
				<motion.div
					drag
					dragConstraints={{
						top: -200,
						left: -200,
						right: 200,
						bottom: 200,
					}}
					dragSnapToOrigin={true}
				>
					<img
						className="pointer-events-none"
						src="/I'm Takayama haruto.svg"
						alt="I'm Takayama Haruto"
					/>
				</motion.div>
			</div>
			<motion.div
				id="Home"
				className="h-[60vh] w-[70vw] flex justify-center items-center bg-gradient-to-r from-red-400/20 to-blue-600/60; rounded-xl bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 border border-gray-100"
				drag
				dragSnapToOrigin={true}
				dragConstraints={{
					top: -2,
					left: -2,
					right: 2,
					bottom: 2,
				}}
				whileHover={{ scale: 1.025 }}
				transition={{ duration: 0.3 }}
			>
				<p className="text-7xl text-slate-300">Home</p>
			</motion.div>
			<motion.div
				id="Career"
				className="h-[60vh] w-[70vw] flex justify-center items-center bg-gradient-to-r from-red-400/20 to-blue-600/60; rounded-xl bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 border border-gray-100"
				drag
				dragSnapToOrigin={true}
				dragConstraints={{
					top: -2,
					left: -2,
					right: 2,
					bottom: 2,
				}}
				whileHover={{ scale: 1.025 }}
				transition={{ duration: 0.3 }}
			>
				<p className="text-7xl text-slate-300">Career</p>
			</motion.div>
			<motion.div
				id="Activity"
				className="h-[60vh] w-[70vw] flex justify-center items-center bg-gradient-to-r from-red-400/20 to-blue-600/60; rounded-xl bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 border border-gray-100"
				drag
				dragSnapToOrigin={true}
				dragConstraints={{
					top: -2,
					left: -2,
					right: 2,
					bottom: 2,
				}}
				whileHover={{ scale: 1.025 }}
				transition={{ duration: 0.3 }}
			>
				<p className="text-7xl text-slate-300">Activity</p>
			</motion.div>
			<motion.div
				id="Contacts"
				className="h-[60vh] w-[70vw] flex justify-center items-center bg-gradient-to-r from-red-400/20 to-blue-600/60; rounded-xl bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 border border-gray-100"
				drag
				dragSnapToOrigin={true}
				dragConstraints={{
					top: -2,
					left: -2,
					right: 2,
					bottom: 2,
				}}
				whileHover={{ scale: 1.025 }}
				transition={{ duration: 0.3 }}
			>
				<p className="text-7xl text-slate-300">Contacts</p>
			</motion.div>
		</div>
	);
}
