import { cpSync, existsSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const rootDir = process.cwd();
const distDir = resolve(rootDir, "dist");
const clientDir = resolve(distDir, "client");
const serverDir = resolve(distDir, "server");

const clientAssetsDir = resolve(clientDir, "assets");
if (!existsSync(clientAssetsDir)) {
  console.error("No built client assets found in dist/client/assets.");
  process.exit(1);
}

if (existsSync(clientDir)) {
  cpSync(clientDir, distDir, { recursive: true, force: true });
}

if (existsSync(serverDir)) {
  rmSync(serverDir, { recursive: true, force: true });
}

if (existsSync(clientDir)) {
  rmSync(clientDir, { recursive: true, force: true });
}

const assetFiles = readdirSync(resolve(distDir, "assets")).filter(
  (file) => file.endsWith(".js") || file.endsWith(".css") || file.endsWith(".ico"),
);
const mainEntry = assetFiles.find((file) => /^index-.*\.js$/.test(file)) ?? assetFiles.find((file) => file.endsWith(".js"));
const stylesheet = assetFiles.find((file) => file.endsWith(".css"));
const favicon = assetFiles.find((file) => file.endsWith(".ico"));

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Alex Rivera Portfolio</title>
    ${stylesheet ? `<link rel="stylesheet" href="/assets/${stylesheet}">` : ""}
    ${favicon ? `<link rel="icon" href="/assets/${favicon}">` : ""}
  </head>
  <body>
    <div id="root"></div>
    ${mainEntry ? `<script type="module" crossorigin src="/assets/${mainEntry}"></script>` : ""}
  </body>
</html>
`;

writeFileSync(resolve(distDir, "index.html"), html, "utf8");
console.log("Flattened dist output to the root directory with index.html.");
