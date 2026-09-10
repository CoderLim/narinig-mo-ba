import { createFileRoute } from '@tanstack/react-router';

import { envConfigs } from '@/config';
import { baseLocale, locales, localizeUrl } from '@/paraglide/runtime.js';

const STATIC_PATHS = [
  '',
  '/play',
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

function urlFor(path: string, locale: string = baseLocale): string {
  return localizeUrl(`${envConfigs.app_url}${path || '/'}`, {
    locale: locale as typeof baseLocale,
  }).href;
}

function entryXml(entry: Entry): string {
  const loc = urlFor(entry.path);
  const alternates = locales
    .map(
      (locCode) =>
        `    <xhtml:link rel="alternate" hreflang="${locCode}" href="${urlFor(entry.path, locCode)}" />`
    )
    .join('\n');
  return [
    '  <url>',
    `    <loc>${loc}</loc>`,
    alternates,
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${urlFor(entry.path, 'en')}" />`,
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
          changeFrequency:
            path === '' || path === '/play' ? 'weekly' : 'monthly',
          priority:
            path === ''
              ? 1
              : path === '/play'
                ? 0.9
                : path.includes('privacy') || path.includes('terms')
                  ? 0.3
                  : 0.8,
        }));

        const xml = [
          '<?xml version="1.0" encoding="UTF-8"?>',
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
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
