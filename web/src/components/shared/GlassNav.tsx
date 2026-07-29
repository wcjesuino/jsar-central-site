import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { siteConfig, waLink } from "@/lib/site-config";

// Menu flutuante em vidro (glassmorphism) usado no hero de todas as
// páginas com hero escuro (Home, LPs) — mesmo padrão em todo o site.
export function GlassNav({ ctaMessage }: { ctaMessage: string }) {
  return (
    <div className="relative z-10 flex justify-center">
      <nav className="inline-flex items-center gap-4 rounded-pill border border-white/15 bg-white/10 p-1.5 pl-4 backdrop-blur-md sm:gap-5">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/brand/mark_symbol_white.png"
            alt="JS AR Central"
            width={60}
            height={22}
            style={{ height: 20, width: "auto" }}
          />
          <span className="hidden font-sans text-xs font-extrabold tracking-tight text-white sm:inline">
            AR CENTRAL
          </span>
        </Link>
        {siteConfig.navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="hidden text-[13px] font-medium text-white/60 transition-colors hover:text-white md:inline"
          >
            {link.label}
          </Link>
        ))}
        <Button
          href={waLink(ctaMessage)}
          variant="primary"
          size="sm"
          className="!bg-white !text-gray-900 hover:!bg-gray-100"
        >
          Pedir Orçamento
        </Button>
      </nav>
    </div>
  );
}
