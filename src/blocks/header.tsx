import { m } from '@/paraglide/messages.js';
import { SiteHeader } from '@/components/site-header';

export function Header() {
  const navLinks = [
    { href: '/#play', label: m['landing.nav.play']() },
    { href: '/#how-to-play', label: m['landing.nav.howto']() },
    { href: '/how-to-play-narinig-mo-ba', label: m['landing.nav.guides']() },
    {
      href: '/narinig-mo-ba-walkthrough',
      label: m['landing.nav.walkthrough'](),
    },
    { href: '/narinig-mo-ba-story', label: m['landing.nav.story']() },
    { href: '/#faq', label: m['landing.nav.faq']() },
  ];

  return <SiteHeader navLinks={navLinks} />;
}
