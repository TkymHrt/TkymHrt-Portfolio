import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Footer from "./components/footer/footer.tsx";
import Header from "./components/header/header.tsx";
import ParticleBackground from "./components/particle/particle.tsx";
import ScrollProgressIndicator from "./components/scrollProgressIndicator/scrollProgressIndicator.tsx";
import SvgObject from "./components/svgObject/svgObject.tsx";
import "./index.css";

const rootElement = document.getElementById("root");

if (rootElement) {
	ReactDOM.createRoot(rootElement).render(
		<React.StrictMode>
			<Header />
			<App />
			<Footer />
			<SvgObject />
			<ScrollProgressIndicator />
			<ParticleBackground />
		</React.StrictMode>,
	);
} else {
	console.error("Failed to find the root element");
}
