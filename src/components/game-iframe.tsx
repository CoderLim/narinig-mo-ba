'use client';

const GAME_SRC = 'https://games.pokepath.site/narinig-mo-ba/index.html';

export function GameIframe({
  title = 'Narinig Mo Ba? — play free in browser',
  className,
}: {
  title?: string;
  className?: string;
}) {
  return (
    <div
      className={
        className ??
        'border-border bg-muted/40 relative aspect-video w-full overflow-hidden rounded-xl border shadow-lg'
      }
    >
      <iframe
        src={GAME_SRC}
        title={title}
        className="absolute inset-0 h-full w-full border-0"
        allow="autoplay; fullscreen; gamepad; clipboard-write"
        allowFullScreen
        loading="eager"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

export { GAME_SRC };
