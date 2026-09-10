import { createFileRoute } from '@tanstack/react-router';

import { envConfigs } from '@/config';
import { hreflangLinks, localizedPageUrl, socialMetaTags } from '@/lib/seo';
import { m } from '@/paraglide/messages.js';
import { getLocale } from '@/paraglide/runtime.js';
import { AboutGame } from '@/blocks/about-game';
import { CTA } from '@/blocks/cta';
import { FAQ } from '@/blocks/faq';
import { Footer } from '@/blocks/footer';
import { GamePlay } from '@/blocks/game-play';
import { Header } from '@/blocks/header';
import { HomeGuide } from '@/blocks/home-guide';
import { HowToPlay } from '@/blocks/how-to-play';
import { SupportWidget } from '@/blocks/support-widget';

function HomePage() {
  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col">
      <Header />
      <main>
        <GamePlay />
        <HowToPlay />
        <AboutGame />
        <HomeGuide />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <SupportWidget />
    </div>
  );
}

export const Route = createFileRoute('/')({
  loader: async () => {
    const locale = getLocale();
    return { locale };
  },
  head: ({ loaderData }) => {
    const locale = loaderData?.locale ?? 'en';
    const title = m['landing.seo.title']({}, { locale: locale as any });
    const description = m['landing.seo.description'](
      {},
      { locale: locale as any }
    );
    const canonical = localizedPageUrl('/', locale);
    const schema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebApplication',
          name: 'Narinig Mo Ba?',
          applicationCategory: 'GameApplication',
          operatingSystem: 'Web Browser',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
          },
          description,
          url: canonical,
          image: `${envConfigs.app_url.replace(/\/$/, '')}/og.png`,
          inLanguage: ['en', 'zh'],
        },
        {
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: m['landing.faq.what.question'](
                {},
                { locale: locale as any }
              ),
              acceptedAnswer: {
                '@type': 'Answer',
                text: m['landing.faq.what.answer'](
                  {},
                  { locale: locale as any }
                ),
              },
            },
            {
              '@type': 'Question',
              name: m['landing.faq.free.question'](
                {},
                { locale: locale as any }
              ),
              acceptedAnswer: {
                '@type': 'Answer',
                text: m['landing.faq.free.answer'](
                  {},
                  { locale: locale as any }
                ),
              },
            },
            {
              '@type': 'Question',
              name: m['landing.faq.play.question'](
                {},
                { locale: locale as any }
              ),
              acceptedAnswer: {
                '@type': 'Answer',
                text: m['landing.faq.play.answer'](
                  {},
                  { locale: locale as any }
                ),
              },
            },
            {
              '@type': 'Question',
              name: m['landing.faq.controls.question'](
                {},
                { locale: locale as any }
              ),
              acceptedAnswer: {
                '@type': 'Answer',
                text: m['landing.faq.controls.answer'](
                  {},
                  { locale: locale as any }
                ),
              },
            },
            {
              '@type': 'Question',
              name: m['landing.faq.official.question'](
                {},
                { locale: locale as any }
              ),
              acceptedAnswer: {
                '@type': 'Answer',
                text: m['landing.faq.official.answer'](
                  {},
                  { locale: locale as any }
                ),
              },
            },
            {
              '@type': 'Question',
              name: m['landing.faq.mobile.question'](
                {},
                { locale: locale as any }
              ),
              acceptedAnswer: {
                '@type': 'Answer',
                text: m['landing.faq.mobile.answer'](
                  {},
                  { locale: locale as any }
                ),
              },
            },
          ],
        },
      ],
    };

    return {
      meta: [
        { title },
        { name: 'description', content: description },
        ...socialMetaTags({ title, description, url: canonical }),
      ],
      links: [{ rel: 'canonical', href: canonical }, ...hreflangLinks('/')],
      scripts: [
        {
          type: 'application/ld+json',
          children: JSON.stringify(schema),
        },
      ],
    };
  },
  component: HomePage,
});
