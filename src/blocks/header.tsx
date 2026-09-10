import { ExternalLink } from 'lucide-react';

import { Link } from '@/core/i18n/navigation';

const navLinks = [
  { href: '/how-to-play-narinig-mo-ba', label: 'How to Play' },
  { href: '/narinig-mo-ba-walkthrough', label: 'Walkthrough' },
  { href: '/narinig-mo-ba-story', label: 'Story' },
  { href: '/narinig-mo-ba-mobile', label: 'Mobile' },
  { href: '/narinig-mo-ba-download', label: 'Download' },
];

export function Header() {
  return (
    <header className="bg-background/90 border-border sticky top-0 z-50 border-b backdrop-blur-md">
      <div className="mx-auto flex min-h-16 max-w-6xl flex-wrap items-center gap-x-6 gap-y-2 px-4 py-3 sm:px-6">
        <Link href="/" className="mr-auto font-serif text-lg font-semibold tracking-tight">
          Narinig Mo Ba?
        </Link>

        <nav className="order-3 flex w-full gap-4 overflow-x-auto pb-1 text-sm sm:order-2 sm:w-auto sm:pb-0">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground whitespace-nowrap transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href="https://doppie.itch.io/narinig-mo-ba"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-primary-foreground order-2 inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium sm:order-3"
        >
          Play on itch.io
          <ExternalLink className="size-3.5" />
        </a>
      </div>
    </header>
  );
}
