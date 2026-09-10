import { Link } from '@/core/i18n/navigation';

const guideLinks = [
  { href: '/how-to-play-narinig-mo-ba', label: 'How to Play' },
  { href: '/narinig-mo-ba-walkthrough', label: 'Walkthrough' },
  { href: '/narinig-mo-ba-ending', label: 'Ending Explained' },
];

const gameLinks = [
  { href: '/narinig-mo-ba-story', label: 'Story & Themes' },
  { href: '/narinig-mo-ba-mobile', label: 'Mobile Status' },
  { href: '/narinig-mo-ba-download', label: 'Download Guide' },
];

export function Footer() {
  return (
    <footer className="border-border bg-muted/20 border-t">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="font-serif text-xl font-semibold">
            Narinig Mo Ba?
          </Link>
          <p className="text-muted-foreground mt-3 max-w-sm text-sm leading-6">
            Source-checked guides for the Filipino psychological horror game,
            including gameplay, story, platform status, and developer updates.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold">Guides</h2>
          <div className="mt-3 flex flex-col gap-2">
            {guideLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold">Game</h2>
          <div className="mt-3 flex flex-col gap-2">
            {gameLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold">Sources</h2>
          <div className="mt-3 flex flex-col gap-2">
            <a
              href="https://doppie.itch.io/narinig-mo-ba"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              Game on itch.io
            </a>
            <a
              href="https://itch.io/jam/gamejamlosbanos2026/entries"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              Game Jam Los Baños
            </a>
            <Link
              href="/privacy-policy"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
