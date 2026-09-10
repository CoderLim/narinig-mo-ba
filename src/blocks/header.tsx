import { m } from '@/paraglide/messages.js';
import { SiteHeader } from '@/components/site-header';

export function Header() {
  const navLinks = [
    { href: '/#play', label: m['landing.nav.play']() },
    { href: '/#how-to-play', label: m['landing.nav.howto']() },
    { href: '/how-to-play-narinig-mo-ba', label: 'Guides' },
    { href: '/narinig-mo-ba-walkthrough', label: 'Walkthrough' },
    { href: '/narinig-mo-ba-story', label: 'Story' },
    { href: '/#faq', label: m['landing.nav.faq']() },
  ];

  return <SiteHeader navLinks={navLinks} />;
}
