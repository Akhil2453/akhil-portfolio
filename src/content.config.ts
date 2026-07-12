import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const project = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.string(),
    period: z.string(),
    organisation: z.string().optional(),
    role: z.string().optional(),
    status: z.enum(['active', 'completed', 'in-development', 'archived']).default('completed'),
    featured: z.boolean().default(false),
    image: z.string(),
    imageAlt: z.string(),
    tools: z.array(z.string()).default([]),
    outcomes: z.array(z.string()).default([]),
    links: z.array(z.object({ label: z.string(), url: z.string() })).default([]),
    order: z.number().default(99)
  })
});

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    image: z.string(),
    imageAlt: z.string(),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    downloadableResource: z.string().optional()
  })
});

const update = defineCollection({
  loader: glob({ base: './src/content/updates', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    platform: z.enum(['LinkedIn', 'Website', 'Event', 'Milestone']).default('Website'),
    url: z.string().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    featured: z.boolean().default(false)
  })
});

export const collections = { project, blog, update };
