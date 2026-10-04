import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

// Blog : un fichier Markdown par guide dans src/content/blog/ (nom du fichier = URL /blog/<slug>/).
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    // Titre pour Google (facultatif, sinon `title`).
    seoTitle: z.string().max(70).optional(),
    description: z.string().max(160),
    // Phrase courte pour la carte de la liste /blog/.
    summary: z.string().max(140),
    category: z.enum(["Démarrer", "Construire", "Écrire", "Monétiser et mesurer", "Faire venir du monde", "Études de cas", "Durer"]),
    published: z.coerce.date(),
    updated: z.coerce.date(),
    order: z.number(),
  }),
});

export const collections = { blog };
