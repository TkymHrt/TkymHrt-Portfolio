import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const datedContent = z.object({
  title: z.string().min(1).max(80),
  description: z.string().min(1).max(180),
  publishedAt: z.coerce.date(),
  updatedAt: z.coerce.date().optional(),
  tags: z.array(z.string().min(1)).max(8).default([]),
  draft: z.boolean().default(false),
});

const works = defineCollection({
  loader: glob({
    base: "./src/content/works",
    pattern: "**/[^_]*.{md,mdx}",
  }),
  schema: ({ image }) =>
    datedContent.extend({
      featured: z.boolean().default(false),
      summary: z.string().min(1).max(80),
      role: z.string().min(1).max(80),
      period: z.string().min(1).max(40),
      repositoryUrl: z.url().optional(),
      liveUrl: z.url().optional(),
      cover: image().optional(),
      visual: z.enum(["plant", "task", "photo", "code"]).default("code"),
    }),
});

const articles = defineCollection({
  loader: glob({
    base: "./src/content/articles",
    pattern: "**/[^_]*.{md,mdx}",
  }),
  schema: datedContent.extend({
    topic: z.string().min(1).max(40),
  }),
});

const blog = defineCollection({
  loader: glob({
    base: "./src/content/blog",
    pattern: "**/[^_]*.{md,mdx}",
  }),
  schema: datedContent,
});

export const collections = { works, articles, blog };
