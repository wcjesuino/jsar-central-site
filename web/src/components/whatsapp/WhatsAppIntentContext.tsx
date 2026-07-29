"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { WhatsAppIntentModal } from "./WhatsAppIntentModal";

export type WhatsAppService = "Instalação" | "Manutenção";

type OpenOptions = {
  defaultService?: WhatsAppService;
};

type WhatsAppIntentContextValue = {
  open: (options?: OpenOptions) => void;
};

const WhatsAppIntentContext = createContext<WhatsAppIntentContextValue | null>(null);

export function useWhatsAppIntent() {
  const ctx = useContext(WhatsAppIntentContext);
  if (!ctx) {
    throw new Error("useWhatsAppIntent precisa estar dentro de WhatsAppIntentProvider");
  }
  return ctx;
}

export function WhatsAppIntentProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [defaultService, setDefaultService] = useState<WhatsAppService | undefined>(undefined);
  // Incrementado a cada open() — usado como key pra remontar o modal com
  // estado limpo, sem precisar resetar via useEffect.
  const [openId, setOpenId] = useState(0);

  const open = useCallback((options?: OpenOptions) => {
    setDefaultService(options?.defaultService);
    setOpenId((id) => id + 1);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => setIsOpen(false), []);

  const value = useMemo(() => ({ open }), [open]);

  return (
    <WhatsAppIntentContext.Provider value={value}>
      {children}
      <WhatsAppIntentModal
        key={openId}
        isOpen={isOpen}
        defaultService={defaultService}
        onClose={close}
      />
    </WhatsAppIntentContext.Provider>
  );
}
