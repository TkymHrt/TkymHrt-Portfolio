import { ParticleBackground, ScrollProgressIndicator, SvgObject } from "./components/common";
import { Footer, Header } from "./components/layout";
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