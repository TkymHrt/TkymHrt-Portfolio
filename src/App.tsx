import Footer from "./components/footer/footer.tsx";
import Header from "./components/header/header.tsx";
import ParticleBackground from "./components/particle/particle.tsx";
import ScrollProgressIndicator from "./components/scrollProgressIndicator/scrollProgressIndicator.tsx";
import SvgObject from "./components/svgObject/svgObject.tsx";
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