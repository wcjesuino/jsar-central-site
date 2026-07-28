import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { waLink } from "@/lib/site-config";

// Story 3.1, AC5: LP não exibe o menu institucional completo — só logo e
// CTA, para manter o visitante focado na conversão.
export function LpTopBar({ ctaMessage }: { ctaMessage: string }) {
  return (
    <div className="relative z-10 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/brand/mark_symbol_white.png"
          alt="JS AR Central"
          width={60}
          height={22}
          style={{ height: 22, width: "auto" }}
        />
        <span className="font-sans text-xs font-extrabold tracking-tight text-white">
          AR CENTRAL
        </span>
      </Link>
      <Button href={waLink(ctaMessage)} variant="primary" size="sm">
        Pedir Orçamento
      </Button>
    </div>
  );
}
