"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackEvent } from "@/lib/analytics";

// Story 1.4, AC2: dispara page_view a cada troca de rota client-side do
// Next.js (o GTM só vê o carregamento inicial da página sozinho).
export function RouteChangeTracker() {
  const pathname = usePathname();

  useEffect(() => {
    trackEvent("page_view", { page_path: pathname });
  }, [pathname]);

  return null;
}
