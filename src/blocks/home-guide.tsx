import { Link } from '@/core/i18n/navigation';

export function HomeGuide() {
  return (
    <section className="px-4 py-20 sm:py-28" aria-labelledby="guide-heading">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-3xl space-y-12">
          <div className="space-y-5">
            <p className="text-accent-foreground/80 text-xs tracking-[0.2em] uppercase">
              Narinig Mo Ba game guide
            </p>
            <h2
              id="guide-heading"
              className="font-serif text-3xl tracking-tight sm:text-4xl"
            >
              A closer look at the story, setting, creators, and current versions
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              Narinig Mo Ba works because it turns an ordinary neighborhood routine
              into the delivery system for its horror. You are not dropped into a
              haunted mansion or told to investigate a mystery. You begin behind the
              counter of a Filipino sari-sari store, serving people who have perfectly
              ordinary reasons to stop by. The tension grows through small requests,
              repeated names, half-finished conversations, and gossip that starts to
              carry more weight than it first appears to.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              That makes the game easier to understand if you treat the store work and
              the story as one system. Fetching products, checking prices, handling
              payment, and listening to customers are not distractions from the plot.
              They create the rhythm that lets the plot unfold. If you rush through the
              dialogue just to complete orders, you are likely to miss the details that
              make later scenes land.
            </p>
          </div>

          <div className="space-y-5">
            <h3 className="font-serif text-2xl tracking-tight">
              Why the sari-sari store setting matters
            </h3>
            <p className="text-muted-foreground text-base leading-relaxed">
              A sari-sari store is more than a place to buy small everyday goods. In a
              neighborhood it can also become a social crossing point: people arrive,
              wait, talk, ask questions, and repeat what they have heard elsewhere.
              Narinig Mo Ba uses that familiar setting to make information itself feel
              unstable. The player often receives the neighborhood through other
              people&apos;s words rather than direct evidence.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              The title fits that structure. “Narinig mo ba?” is commonly understood as
              “Did you hear?” or “Have you heard?” The phrase naturally introduces a
              rumor or a piece of gossip. In the game, that everyday question becomes a
              useful horror device because hearing something does not guarantee that you
              know the full truth. A comment can be accurate, exaggerated, incomplete,
              or misunderstood, and the player has to keep those fragments in mind as
              the shift continues.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              The official itch.io listing describes Narinig Mo Ba as a Visual Novel
              and tags it with Horror, Filipino, Short, Working Simulator, storygame,
              2D, Cute, and No AI. The Cute and Horror tags are especially useful for
              understanding its tone: the visual warmth of the shop creates a baseline
              that makes later unease more effective.
            </p>
          </div>

          <div className="space-y-5">
            <h3 className="font-serif text-2xl tracking-tight">
              From a four-day game jam project to a viral Filipino horror game
            </h3>
            <p className="text-muted-foreground text-base leading-relaxed">
              Narinig Mo Ba began as a Game Jam Los Baños 2026 entry. A creator later
              confirmed in the official itch.io comments that the original jam build
              was made in four days. The release credits doppie, yuriellll,
              oreocapybara, Krarneas, csr_eio, and karinasaurus, while later developer
              communication uses the team name VC Studios.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              In September 2026, VC Studios published a devlog thanking players after
              Narinig Mo Ba spread across social media in the Philippines. The team also
              said the response made them more optimistic about continuing to make and
              improve games. That background matters because the project still carries
              some of the compact scope and rough edges you would expect from a very
              small game jam production, while also receiving post-jam attention and
              improvements.
            </p>
          </div>

          <div className="space-y-5">
            <h3 className="font-serif text-2xl tracking-tight">
              Browser, desktop, and mobile status
            </h3>
            <p className="text-muted-foreground text-base leading-relaxed">
              The fastest way to try Narinig Mo Ba is the browser build embedded at the
              top of this page. The official itch.io project also provides desktop
              downloads, so players who prefer a native build can use the official
              project page as the source of truth for Windows, macOS, and Linux
              availability. If you want the platform-specific details, use the{' '}
              <Link
                href="/narinig-mo-ba-download"
                className="text-foreground underline underline-offset-4"
              >
                Narinig Mo Ba download guide
              </Link>
              .
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              Mobile is a different story. VC Studios has publicly said that mobile
              support is being worked on after becoming one of the most common player
              requests. The developers have not published a firm release date or a
              confirmed App Store or Google Play launch in the sources checked for this
              guide. For the latest confirmed status and the difference between a
              mobile-friendly browser version and a native app, see the{' '}
              <Link
                href="/narinig-mo-ba-mobile"
                className="text-foreground underline underline-offset-4"
              >
                Narinig Mo Ba mobile page
              </Link>
              .
            </p>
          </div>

          <div className="space-y-5">
            <h3 className="font-serif text-2xl tracking-tight">
              What to read after you play
            </h3>
            <p className="text-muted-foreground text-base leading-relaxed">
              If you are playing for the first time, the best companion is the{' '}
              <Link
                href="/how-to-play-narinig-mo-ba"
                className="text-foreground underline underline-offset-4"
              >
                how to play Narinig Mo Ba guide
              </Link>
              , which focuses on controls, product handling, prices, money, and common
              points of confusion without immediately revealing the ending. If you are
              already stuck in a particular sequence, move to the{' '}
              <Link
                href="/narinig-mo-ba-walkthrough"
                className="text-foreground underline underline-offset-4"
              >
                Narinig Mo Ba walkthrough
              </Link>
              .
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              After finishing the game, the{' '}
              <Link
                href="/narinig-mo-ba-ending"
                className="text-foreground underline underline-offset-4"
              >
                Narinig Mo Ba ending explanation
              </Link>{' '}
              is designed to separate what the game actually establishes from fan
              interpretation. For a spoiler-light overview of the premise, themes,
              title, setting, and creators, use the{' '}
              <Link
                href="/narinig-mo-ba-story"
                className="text-foreground underline underline-offset-4"
              >
                Narinig Mo Ba story guide
              </Link>
              . This keeps the homepage focused on playing while still giving every
              major search intent a clear next page.
            </p>
          </div>

          <aside className="border-border bg-card/60 rounded-2xl border p-6">
            <h3 className="font-medium">Primary sources</h3>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              This guide prioritizes the creators&apos; own Narinig Mo Ba itch.io page,
              official developer comments, the September 2026 VC Studios devlog, the
              doppie creator profile, and the Game Jam Los Baños 2026 submissions page.
              Community comments are used only when they are clearly identified as
              player experience rather than developer-confirmed facts.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
