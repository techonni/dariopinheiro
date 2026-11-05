// Decodifica a foto de perfil (guardada em base64) para public/images/silhouette.jpg antes do build.
import { readFileSync, writeFileSync } from "node:fs";
writeFileSync("public/images/silhouette.jpg", Buffer.from(readFileSync("assets/silhouette.jpg.b64", "utf8").replace(/\s/g, ""), "base64"));
