import { motion } from "framer-motion";
import { type SetStateAction, useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
	const [selected, setSelected] = useState("");
	const [hovered, setHovered] = useState("");

	const menuItems = [
		{ name: "Home", to: "Home" },
		{ name: "About", to: "About" },
		{ name: "Works", to: "Works" },
		{ name: "Contact", to: "Contact" },
	];

	const handleButtonClick = (itemName: SetStateAction<string>) => {
		setSelected(itemName);
		setTimeout(() => setSelected(""), 500);
	};

	const handleMouseEnter = (itemName: SetStateAction<string>) => {
		setHovered(itemName);
	};

	const handleMouseLeave = () => {
		setTimeout(() => setHovered(""), 500);
	};

	return (
		<div className="fixed top-0 right-0 left-0 py-4 px-6 z-10">
			<header className="flex justify-start">
				<div className="space-x-4 sm:space-x-6">
					{menuItems.map((item) => (
						<Link
							key={item.name}
							to={item.to}
							smooth={true}
							offset={-70}
							duration={500}
							spy={true}
							onClick={() => handleButtonClick(item.name)}
							onMouseEnter={() => handleMouseEnter(item.name)}
							onMouseLeave={handleMouseLeave}
						>
							<motion.button
								className="text-slate-100 text-xl sm:text-2xl font-bold"
								whileHover={{ scale: 1.2 }}
								whileTap={{ scale: 0.9 }}
								transition={{ type: "spring", stiffness: 400, damping: 17 }}
							>
								<p>{item.name}</p>
								{(selected === item.name || hovered === item.name) && (
									<motion.div
										className="h-1 bg-slate-100"
										layoutId="underline"
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ duration: 0.3 }}
									/>
								)}
							</motion.button>
						</Link>
					))}
				</div>
			</header>
		</div>
	);
};

export default Header;
