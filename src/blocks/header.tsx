import { m } from '@/paraglide/messages.js';
import { SiteHeader } from '@/components/site-header';

export function Header() {
  const navLinks = [
    { href: '/#play', label: m['landing.nav.play']() },
    { href: '/#how-to-play', label: m['landing.nav.howto']() },
    { href: '/#about', label: m['landing.nav.about']() },
    { href: '/#faq', label: m['landing.nav.faq']() },
    { href: '/play', label: m['landing.nav.fullscreen']() },
  ];

  return <SiteHeader navLinks={navLinks} />;
}
