import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'akhil-portfolio';
const customDomain = process.env.CUSTOM_DOMAIN === 'true';
const isUserSite = repository.toLowerCase() === 'akhil2453.github.io';
const base = customDomain || isUserSite ? undefined : `/${repository}`;

export default defineConfig({
  site: process.env.SITE_URL ?? 'https://akhil2453.github.io',
  base,
  integrations: [sitemap()],
  build: {
    format: 'directory'
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark'
    }
  }
});
