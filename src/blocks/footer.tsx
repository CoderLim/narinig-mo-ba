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
      title: m['landing.footer.guides'](),
      links: [
        {
          label: m['landing.footer.howto'](),
          href: '/how-to-play-narinig-mo-ba',
        },
        {
          label: m['landing.footer.walkthrough'](),
          href: '/narinig-mo-ba-walkthrough',
        },
        {
          label: m['landing.footer.ending'](),
          href: '/narinig-mo-ba-ending',
        },
        {
          label: m['landing.footer.story'](),
          href: '/narinig-mo-ba-story',
        },
        {
          label: m['landing.footer.mobile'](),
          href: '/narinig-mo-ba-mobile',
        },
        {
          label: m['landing.footer.download'](),
          href: '/narinig-mo-ba-download',
        },
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
