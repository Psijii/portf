import { defineCollection, z } from "astro:content";

const projects_no = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    year: z.string(),
    role: z.string(),
    tags: z.array(z.string()),
    summary: z.string()
  }),
});

const projects_en = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    year: z.string(),
    role: z.string(),
    tags: z.array(z.string()),
    summary: z.string()
  }),
});

export const collections = {
  projects_no,
  projects_en
};
