import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const routesToPrerender = fs
  .readdirSync(toAbsolute("src/pages"))
  .map((file) => {
  
    if (file == "index.tsx") {
      return;
    }
    
    const name = file.replace(/\.tsx$/, "");
    
    return name === "Home" ? `/` : `/${name}`;
  });

const { render } = await import("./dist/server/entry-server.js");

(async () => {

  for (const url of routesToPrerender) {
  
    if (!url) {
      return;
    }
    
    const template = fs.readFileSync(
      toAbsolute("dist/static/index.html"),
      "utf-8"
    );

    const appHtml = await render(url);
    const html = template.replace(`<!--outlet-->`, appHtml);

    const filePath = `dist/static${url === "/" ? "/index" : url}.html`;

    fs.writeFileSync(toAbsolute(filePath), html);
  }
})();

