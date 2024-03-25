import { motion } from "framer-motion";

const Header = () => {
	return (
		<div className="fixed top-0 right-0 left-0 py-4 px-6 z-10">
			<header className="flex justify-between">
				<div className="space-x-6">
					<motion.button
						className="text-white text-2xl font-bold"
						onClick={() => console.log("Home")}
						whileHover={{ scale: 1.2, textDecoration: "underline" }}
						whileTap={{ scale: 0.9 }}
						transition={{ type: "spring", stiffness: 400, damping: 17 }}
						drag
						dragSnapToOrigin={true}
						dragConstraints={{
							top: -5,
							left: -5,
							right: 5,
							bottom: 50,
						}}
					>
						<p>Home</p>
					</motion.button>
					<motion.button
						className="text-white text-2xl font-bold"
						onClick={() => console.log("Career")}
						whileHover={{ scale: 1.2, textDecoration: "underline" }}
						whileTap={{ scale: 0.9 }}
						transition={{ type: "spring", stiffness: 400, damping: 17 }}
						drag
						dragSnapToOrigin={true}
						dragConstraints={{
							top: -5,
							left: -5,
							right: 5,
							bottom: 50,
						}}
					>
						<p>Career</p>
					</motion.button>
					<motion.button
						className="text-white text-2xl font-bold"
						onClick={() => console.log("activity")}
						whileHover={{ scale: 1.2, textDecoration: "underline" }}
						whileTap={{ scale: 0.9 }}
						transition={{ type: "spring", stiffness: 400, damping: 17 }}
						drag
						dragSnapToOrigin={true}
						dragConstraints={{
							top: -5,
							left: -5,
							right: 5,
							bottom: 50,
						}}
					>
						<p>Activity</p>
					</motion.button>
				</div>
				<motion.button
					className="text-white text-2xl font-bold"
					onClick={() => console.log("activity")}
					whileHover={{ scale: 1.2, textDecoration: "underline" }}
					whileTap={{ scale: 0.9 }}
					transition={{ type: "spring", stiffness: 400, damping: 17 }}
					drag
					dragSnapToOrigin={true}
					dragConstraints={{
						top: -5,
						left: -5,
						right: 5,
						bottom: 50,
					}}
				>
					<p>Contacts</p>
				</motion.button>
			</header>
		</div>
	);
};

export default Header;
