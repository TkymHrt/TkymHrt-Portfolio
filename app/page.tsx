import { About, Contact, Products, Works } from "@/components/sections";
import UserLayout from "./layout/UserLayout";
import { ensureEnvForStrapi, getProducts } from "@/lib/strapi";

export default async function MainPage() {
	ensureEnvForStrapi();
	let products = [] as Awaited<ReturnType<typeof getProducts>>;
	try {
		products = await getProducts();
	} catch {
		// fallback to empty products on build-time if Strapi is unreachable
		products = [];
	}

	return (
		<UserLayout>
			<main className="flex flex-col items-center space-y-7 pb-96">
				<About />
				<Works />
				<Products products={products} />
				<Contact />
			</main>
		</UserLayout>
	);
}
