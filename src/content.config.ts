import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const experience = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/experience" }),
  schema: z
    .object({
      company: z.string(),
      logo: z.string().optional(),
      order: z.number().default(0),
      // Flexible: can have single role fields OR a positions array
      positions: z
        .array(
          z.object({
            role: z.string(),
            startDate: z.string(),
            endDate: z.string().optional(),
            description: z.string(),
            technologies: z.array(z.string()),
          }),
        )
        .optional(),
      // Legacy fields (optional now, for backward compat or single-role simplicity)
      role: z.string().optional(),
      startDate: z.string().optional(),
      endDate: z.string().optional(),
      description: z.string().optional(),
      technologies: z.array(z.string()).optional(),
    })
    .transform((data) => {
      // Normalization: specific transform to ensure we always work with an array of positions
      if (data.positions) return data;

      // If no positions array, migrate single fields into one position
      return {
        ...data,
        positions: [
          {
            role: data.role!,
            startDate: data.startDate!,
            endDate: data.endDate,
            description: data.description!,
            technologies: data.technologies || [],
          },
        ],
      };
    }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    link: z.string().url().optional(),
    github: z.string().url().optional(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    date: z.string(),
  }),
});

export const collections = { experience, projects };
