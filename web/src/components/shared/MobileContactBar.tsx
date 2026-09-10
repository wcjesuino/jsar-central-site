"use client";

import { usePathname } from "next/navigation";
import { siteConfig, waLink } from "@/lib/site-config";
import { trackEvent } from "@/lib/analytics";

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 5c0-.6.4-1 1-1h3l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v3c0 .6-.4 1-1 1C10.6 19 4 12.4 4 5z" />
    </svg>
  );
}
function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.5 1.34 5.02L2 22l5.11-1.34a9.96 9.96 0 0 0 4.93 1.3h.01c5.52 0 10-4.48 10-10s-4.48-9.96-10.01-9.96zm5.87 14.24c-.25.7-1.44 1.34-1.99 1.42-.51.08-1.15.11-1.85-.12-.43-.13-.98-.31-1.68-.61-2.96-1.28-4.89-4.26-5.04-4.46-.15-.2-1.21-1.6-1.21-3.06 0-1.45.76-2.17 1.03-2.46.27-.3.6-.37.79-.37.2 0 .4 0 .57.01.18.01.43-.07.67.51.25.6.85 2.07.92 2.22.07.15.12.32.02.52-.1.2-.15.32-.3.49-.15.17-.31.38-.45.51-.15.15-.3.31-.13.6.17.3.76 1.25 1.63 2.03 1.12 1 2.06 1.31 2.36 1.46.3.15.47.13.65-.08.17-.2.74-.86.94-1.16.2-.3.4-.25.67-.15.27.1 1.73.82 2.03.97.3.15.5.22.57.35.08.13.08.72-.17 1.42z" />
    </svg>
  );
}

// Barra de contato fixa no rodapé, só no mobile. Links diretos (tel: e wa.me),
// funcionam sem JavaScript — caminho de contato de baixa fricção que o Google
// avalia na experiência pós-clique.
export function MobileContactBar() {
  const pathname = usePathname();
  const waMessage = pathname.startsWith("/manutencao-ar-condicionado")
    ? "Olá! Preciso de manutenção/conserto de ar-condicionado."
    : pathname.startsWith("/instalacao-ar-condicionado")
      ? "Olá! Quero um orçamento de instalação de ar-condicionado."
      : "Olá! Quero falar com a JS AR Central.";

  return (
    <>
      <div className="h-[60px] sm:hidden" aria-hidden />
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-white/10 bg-surface-dark sm:hidden">
        <a
          href={siteConfig.phoneHref}
          onClick={() => trackEvent("phone_click")}
          className="flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-white"
        >
          <PhoneIcon />
          Ligar agora
        </a>
        <a
          href={waLink(waMessage)}
          onClick={() => trackEvent("whatsapp_click", { service: "MobileBar" })}
          className="flex items-center justify-center gap-2 bg-[#25D366] py-3.5 text-sm font-semibold text-white"
        >
          <WhatsAppIcon />
          WhatsApp
        </a>
      </div>
    </>
  );
}
