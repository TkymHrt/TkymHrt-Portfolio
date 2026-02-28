import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";

const menuItems = [
	{ name: "Home", to: "Home" },
	{ name: "About", to: "About" },
	{ name: "Works", to: "Works" },
	{ name: "Products", to: "Products" },
	{ name: "Contact", to: "Contact" },
];

const SELECTION_RESET_DELAY = 500;

const Header = () => {
	const [selected, setSelected] = useState("");
	const [hovered, setHovered] = useState("");
	const selectedTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
	const hoveredTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	useEffect(() => {
		return () => {
			if (selectedTimerRef.current) clearTimeout(selectedTimerRef.current);
			if (hoveredTimerRef.current) clearTimeout(hoveredTimerRef.current);
		};
	}, []);

	const handleButtonClick = useCallback((itemName: string) => {
		setSelected(itemName);
		if (selectedTimerRef.current) clearTimeout(selectedTimerRef.current);
		selectedTimerRef.current = setTimeout(() => setSelected(""), SELECTION_RESET_DELAY);
	}, []);

	const handleMouseEnter = useCallback((itemName: string) => {
		setHovered(itemName);
	}, []);

	const handleMouseLeave = useCallback(() => {
		if (hoveredTimerRef.current) clearTimeout(hoveredTimerRef.current);
		hoveredTimerRef.current = setTimeout(() => setHovered(""), SELECTION_RESET_DELAY);
	}, []);

	return (
		<div className="fixed top-0 right-0 left-0 py-4 mx-6 z-10 overflow-x-auto">
			<header className="flex justify-start">
				<div className="space-x-4 sm:space-x-6 whitespace-nowrap">
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
