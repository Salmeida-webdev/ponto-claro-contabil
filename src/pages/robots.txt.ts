import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const sitemapLine = site ? `Sitemap: ${new URL('sitemap-index.xml', site).href}` : '';
  const body = ['User-agent: *', 'Allow: /', sitemapLine].filter(Boolean).join('\n');
  return new Response(`${body}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
