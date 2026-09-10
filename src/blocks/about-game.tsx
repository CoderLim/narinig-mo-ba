import { m } from '@/paraglide/messages.js';

export function AboutGame() {
  return (
    <section id="about" className="px-4 py-20 sm:py-28">
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="space-y-5">
          <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">
            {m['landing.about.title']()}
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            {m['landing.about.p1']()}
          </p>
          <p className="text-muted-foreground text-base leading-relaxed">
            {m['landing.about.p2']()}
          </p>
          <p className="text-muted-foreground text-base leading-relaxed">
            {m['landing.about.p3']()}
          </p>
        </div>
        <aside className="border-border bg-card/60 space-y-4 rounded-2xl border p-6">
          <h3 className="font-medium">{m['landing.about.facts_title']()}</h3>
          <dl className="space-y-3 text-sm">
            <div className="flex justify-between gap-4 border-b border-dashed pb-2">
              <dt className="text-muted-foreground">
                {m['landing.about.fact_genre']()}
              </dt>
              <dd className="text-right font-medium">
                {m['landing.about.fact_genre_value']()}
              </dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-dashed pb-2">
              <dt className="text-muted-foreground">
                {m['landing.about.fact_engine']()}
              </dt>
              <dd className="text-right font-medium">
                {m['landing.about.fact_engine_value']()}
              </dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-dashed pb-2">
              <dt className="text-muted-foreground">
                {m['landing.about.fact_jam']()}
              </dt>
              <dd className="text-right font-medium">
                {m['landing.about.fact_jam_value']()}
              </dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-dashed pb-2">
              <dt className="text-muted-foreground">
                {m['landing.about.fact_session']()}
              </dt>
              <dd className="text-right font-medium">
                {m['landing.about.fact_session_value']()}
              </dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-muted-foreground">
                {m['landing.about.fact_official']()}
              </dt>
              <dd className="text-right">
                <a
                  href="https://doppie.itch.io/narinig-mo-ba"
                  target="_blank"
                  rel="noopener noreferrer"
                  title={m['landing.about.fact_official_link']()}
                  className="text-primary underline-offset-4 hover:underline"
                >
                  {m['landing.about.fact_official_link']()}
                </a>
              </dd>
            </div>
          </dl>
          <p className="text-muted-foreground pt-2 text-xs leading-relaxed">
            {m['landing.about.credit']()}
          </p>
        </aside>
      </div>
    </section>
  );
}
