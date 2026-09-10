'use client';

import { m } from '@/paraglide/messages.js';
import { getLocale } from '@/paraglide/runtime.js';
import { GameIframe } from '@/components/game-iframe';

const DISCLAIMER_COPY = {
  en: {
    title: 'Unofficial fan site',
    body: 'This is an independent fan-made guide and play site. It is not affiliated with or endorsed by VC Studios or the creators of Narinig Mo Ba?. The game and related assets belong to their respective creators.',
    link: 'Official itch.io page',
  },
  zh: {
    title: '非官方网站',
    body: '本站是独立制作的玩家指南与在线游玩站点，与 VC Studios 或 Narinig Mo Ba? 的创作者不存在隶属、合作或官方背书关系。游戏及相关素材的权利归原作者所有。',
    link: '前往官方 itch.io 页面',
  },
  tl: {
    title: 'Hindi opisyal na fan site',
    body: 'Independent fan-made guide at play site ito. Hindi ito kaakibat o ineendorso ng VC Studios o ng mga creator ng Narinig Mo Ba?. Pag-aari ng kani-kanilang creator ang laro at mga kaugnay na asset.',
    link: 'Official itch.io page',
  },
} as const;

/** Above-the-fold play embed for the landing page. */
export function GamePlay() {
  const locale = getLocale();
  const disclaimer = DISCLAIMER_COPY[locale as keyof typeof DISCLAIMER_COPY] ?? DISCLAIMER_COPY.en;

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

        <aside
          className="border-border bg-muted/30 mt-5 rounded-xl border px-4 py-3 text-sm"
          aria-label={disclaimer.title}
        >
          <p className="font-medium">{disclaimer.title}</p>
          <p className="text-muted-foreground mt-1 leading-relaxed">
            {disclaimer.body}{' '}
            <a
              href="https://doppie.itch.io/narinig-mo-ba"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline underline-offset-4"
            >
              {disclaimer.link}
            </a>
            .
          </p>
        </aside>
      </div>
    </section>
  );
}
