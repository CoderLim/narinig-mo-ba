import { m } from '@/paraglide/messages.js';
import { SiteFooter, type FooterColumn } from '@/components/site-footer';

export function Footer() {
  const columns: FooterColumn[] = [
    {
      title: m['landing.footer.product'](),
      links: [
        { label: m['landing.nav.play'](), href: '/#play' },
        { label: m['landing.nav.howto'](), href: '/#how-to-play' },
      ],
    },
    {
      title: 'Guides',
      links: [
        { label: 'How to Play', href: '/how-to-play-narinig-mo-ba' },
        { label: 'Walkthrough', href: '/narinig-mo-ba-walkthrough' },
        { label: 'Ending Explained', href: '/narinig-mo-ba-ending' },
        { label: 'Story & Themes', href: '/narinig-mo-ba-story' },
        { label: 'Mobile Status', href: '/narinig-mo-ba-mobile' },
        { label: 'Download Guide', href: '/narinig-mo-ba-download' },
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
