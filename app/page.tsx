"use client";

import { About, Contact, Products, Works } from "@/components/sections";
import UserLayout from "./layout/UserLayout";

export default function MainPage() {
	return (
		<UserLayout>
			<main className="flex flex-col items-center space-y-7 pb-96">
				<About />
				<Works />
				<Products />
				<Contact />
			</main>
		</UserLayout>
	);
}
