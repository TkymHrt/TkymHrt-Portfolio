import { HeroHeader, About, Works, Contact, Products } from "../components";

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
