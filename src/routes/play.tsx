import { createFileRoute } from '@tanstack/react-router';
import { ArrowLeft } from 'lucide-react';

import { Link } from '@/core/i18n/navigation';
import { envConfigs } from '@/config';
import { cn } from '@/lib/utils';
import { m } from '@/paraglide/messages.js';
import { getLocale, locales, localizeUrl } from '@/paraglide/runtime.js';
import { Footer } from '@/blocks/footer';
import { Header } from '@/blocks/header';
import { GameIframe } from '@/components/game-iframe';
import { buttonVariants } from '@/components/ui/button';

function PlayPage() {
  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 flex-col px-4 py-6 sm:py-8">
        <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h1 className="font-serif text-2xl tracking-tight sm:text-3xl">
                {m['play.page.title']()}
              </h1>
              <p className="text-muted-foreground mt-1 text-sm">
                {m['play.page.subtitle']()}
              </p>
            </div>
            <Link
              href="/"
              className={cn(
                buttonVariants({ variant: 'outline', size: 'sm' }),
                'gap-1.5'
              )}
              title={m['play.page.back']()}
            >
              <ArrowLeft className="size-3.5" />
              {m['play.page.back']()}
            </Link>
          </div>
          <GameIframe
            title={m['landing.play.iframe_title']()}
            className="border-border bg-muted/40 relative min-h-[70vh] w-full flex-1 overflow-hidden rounded-xl border shadow-lg"
          />
          <p className="text-muted-foreground text-xs sm:text-sm">
            {m['play.page.credit']()}{' '}
            <a
              href="https://doppie.itch.io/narinig-mo-ba"
              target="_blank"
              rel="noopener noreferrer"
              title="Official itch.io page"
              className="underline-offset-4 hover:underline"
            >
              doppie.itch.io/narinig-mo-ba
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export const Route = createFileRoute('/play')({
  loader: async () => {
    const locale = getLocale();
    return { locale };
  },
  head: ({ loaderData }) => {
    const locale = loaderData?.locale ?? 'en';
    const urlFor = (loc: string) =>
      localizeUrl(`${envConfigs.app_url}/play`, { locale: loc as any }).href;
    const title = m['play.seo.title']({}, { locale: locale as any });
    const description = m['play.seo.description'](
      {},
      { locale: locale as any }
    );
    const canonical = urlFor(locale);
    const ogImage = `${envConfigs.app_url}/logo.png`;
    return {
      meta: [
        { title },
        { name: 'description', content: description },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:url', content: canonical },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: envConfigs.app_name },
        { property: 'og:image', content: ogImage },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
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
  component: PlayPage,
});
