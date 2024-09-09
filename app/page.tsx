'use client';

import { About, Contact, Works } from "./components";

export default function MainPage() {
	return (
		<main className="flex flex-col items-center space-y-7 pb-96">
			<About />
			<Works />
			<Contact />
		</main>
	);
}
