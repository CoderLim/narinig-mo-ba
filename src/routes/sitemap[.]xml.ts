import { createFileRoute } from '@tanstack/react-router';

import { getLocalPosts, mergePosts } from '@/content/posts';
import { hreflangForLocale, localizedPageUrl } from '@/lib/seo';
import { baseLocale } from '@/paraglide/runtime.js';

type Entry = {
  path: string;
  changeFrequency: string;
  priority: number;
  locales: string[];
  lastmod?: string;
};

const HOME_LOCALES = ['en', 'zh', 'tl'];
const GAME_LOCALES = ['en', 'tl'];
const LEGAL_LOCALES = ['en', 'zh', 'tl'];

const STATIC_PATHS: Entry[] = [
  {
    path: '',
    changeFrequency: 'weekly',
    priority: 1,
    locales: HOME_LOCALES,
  },
  {
    path: '/how-to-play-narinig-mo-ba',
    changeFrequency: 'monthly',
    priority: 0.8,
    locales: GAME_LOCALES,
  },
  {
    path: '/narinig-mo-ba-walkthrough',
    changeFrequency: 'monthly',
    priority: 0.8,
    locales: GAME_LOCALES,
  },
  {
    path: '/narinig-mo-ba-ending',
    changeFrequency: 'monthly',
    priority: 0.8,
    locales: GAME_LOCALES,
  },
  {
    path: '/narinig-mo-ba-mobile',
    changeFrequency: 'monthly',
    priority: 0.8,
    locales: GAME_LOCALES,
  },
  {
    path: '/narinig-mo-ba-download',
    changeFrequency: 'monthly',
    priority: 0.8,
    locales: GAME_LOCALES,
  },
  {
    path: '/narinig-mo-ba-story',
    changeFrequency: 'monthly',
    priority: 0.8,
    locales: GAME_LOCALES,
  },
  {
    path: '/blog',
    changeFrequency: 'weekly',
    priority: 0.6,
    locales: ['en'],
  },
  {
    path: '/privacy-policy',
    changeFrequency: 'yearly',
    priority: 0.3,
    locales: LEGAL_LOCALES,
  },
  {
    path: '/terms-of-service',
    changeFrequency: 'yearly',
    priority: 0.3,
    locales: LEGAL_LOCALES,
  },
];

function entryXml(entry: Entry, locale: string): string {
  const lines = [
    '  <url>',
    `    <loc>${localizedPageUrl(entry.path || '/', locale)}</loc>`,
  ];

  if (entry.lastmod) {
    lines.push(`    <lastmod>${entry.lastmod}</lastmod>`);
  }

  lines.push(
    `    <changefreq>${entry.changeFrequency}</changefreq>`,
    `    <priority>${entry.priority}</priority>`
  );

  for (const alternateLocale of entry.locales) {
    lines.push(
      `    <xhtml:link rel="alternate" hreflang="${hreflangForLocale(alternateLocale)}" href="${localizedPageUrl(entry.path || '/', alternateLocale)}" />`
    );
  }

  lines.push(
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${localizedPageUrl(entry.path || '/', 'en')}" />`
  );
  lines.push('  </url>');
  return lines.join('\n');
}

export const Route = createFileRoute('/sitemap.xml')({
  server: {
    handlers: {
      GET: async () => {
        const entries: Entry[] = [...STATIC_PATHS];

        // Blog content remains English-only until a real translation exists.
        try {
          let posts = getLocalPosts(baseLocale);
          const { listPublishedArticles } = await import('@/modules/posts/service');
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
              locales: ['en'],
            });
          }
        } catch {
          // DB unreachable — static paths only.
        }

        const xmlEntries = entries.flatMap((entry) =>
          entry.locales.map((locale) => entryXml(entry, locale))
        );

        const xml = [
          '<?xml version="1.0" encoding="UTF-8"?>',
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
          '        xmlns:xhtml="http://www.w3.org/1999/xhtml">',
          ...xmlEntries,
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
