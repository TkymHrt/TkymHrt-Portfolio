import { HeroHeader, About, Works, Contact } from "../components";

export default function Home() {
	return (
		<div className="flex justify-center items-center flex-col space-y-7 pb-96">
			<HeroHeader />
			<About />
			<Works />
			<Contact />
		</div>
	);
}
