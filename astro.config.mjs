import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const deploymentUrl = process.env.URL || process.env.DEPLOY_PRIME_URL;

export default defineConfig({
  site: deploymentUrl,
  integrations: deploymentUrl ? [sitemap()] : [],
  output: 'static',
  trailingSlash: 'always',
  compressHTML: true,
  build: {
    format: 'directory',
  },
});
