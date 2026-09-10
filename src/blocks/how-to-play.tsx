import { Ear, MessagesSquare, MousePointerClick } from 'lucide-react';

import { m } from '@/paraglide/messages.js';

const STEPS = [
  {
    icon: MousePointerClick,
    titleKey: 'landing.howto.step1.title' as const,
    bodyKey: 'landing.howto.step1.body' as const,
  },
  {
    icon: MessagesSquare,
    titleKey: 'landing.howto.step2.title' as const,
    bodyKey: 'landing.howto.step2.body' as const,
  },
  {
    icon: Ear,
    titleKey: 'landing.howto.step3.title' as const,
    bodyKey: 'landing.howto.step3.body' as const,
  },
];

export function HowToPlay() {
  return (
    <section id="how-to-play" className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-14 max-w-2xl">
          <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">
            {m['landing.howto.title']()}
          </h2>
          <p className="text-muted-foreground mt-4 text-base leading-relaxed">
            {m['landing.howto.description']()}
          </p>
        </div>
        <ol className="grid gap-8 sm:grid-cols-3">
          {STEPS.map(({ icon: Icon, titleKey, bodyKey }, i) => (
            <li key={titleKey} className="space-y-3">
              <div className="bg-primary text-primary-foreground inline-flex size-10 items-center justify-center rounded-lg">
                <Icon className="size-5" strokeWidth={1.75} />
              </div>
              <p className="text-muted-foreground text-xs tracking-widest uppercase">
                {m['landing.howto.step_label']({ n: String(i + 1) })}
              </p>
              <h3 className="text-lg font-medium">
                {titleKey === 'landing.howto.step1.title'
                  ? m['landing.howto.step1.title']()
                  : titleKey === 'landing.howto.step2.title'
                    ? m['landing.howto.step2.title']()
                    : m['landing.howto.step3.title']()}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {bodyKey === 'landing.howto.step1.body'
                  ? m['landing.howto.step1.body']()
                  : bodyKey === 'landing.howto.step2.body'
                    ? m['landing.howto.step2.body']()
                    : m['landing.howto.step3.body']()}
              </p>
            </li>
          ))}
        </ol>
        <div className="border-border mt-12 rounded-xl border px-5 py-4">
          <h3 className="text-sm font-medium">
            {m['landing.howto.controls_title']()}
          </h3>
          <ul className="text-muted-foreground mt-3 grid gap-2 text-sm sm:grid-cols-2">
            <li>{m['landing.howto.control_left']()}</li>
            <li>{m['landing.howto.control_hold']()}</li>
            <li>{m['landing.howto.control_right']()}</li>
            <li>{m['landing.howto.control_dialogue']()}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
