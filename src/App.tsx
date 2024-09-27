import { Footer, Header, ParticleBackground, ScrollProgressIndicator, SvgObject } from "./components";
import Home from "./pages/home.tsx";

export default function App() {
	return (
		<>
			<Header />
			<Home />
			<Footer />
			<SvgObject />
			<ScrollProgressIndicator />
			<ParticleBackground />
		</>
	);
}
