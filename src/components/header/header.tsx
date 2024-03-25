import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Header = () => {
	return (
		<div className="fixed top-0 right-0 left-0 py-4 px-6 z-10">
			<header className="flex justify-between">
				<div className="space-x-6">
					<Link to="Home" smooth={true} offset={-70} duration={500}>
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
							<a href="Home">Home</a>
						</motion.button>
					</Link>
					<Link to="Career" smooth={true} offset={-70} duration={500}>
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
							<a href="Career">Career</a>
						</motion.button>
					</Link>
					<Link to="Activity" smooth={true} offset={-70} duration={500}>
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
							<a href="Activity">Activity</a>
						</motion.button>
					</Link>
				</div>
				<Link to="Contacts" smooth={true} offset={-70} duration={500}>
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
						<a href="Contacts">Contacts</a>
					</motion.button>
				</Link>
			</header>
		</div>
	);
};

export default Header;
