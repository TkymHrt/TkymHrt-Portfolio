import { About, Contact, Products, Works } from "@/components/sections";

import UserLayout from "./layout/UserLayout";

export default function MainPage() {
	return (
		<UserLayout>
			<main id="main-content" tabIndex={-1} className="border-t border-line">
				<About />
				<Products />
				<Works />
				<Contact />
			</main>
		</UserLayout>
	);
}
