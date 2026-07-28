import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { waLink } from "@/lib/site-config";

// Story 3.1, AC5: LP não exibe o menu institucional completo — só logo e
// CTA, para manter o visitante focado na conversão. Mesmo tratamento visual
// (pill em vidro) do menu da Home, só que sem os links do meio.
export function LpTopBar({ ctaMessage }: { ctaMessage: string }) {
  return (
    <div className="relative z-10 flex justify-center">
      <nav className="inline-flex items-center gap-4 rounded-pill border border-white/15 bg-white/10 py-1.5 pl-4 pr-1.5 backdrop-blur-md">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/brand/mark_symbol_white.png"
            alt="JS AR Central"
            width={60}
            height={22}
            style={{ height: 20, width: "auto" }}
          />
          <span className="font-sans text-xs font-extrabold tracking-tight text-white">
            AR CENTRAL
          </span>
        </Link>
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
