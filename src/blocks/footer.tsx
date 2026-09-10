import { m } from '@/paraglide/messages.js';
import { SiteFooter, type FooterColumn } from '@/components/site-footer';

export function Footer() {
  const columns: FooterColumn[] = [
    {
      title: m['landing.footer.product'](),
      links: [
        { label: m['landing.nav.play'](), href: '/#play' },
        { label: m['landing.nav.fullscreen'](), href: '/play' },
        { label: m['landing.nav.howto'](), href: '/#how-to-play' },
      ],
    },
    {
      title: m['landing.footer.resources'](),
      links: [
        {
          label: m['landing.footer.official'](),
          href: 'https://doppie.itch.io/narinig-mo-ba',
          external: true,
        },
        {
          label: m['landing.footer.jam'](),
          href: 'https://itch.io/jam/gamejamlosbanos2026',
          external: true,
        },
      ],
    },
    {
      title: m['landing.footer.legal'](),
      links: [
        { label: m['landing.footer.privacy'](), href: '/privacy-policy' },
        { label: m['landing.footer.terms'](), href: '/terms-of-service' },
      ],
    },
  ];

  return (
    <SiteFooter tagline={m['landing.footer.tagline']()} columns={columns} />
  );
}
