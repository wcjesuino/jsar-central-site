import Image from "next/image";
import Link from "next/link";
import { ConversionTracker } from "@/components/analytics/ConversionTracker";
import { siteConfig } from "@/lib/site-config";
import { WhatsAppButton } from "@/components/whatsapp/WhatsAppButton";
import type { WhatsAppService } from "@/components/whatsapp/WhatsAppIntentContext";

function serviceFromParams(conversionParams?: Record<string, unknown>): WhatsAppService | undefined {
  const raw = conversionParams?.service;
  if (raw === "instalacao") return "Instalação";
  if (raw === "manutencao") return "Manutenção";
  return undefined;
}

export function ThankYou({
  title = "Recebemos seu pedido de orçamento!",
  body,
  conversionEvent,
  conversionParams,
}: {
  title?: string;
  body: string;
  conversionEvent: string;
  conversionParams?: Record<string, unknown>;
}) {
  return (
    <section className="flex flex-1 flex-col items-center justify-center bg-surface-dark px-6 py-24 text-center">
      <ConversionTracker event={conversionEvent} params={conversionParams} />

      <Link href="/" className="mb-8">
        <Image
          src="/brand/mark_symbol_white.png"
          alt="JS AR Central"
          width={60}
          height={22}
          style={{ height: 32, width: "auto" }}
        />
      </Link>

      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-green-500/15 text-green-400">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </div>

      <h1 className="font-editorial max-w-lg text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-white/55 sm:text-base">
        {body}
      </p>

      <WhatsAppButton
        defaultService={serviceFromParams(conversionParams)}
        variant="primary"
        size="lg"
        className="mt-8"
      >
        Falar no WhatsApp agora
      </WhatsAppButton>

      <Link
        href="/"
        className="mt-6 text-sm text-white/40 transition-colors hover:text-white"
      >
        Voltar para o site
      </Link>

      <p className="mt-10 text-xs text-white/25">{siteConfig.phoneDisplay}</p>
    </section>
  );
}
