import type { ComponentType } from 'react';
import { notFound, useLoaderData } from '@tanstack/react-router';

import { Link } from '@/core/i18n/navigation';
import { envConfigs } from '@/config';
import { m } from '@/paraglide/messages.js';
import {
  baseLocale,
  getLocale,
  locales,
  localizeUrl,
} from '@/paraglide/runtime.js';
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

function loadPage(slug: string, locale: string): PageModule | null {
  return (
    pages[`/src/content/pages/${slug}.${locale}.mdx`] ??
    pages[`/src/content/pages/${slug}.${baseLocale}.mdx`] ??
    null
  );
}

type LoaderData = { meta: PageMeta; slug: string; locale: string };

export function staticPageRouteOptions(slug: string) {
  return {
    loader: (): LoaderData => {
      const locale = getLocale();
      const page = loadPage(slug, locale);
      if (!page) throw notFound();
      return { meta: page.meta, slug, locale };
    },
    head: ({ loaderData }: { loaderData?: LoaderData }) => {
      if (!loaderData) return {};
      const { meta, locale } = loaderData;
      const urlFor = (loc: string) =>
        localizeUrl(`${envConfigs.app_url}/${slug}`, {
          locale: loc as ReturnType<typeof getLocale>,
        }).href;
      const canonical = urlFor(locale);
      const ogImage = `${envConfigs.app_url}/logo.png`;
      return {
        meta: [
          { title: meta.title },
          { name: 'description', content: meta.description },
          { name: 'robots', content: 'index, follow' },
          { property: 'og:title', content: meta.title },
          { property: 'og:description', content: meta.description },
          { property: 'og:url', content: canonical },
          { property: 'og:type', content: 'article' },
          { property: 'og:site_name', content: envConfigs.app_name },
          { property: 'og:image', content: ogImage },
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: meta.title },
          { name: 'twitter:description', content: meta.description },
          { name: 'twitter:image', content: ogImage },
        ],
        links: [
          { rel: 'canonical', href: canonical },
          ...locales.map((loc) => ({
            rel: 'alternate',
            hrefLang: loc,
            href: urlFor(loc),
          })),
          { rel: 'alternate', hrefLang: 'x-default', href: urlFor('en') },
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
