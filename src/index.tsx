import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import ParticleBackground from "./components/particle/particle.tsx";
import ScrollProgressIndicator from "./components/scrollProgressIndicator/scrollProgressIndicator.tsx";
import "./index.css";

const rootElement = document.getElementById("root");

if (rootElement) {
	ReactDOM.createRoot(rootElement).render(
		<React.StrictMode>
			<ScrollProgressIndicator />
			<ParticleBackground />
			<App />
		</React.StrictMode>,
	);
} else {
	console.error("Failed to find the root element");
}
