import { createFileRoute } from '@tanstack/react-router';

import { envConfigs } from '@/config';
import { m } from '@/paraglide/messages.js';
import { getLocale, locales, localizeUrl } from '@/paraglide/runtime.js';
import { AboutGame } from '@/blocks/about-game';
import { CTA } from '@/blocks/cta';
import { FAQ } from '@/blocks/faq';
import { Footer } from '@/blocks/footer';
import { GamePlay } from '@/blocks/game-play';
import { Header } from '@/blocks/header';
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
    const urlFor = (loc: string) =>
      localizeUrl(`${envConfigs.app_url}/`, { locale: loc as any }).href;
    const title = m['landing.seo.title']({}, { locale: locale as any });
    const description = m['landing.seo.description'](
      {},
      { locale: locale as any }
    );
    const canonical = urlFor(locale);
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
          inLanguage: ['en', 'fil'],
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
          ],
        },
      ],
    };

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
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
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
