"use client";

import { About, Contact, Products, Works } from "@/components/sections";

export default function MainPage() {
	return (
		<main className="flex flex-col items-center space-y-7 pb-96">
			<About />
			<Works />
			<Products />
			<Contact />
		</main>
	);
}
