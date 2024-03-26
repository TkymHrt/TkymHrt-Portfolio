import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Header from "./components/header/header.tsx";
import ParticleBackground from "./components/particle/particle.tsx";
import ScrollProgressIndicator from "./components/scrollProgressIndicator/scrollProgressIndicator.tsx";
import "./index.css";
import Footer from "./components/footer/footer.tsx";

const rootElement = document.getElementById("root");

if (rootElement) {
	ReactDOM.createRoot(rootElement).render(
		<React.StrictMode>
			<Header />
			<ScrollProgressIndicator />
			<ParticleBackground />
			<App />
			<Footer />
		</React.StrictMode>,
	);
} else {
	console.error("Failed to find the root element");
}
