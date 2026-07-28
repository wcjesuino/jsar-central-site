import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { siteConfig } from "@/lib/site-config";

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H16.7V3.6c-.28-.04-1.24-.12-2.36-.12-2.33 0-3.94 1.42-3.94 4.03v2.38H8v3.1h2.4V21h3.1z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-surface-dark px-4 py-12 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row">
          <div className="flex flex-col gap-4">
            <Logo variant="dark" size={26} />
            <div className="flex flex-col gap-1 text-sm text-white/50">
              <a href={siteConfig.whatsappHref} className="transition-colors hover:text-white">
                {siteConfig.phoneDisplay}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-white">
                {siteConfig.email}
              </a>
            </div>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/50">
            {siteConfig.navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-white">
                {link.label}
              </Link>
            ))}
            <Link href="/politica-de-privacidade" className="transition-colors hover:text-white">
              Política de Privacidade
            </Link>
          </nav>

          <div className="flex gap-2.5">
            <a
              href={siteConfig.instagramHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/40 transition-colors hover:border-brand hover:bg-brand/10 hover:text-brand"
            >
              <InstagramIcon />
            </a>
            <a
              href={siteConfig.facebookHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/40 transition-colors hover:border-brand hover:bg-brand/10 hover:text-brand"
            >
              <FacebookIcon />
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-xs text-white/30">
          © {new Date().getFullYear()} JS AR Central. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
