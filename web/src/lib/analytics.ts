declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

// Envia um evento para o dataLayer do GTM. Não faz nada (nem lança erro) se
// o GTM não estiver instalado — analytics nunca pode quebrar o site (NFR7).
export function trackEvent(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined" || !window.dataLayer) return;
  window.dataLayer.push({ event, ...params });
}
