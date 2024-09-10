import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import type { Location } from "react-router-dom";
import App from "./App";
import "./index.css";

export async function render(url: string | Partial<Location>) {

  const appHtml = ReactDOMServer.renderToString(
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
  );

  return appHtml;
}
