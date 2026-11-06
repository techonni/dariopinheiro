import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

// Collection vide : le blog public a été retiré. Conservée pour éviter de casser
// d'éventuels imports Astro content pendant la transition.
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(200),
    category: z.string(),
    published: z.coerce.date(),
    updated: z.coerce.date(),
    order: z.number().default(100),
    archived: z.boolean().default(false),
  }),
});

export const collections = { blog };
