"use client";

import { useSyncExternalStore } from "react";

const query = "(prefers-reduced-motion: reduce)";

function subscribe(onChange: () => void) {
	const media = window.matchMedia(query);
	media.addEventListener("change", onChange);
	return () => media.removeEventListener("change", onChange);
}

function getSnapshot() {
	return window.matchMedia(query).matches;
}

function getServerSnapshot() {
	// Keep decorative animation disabled during SSR and the initial hydration render.
	return true;
}

export default function useReducedMotionPreference() {
	return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
