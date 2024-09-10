import Footer from "./components/layout/Footer/index.tsx";
import Header from "./components/layout/Header/index.tsx";
import ParticleBackground from "./components/common/Particle/index.tsx";
import ScrollProgressIndicator from "./components/common/ScrollProgressIndicator/index.tsx";
import SvgObject from "./components/common/SvgObject/index.tsx";
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