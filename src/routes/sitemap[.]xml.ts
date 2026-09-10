import { createFileRoute } from '@tanstack/react-router';

import { envConfigs } from '@/config';
import { baseLocale, locales, localizeUrl } from '@/paraglide/runtime.js';
import { getLocalPosts, mergePosts } from '@/content/posts';

const STATIC_PATHS: {
  path: string;
  changeFrequency: string;
  priority: number;
}[] = [
  { path: '', changeFrequency: 'weekly', priority: 1 },
  { path: '/play', changeFrequency: 'weekly', priority: 0.9 },
  {
    path: '/how-to-play-narinig-mo-ba',
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    path: '/narinig-mo-ba-walkthrough',
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    path: '/narinig-mo-ba-ending',
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    path: '/narinig-mo-ba-mobile',
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    path: '/narinig-mo-ba-download',
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    path: '/narinig-mo-ba-story',
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  { path: '/blog', changeFrequency: 'weekly', priority: 0.6 },
  {
    path: '/privacy-policy',
    changeFrequency: 'yearly',
    priority: 0.3,
  },
  {
    path: '/terms-of-service',
    changeFrequency: 'yearly',
    priority: 0.3,
  },
];

function urlFor(path: string, locale: string): string {
  return localizeUrl(`${envConfigs.app_url}${path || '/'}`, {
    locale: locale as (typeof locales)[number],
  }).href;
}

function entryXml(opts: {
  path: string;
  changeFrequency: string;
  priority: number;
  lastmod?: string;
}): string {
  const lines = ['  <url>', `    <loc>${urlFor(opts.path, baseLocale)}</loc>`];
  if (opts.lastmod) {
    lines.push(`    <lastmod>${opts.lastmod}</lastmod>`);
  }
  lines.push(
    `    <changefreq>${opts.changeFrequency}</changefreq>`,
    `    <priority>${opts.priority}</priority>`
  );

  // xhtml locale alternates for each public locale
  for (const loc of locales) {
    lines.push(
      `    <xhtml:link rel="alternate" hreflang="${loc}" href="${urlFor(opts.path, loc)}" />`
    );
  }
  lines.push(
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${urlFor(opts.path, 'en')}" />`
  );
  lines.push('  </url>');
  return lines.join('\n');
}

export const Route = createFileRoute('/sitemap.xml')({
  server: {
    handlers: {
      GET: async () => {
        const entries = [...STATIC_PATHS];

        // Published blog posts (local MDX + DB)
        try {
          let posts = getLocalPosts(baseLocale);
          const { listPublishedArticles } =
            await import('@/modules/posts/service');
          const rows = await listPublishedArticles().catch(() => []);
          const dbPosts = rows.map((row) => ({
            slug: row.slug,
            title: row.title || row.slug,
            description: row.description || '',
            createdAt: new Date(row.createdAt).toISOString(),
            source: 'db' as const,
          }));
          posts = mergePosts(dbPosts, posts);
          for (const post of posts) {
            entries.push({
              path: `/blog/${post.slug}`,
              changeFrequency: 'monthly',
              priority: 0.5,
            });
          }
        } catch {
          // DB unreachable — static paths only
        }

        const xml = [
          '<?xml version="1.0" encoding="UTF-8"?>',
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
          '        xmlns:xhtml="http://www.w3.org/1999/xhtml">',
          ...entries.map((e) => entryXml(e)),
          '</urlset>',
          '',
        ].join('\n');

        return new Response(xml, {
          headers: {
            'Content-Type': 'application/xml; charset=utf-8',
            'Cache-Control': 'public, max-age=3600',
          },
        });
      },
    },
  },
});
