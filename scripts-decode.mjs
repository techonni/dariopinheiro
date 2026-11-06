import { readFileSync, writeFileSync, existsSync } from "node:fs";
function decode(b64path, outpath) {
  if (!existsSync(b64path)) return;
  writeFileSync(outpath, Buffer.from(readFileSync(b64path, "utf8").replace(/\s/g, ""), "base64"));
}
decode("assets/silhouette.jpg.b64", "public/images/silhouette.jpg");
decode("assets/pp.jpg.b64", "public/images/pp.jpg");
