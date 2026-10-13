"use client";

import { LazyMotion, MotionConfig } from "motion/react";
import type { ReactNode } from "react";

import useReducedMotionPreference from "../useReducedMotionPreference";

const loadFeatures = () => import("./motion-features").then((module) => module.default);

export default function MotionPreferences({ children }: { children: ReactNode }) {
	const reducedMotion = useReducedMotionPreference();

	return (
		<LazyMotion features={loadFeatures} strict>
			<MotionConfig reducedMotion={reducedMotion ? "always" : "never"}>{children}</MotionConfig>
		</LazyMotion>
	);
}
