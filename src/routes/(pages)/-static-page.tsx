import type { ComponentType } from 'react';
import { notFound, useLoaderData } from '@tanstack/react-router';

import { Link } from '@/core/i18n/navigation';
import { envConfigs } from '@/config';
import {
  hreflangForLocale,
  hreflangLinks,
  localizedPageUrl,
  socialMetaTags,
} from '@/lib/seo';
import { m } from '@/paraglide/messages.js';
import { baseLocale, getLocale, locales } from '@/paraglide/runtime.js';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

type PageMeta = {
  title: string;
  description: string;
  updated_at: string;
};

type PageModule = {
  default: ComponentType;
  meta: PageMeta;
};

const pages = import.meta.glob<PageModule>('/src/content/pages/*.mdx', {
  eager: true,
});

function exactPage(slug: string, locale: string): PageModule | null {
  return pages[`/src/content/pages/${slug}.${locale}.mdx`] ?? null;
}

function loadPage(slug: string, locale: string): PageModule | null {
  return exactPage(slug, locale) ?? exactPage(slug, baseLocale);
}

function contentLocaleFor(slug: string, requestedLocale: string): string {
  return exactPage(slug, requestedLocale) ? requestedLocale : baseLocale;
}

function translatedLocalesFor(slug: string): string[] {
  return locales.filter((locale) => Boolean(exactPage(slug, locale)));
}

type LoaderData = {
  meta: PageMeta;
  slug: string;
  locale: string;
  contentLocale: string;
};

export function staticPageRouteOptions(slug: string) {
  return {
    loader: (): LoaderData => {
      const locale = getLocale();
      const page = loadPage(slug, locale);
      if (!page) throw notFound();
      return {
        meta: page.meta,
        slug,
        locale,
        contentLocale: contentLocaleFor(slug, locale),
      };
    },
    head: ({ loaderData }: { loaderData?: LoaderData }) => {
      if (!loaderData) return {};
      const { meta, slug: pageSlug, contentLocale } = loaderData;
      const path = `/${pageSlug}`;
      const canonical = localizedPageUrl(path, contentLocale);
      const availableLocales = translatedLocalesFor(pageSlug);
      const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: localizedPageUrl('/', contentLocale),
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: meta.title,
            item: canonical,
          },
        ],
      };
      const webPageSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: meta.title,
        description: meta.description,
        url: canonical,
        dateModified: meta.updated_at,
        isPartOf: {
          '@type': 'WebSite',
          name: envConfigs.app_name,
          url: envConfigs.app_url,
        },
        inLanguage: hreflangForLocale(contentLocale),
      };

      return {
        meta: [
          { title: meta.title },
          { name: 'description', content: meta.description },
          ...socialMetaTags({
            title: meta.title,
            description: meta.description,
            url: canonical,
          }),
        ],
        links: [
          { rel: 'canonical', href: canonical },
          ...hreflangLinks(path, availableLocales),
        ],
        scripts: [
          {
            type: 'application/ld+json',
            children: JSON.stringify([webPageSchema, breadcrumbSchema]),
          },
        ],
      };
    },
    component: StaticPage,
  };
}

function StaticPage() {
  const { meta, slug, locale } = useLoaderData({
    strict: false,
  }) as LoaderData;

  const page = loadPage(slug, locale)!;
  const Content = page.default;

  return (
    <article>
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href="/" className="hover:text-foreground transition-colors">
              {m['common.pages.home']()}
            </Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{meta.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <header className="border-border mb-6 border-b pb-5">
        <h1 className="text-foreground text-3xl font-semibold tracking-tight md:text-4xl">
          {meta.title}
        </h1>
        <p className="text-muted-foreground mt-2 text-sm">{meta.description}</p>
        <p className="text-muted-foreground mt-2 text-xs">
          {m['common.pages.last_updated']()}: {meta.updated_at}
        </p>
      </header>
      <div className="text-foreground/90 text-[15px] leading-7">
        <Content />
      </div>
    </article>
  );
}
