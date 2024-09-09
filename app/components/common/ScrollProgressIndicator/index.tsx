'use client';

import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgressIndicator = () => {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});

	return (
		<motion.div
			className="fixed bottom-0 left-0 right-0 h-2 bg-slate-300 origin-top-left z-50"
			style={{ scaleX }}
		/>
	);
};

export default ScrollProgressIndicator;
