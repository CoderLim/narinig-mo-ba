import { createFileRoute } from '@tanstack/react-router';
import { ArrowLeft } from 'lucide-react';

import { Link } from '@/core/i18n/navigation';
import { hreflangLinks, localizedPageUrl, socialMetaTags } from '@/lib/seo';
import { cn } from '@/lib/utils';
import { m } from '@/paraglide/messages.js';
import { getLocale } from '@/paraglide/runtime.js';
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
    const title = m['play.seo.title']({}, { locale: locale as any });
    const description = m['play.seo.description'](
      {},
      { locale: locale as any }
    );
    const canonical = localizedPageUrl('/play', locale);
    return {
      meta: [
        { title },
        { name: 'description', content: description },
        ...socialMetaTags({ title, description, url: canonical }),
      ],
      links: [{ rel: 'canonical', href: canonical }, ...hreflangLinks('/play')],
    };
  },
  component: PlayPage,
});
