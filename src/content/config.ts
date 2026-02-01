import { defineCollection, z } from "astro:content";

const experienceCollection = defineCollection({
  type: "data",
  schema: z.object({
    company: z.string(),
    role: z.string(),
    startDate: z.string(),
    endDate: z.string().optional(),
    description: z.string(),
    technologies: z.array(z.string()),
    logo: z.string(),
    order: z.number(),
  }),
});

const projectsCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    link: z.string().optional(),
    github: z.string().optional(),
    date: z.string(),
    featured: z.boolean(),
  }),
});

export const collections = {
  experience: experienceCollection,
  projects: projectsCollection,
};
