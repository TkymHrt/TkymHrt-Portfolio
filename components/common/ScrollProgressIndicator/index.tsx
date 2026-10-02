"use client";

import { useScroll, useSpring } from "motion/react";
import * as m from "motion/react-m";

import useReducedMotionPreference from "../useReducedMotionPreference";

export default function ScrollProgressIndicator() {
	const reducedMotion = useReducedMotionPreference();
	const { scrollYProgress } = useScroll();
	const springProgress = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});

	return (
		<m.div
			aria-hidden="true"
			className="pointer-events-none fixed right-0 bottom-0 left-0 z-50 h-1 origin-top-left bg-plum"
			style={{ scaleX: reducedMotion ? scrollYProgress : springProgress }}
		/>
	);
}
