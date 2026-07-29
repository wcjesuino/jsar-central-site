"use client";

import { useState, type FormEvent } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";

type Status = "idle" | "submitting" | "success" | "error";

export function LeadForm({ service }: { service: string }) {
  const pathname = usePathname();
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const whatsapp = String(data.get("whatsapp") ?? "").trim();
    const neighborhood = String(data.get("neighborhood") ?? "").trim();

    if (!name || whatsapp.replace(/\D/g, "").length < 10 || !neighborhood) {
      setStatus("error");
      setErrorMessage(
        "Preencha nome, WhatsApp (com DDD) e bairro/cidade para continuar.",
      );
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, whatsapp, neighborhood, service, page: pathname }),
      });
      const json = await res.json();

      if (!res.ok || !json.ok) {
        setStatus("error");
        setErrorMessage(
          json.error ?? "Não conseguimos enviar seu pedido agora. Tente novamente ou chame no WhatsApp.",
        );
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage(
        "Não conseguimos enviar seu pedido agora. Tente novamente ou chame no WhatsApp.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-6 text-center">
        <p className="font-editorial text-lg font-semibold text-gray-900">
          Recebemos seu pedido!
        </p>
        <p className="mt-1 text-sm text-gray-600">
          Um técnico da JS AR Central vai entrar em contato pelo WhatsApp em breve.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-xs font-semibold text-gray-700">
            Nome
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Seu nome"
            className="rounded-md border border-gray-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="whatsapp" className="text-xs font-semibold text-gray-700">
            WhatsApp
          </label>
          <input
            id="whatsapp"
            name="whatsapp"
            type="tel"
            required
            placeholder="(21) 90000-0000"
            className="rounded-md border border-gray-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="neighborhood" className="text-xs font-semibold text-gray-700">
          Bairro / Cidade
        </label>
        <input
          id="neighborhood"
          name="neighborhood"
          type="text"
          required
          placeholder="Ex: Duque de Caxias"
          className="rounded-md border border-gray-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand"
        />
        <span className="text-xs text-gray-400">
          Usado para confirmar a área de atendimento.
        </span>
      </div>

      <div className="text-xs text-gray-400">
        Serviço: <span className="font-semibold text-gray-600">{service}</span>
      </div>

      {status === "error" && (
        <p className="text-sm font-medium text-red-500">{errorMessage}</p>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={status === "submitting"}
        className="w-fit disabled:opacity-60"
      >
        {status === "submitting" ? "Enviando..." : "Solicitar Orçamento"}
      </Button>
    </form>
  );
}
