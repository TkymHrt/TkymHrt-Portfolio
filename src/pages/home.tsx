import { About, Works, Contact, Products } from "../components/contents";
import { HeroHeader } from "../components/layout";

export default function Home() {
	return (
		<div className="flex justify-center items-center flex-col space-y-7 pb-96">
			<HeroHeader />
			<About />
			<Works />
			<Products />
			<Contact />
		</div>
	);
}
