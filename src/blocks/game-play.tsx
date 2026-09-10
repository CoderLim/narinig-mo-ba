'use client';

import { m } from '@/paraglide/messages.js';
import { GameIframe } from '@/components/game-iframe';

/** Above-the-fold play embed for the landing page. */
export function GamePlay() {
  return (
    <section
      id="play"
      className="relative px-4 pt-6 pb-10 sm:pt-10 sm:pb-16"
      aria-labelledby="play-heading"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-5 max-w-2xl space-y-2">
          <p className="text-accent-foreground/80 text-xs tracking-[0.2em] uppercase">
            {m['landing.play.eyebrow']()}
          </p>
          <h1
            id="play-heading"
            className="font-serif text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl"
          >
            {m['landing.play.title']()}
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed sm:text-base">
            {m['landing.play.subtitle']()}
          </p>
        </div>
        <GameIframe title={m['landing.play.iframe_title']()} />
        <p className="text-muted-foreground mt-3 text-xs sm:text-sm">
          {m['landing.play.hint']()}
        </p>
      </div>
    </section>
  );
}
