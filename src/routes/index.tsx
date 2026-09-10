import { MDXProvider } from '@mdx-js/react';
import { createFileRoute } from '@tanstack/react-router';

import { Footer } from '@/blocks/footer';
import { Header } from '@/blocks/header';
import { mdxComponents } from '@/components/mdx-components';
import { envConfigs } from '@/config';
import HomeContent, { meta } from '@/content/pages/home.en.mdx';

function HomePage() {
  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col">
      <Header />
      <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-12 md:px-8 md:py-16">
        <header className="border-border mb-10 border-b pb-8">
          <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
            Filipino Psychological Horror Game Guide
          </p>
          <h1 className="text-foreground mt-3 font-serif text-4xl leading-tight font-normal tracking-tight md:text-6xl">
            Narinig Mo Ba?
          </h1>
          <p className="text-muted-foreground mt-4 max-w-3xl text-lg leading-8">
            {meta.description}
          </p>
        </header>

        <article className="text-foreground/90 text-[15px] leading-7">
          <MDXProvider components={mdxComponents}>
            <HomeContent />
          </MDXProvider>
        </article>
      </main>
      <Footer />
    </div>
  );
}

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: meta.title },
      { name: 'description', content: meta.description },
      {
        name: 'keywords',
        content:
          'Narinig Mo Ba, Narinig Mo Ba game, Filipino horror game, sari-sari store horror',
      },
    ],
    links: [
      {
        rel: 'canonical',
        href: `${envConfigs.app_url.replace(/\/$/, '')}/`,
      },
    ],
  }),
  component: HomePage,
});
