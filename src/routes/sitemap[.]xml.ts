import { createFileRoute } from '@tanstack/react-router';

import { envConfigs } from '@/config';
import { baseLocale, localizeUrl } from '@/paraglide/runtime.js';

const STATIC_PATHS = [
  '',
  '/how-to-play-narinig-mo-ba',
  '/narinig-mo-ba-walkthrough',
  '/narinig-mo-ba-ending',
  '/narinig-mo-ba-mobile',
  '/narinig-mo-ba-download',
  '/narinig-mo-ba-story',
  '/privacy-policy',
  '/terms-of-service',
];

type Entry = {
  path: string;
  changeFrequency: string;
  priority: number;
};

function urlFor(path: string): string {
  return localizeUrl(`${envConfigs.app_url}${path || '/'}`, {
    locale: baseLocale,
  }).href;
}

function entryXml(entry: Entry): string {
  return [
    '  <url>',
    `    <loc>${urlFor(entry.path)}</loc>`,
    `    <changefreq>${entry.changeFrequency}</changefreq>`,
    `    <priority>${entry.priority}</priority>`,
    '  </url>',
  ].join('\n');
}

export const Route = createFileRoute('/sitemap.xml')({
  server: {
    handlers: {
      GET: async () => {
        const entries: Entry[] = STATIC_PATHS.map((path) => ({
          path,
          changeFrequency: path === '' ? 'weekly' : 'monthly',
          priority:
            path === ''
              ? 1
              : path.includes('privacy') || path.includes('terms')
                ? 0.3
                : 0.8,
        }));

        const xml = [
          '<?xml version="1.0" encoding="UTF-8"?>',
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
          ...entries.map(entryXml),
          '</urlset>',
          '',
        ].join('\n');

        return new Response(xml, {
          headers: { 'Content-Type': 'application/xml' },
        });
      },
    },
  },
});
