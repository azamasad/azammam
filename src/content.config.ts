import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const writing = defineCollection({
  loader: glob({ base: './src/content/writing', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date().optional(),
    sourceName: z.string().optional(),
    sourceUrl: z.string().optional(),
  }),
});

const paintings = defineCollection({
  loader: glob({ base: './src/content/paintings', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    image: z.string(),
    alt: z.string().optional(),
    medium: z.string().optional(),
    year: z.string().optional(),
    caption: z.string().optional(),
    date: z.coerce.date().optional(),
  }),
});

export const collections = { writing, paintings };
