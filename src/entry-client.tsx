import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { hydrateRoot } from "react-dom/client";
import "./index.css";

const container = document.getElementById("root");

if (container) {
  hydrateRoot(
    container,
      <BrowserRouter>
        <App />
      </BrowserRouter>
  );
}
