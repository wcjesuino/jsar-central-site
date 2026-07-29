import type { Metadata } from "next";
import { ThankYou } from "@/components/lp/ThankYou";

export const metadata: Metadata = {
  title: "Pedido recebido | JS AR Central",
  robots: { index: false, follow: false },
};

export default function ObrigadoInstalacao() {
  return (
    <ThankYou
      body="Um técnico da JS AR Central vai entrar em contato pelo WhatsApp ou telefone que você informou, normalmente em até algumas horas dentro do nosso horário de atendimento."
      conversionEvent="generate_lead"
      conversionParams={{ service: "instalacao" }}
    />
  );
}
