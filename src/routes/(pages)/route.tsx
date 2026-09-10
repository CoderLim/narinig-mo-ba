import { MDXProvider } from '@mdx-js/react';
import { createFileRoute, Outlet } from '@tanstack/react-router';

import { Footer } from '@/blocks/footer';
import { Header } from '@/blocks/header';
import { mdxComponents } from '@/components/mdx-components';

export const Route = createFileRoute('/(pages)')({
  component: PagesLayout,
});

function PagesLayout() {
  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col">
      <Header />
      <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-8 md:px-8 md:py-12">
        <MDXProvider components={mdxComponents}>
          <Outlet />
        </MDXProvider>
      </main>
      <Footer />
    </div>
  );
}
