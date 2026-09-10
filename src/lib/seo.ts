import { envConfigs } from '@/config';
import { locales, localizeUrl } from '@/paraglide/runtime.js';

/** Default social share image (absolute path under /public). */
export const DEFAULT_OG_IMAGE_PATH = '/og.png';

export function absoluteUrl(path = '/'): string {
  const base = envConfigs.app_url.replace(/\/$/, '');
  if (!path || path === '/') return `${base}/`;
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

export function localizedPageUrl(path: string, locale: string): string {
  const pathname = path || '/';
  return localizeUrl(absoluteUrl(pathname), {
    locale: locale as (typeof locales)[number],
  }).href;
}

export function hreflangForLocale(locale: string): string {
  return locale === 'tl' ? 'tl-PH' : locale;
}

export function defaultOgImageUrl(): string {
  return absoluteUrl(DEFAULT_OG_IMAGE_PATH);
}

export function hreflangLinks(
  path: string,
  enabledLocales: readonly string[] = locales
) {
  return [
    ...enabledLocales.map((loc) => ({
      rel: 'alternate' as const,
      hrefLang: hreflangForLocale(loc),
      href: localizedPageUrl(path, loc),
    })),
    {
      rel: 'alternate' as const,
      hrefLang: 'x-default',
      href: localizedPageUrl(path, 'en'),
    },
  ];
}

type SocialMetaInput = {
  title: string;
  description: string;
  url: string;
  image?: string;
  type?: 'website' | 'article';
};

/** Open Graph + Twitter tags shared across public pages. */
export function socialMetaTags({
  title,
  description,
  url,
  image,
  type = 'website',
}: SocialMetaInput) {
  const ogImage = image || defaultOgImageUrl();
  return [
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:url', content: url },
    { property: 'og:type', content: type },
    { property: 'og:site_name', content: envConfigs.app_name },
    { property: 'og:image', content: ogImage },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: ogImage },
  ];
}
