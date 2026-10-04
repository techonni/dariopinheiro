// Plano do site para o Google (mesmo modelo do techonni.com): início, blog e cada guia do blog.
import type { APIRoute } from "astro";
import { getAllPosts } from "../lib/blog";

export const GET: APIRoute = async ({ site }) => {
  const posts = await getAllPosts();
  const lastBlogUpdate = posts.map((p) => p.data.updated.toISOString().slice(0, 10)).sort().at(-1);
  const urls = [
    { path: "/", lastmod: undefined },
    { path: "/blog/", lastmod: lastBlogUpdate },
    ...posts.map((p) => ({ path: `/blog/${p.id}/`, lastmod: p.data.updated.toISOString().slice(0, 10) })),
  ];
  const body =
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls
      .map((u) => `  <url><loc>${new URL(u.path, site).href}</loc>${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ""}</url>`)
      .join("\n") +
    `\n</urlset>\n`;
  return new Response(body, { headers: { "Content-Type": "application/xml" } });
};
