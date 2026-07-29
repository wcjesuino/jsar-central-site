"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

// Dispara um evento de conversão uma única vez, ao montar (ex: thank-you
// pages). Separado do RouteChangeTracker porque esse é sobre page_view.
export function ConversionTracker({
  event,
  params,
}: {
  event: string;
  params?: Record<string, unknown>;
}) {
  useEffect(() => {
    trackEvent(event, params);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- disparar só uma vez ao montar
  }, []);

  return null;
}
