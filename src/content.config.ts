import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    seoTitle: z.string().max(70).optional(),
    description: z.string().max(200),
    summary: z.string().max(160).optional(),
    category: z.enum([
      "Journal",
      "Démarrer",
      "Construire",
      "Écrire",
      "Monétiser et mesurer",
      "Faire venir du monde",
      "Études de cas",
      "Durer",
    ]),
    published: z.coerce.date(),
    updated: z.coerce.date(),
    order: z.number().default(100),
    archived: z.boolean().default(false),
    images: z
      .array(
        z.object({
          url: z.string(),
          alt: z.string().optional(),
          credit: z.string().optional(),
          page: z.string().optional(),
        }),
      )
      .optional(),
  }),
});

export const collections = { blog };
