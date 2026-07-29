"use client";

import { useEffect, useState, type FormEvent } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { waLink } from "@/lib/site-config";
import { trackEvent } from "@/lib/analytics";
import type { WhatsAppService } from "./WhatsAppIntentContext";

const SERVICES: WhatsAppService[] = ["Instalação", "Manutenção"];

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

export function WhatsAppIntentModal({
  isOpen,
  defaultService,
  onClose,
}: {
  isOpen: boolean;
  defaultService?: WhatsAppService;
  onClose: () => void;
}) {
  const pathname = usePathname();
  // O componente é remontado (via `key`) a cada abertura, então esses
  // estados já nascem limpos sem precisar de um efeito de reset.
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [service, setService] = useState<WhatsAppService>(defaultService ?? "Instalação");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const trimmedName = name.trim();
    if (!trimmedName || whatsapp.replace(/\D/g, "").length < 10) {
      setError("Preencha nome e WhatsApp (com DDD) para continuar.");
      return;
    }

    setSubmitting(true);
    setError("");

    const message = `Olá! Meu nome é ${trimmedName}. Gostaria de solicitar um orçamento de ${service.toLowerCase()}.`;

    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 3000);
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: trimmedName,
          whatsapp,
          service,
          page: pathname,
        }),
        signal: controller.signal,
      }).catch(() => {});
      clearTimeout(timeout);
    } finally {
      trackEvent("whatsapp_click", { service });
      window.location.href = waLink(message);
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/60 px-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700"
        >
          <CloseIcon />
        </button>

        <h2 className="font-editorial text-xl font-bold text-gray-900 sm:text-2xl">
          Antes de ir pro WhatsApp...
        </h2>
        <p className="mt-1.5 text-sm text-gray-500">
          Deixa seus dados aqui — assim, se a conversa não continuar por lá, a
          gente consegue te chamar de volta.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="wa-name" className="text-xs font-semibold text-gray-700">
              Nome
            </label>
            <input
              id="wa-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Seu nome"
              className="rounded-md border border-gray-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="wa-phone" className="text-xs font-semibold text-gray-700">
              WhatsApp
            </label>
            <input
              id="wa-phone"
              type="tel"
              required
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              placeholder="(21) 90000-0000"
              className="rounded-md border border-gray-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <span className="text-xs font-semibold text-gray-700">Serviço</span>
            <div className="grid grid-cols-2 gap-2">
              {SERVICES.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setService(s)}
                  className={
                    service === s
                      ? "rounded-md border border-brand bg-brand/10 px-4 py-2.5 text-sm font-semibold text-brand transition-colors"
                      : "rounded-md border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-600 transition-colors hover:border-gray-300"
                  }
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {error && <p className="text-sm font-medium text-red-500">{error}</p>}

          <button
            type="submit"
            disabled={submitting}
            className="mt-1 inline-flex items-center justify-center rounded-pill bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-hover disabled:opacity-60"
          >
            {submitting ? "Abrindo WhatsApp..." : "Continuar para o WhatsApp"}
          </button>

          <p className="text-xs leading-relaxed text-gray-400">
            Ao continuar, você concorda com o uso dos seus dados conforme nossa{" "}
            <Link href="/politica-de-privacidade" className="underline hover:text-gray-600">
              Política de Privacidade
            </Link>
            , só pra retornar seu contato.
          </p>
        </form>
      </div>
    </div>
  );
}
