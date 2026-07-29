import type { Metadata } from "next";
import { ThankYou } from "@/components/lp/ThankYou";

export const metadata: Metadata = {
  title: "Pedido recebido | JS AR Central",
  robots: { index: false, follow: false },
};

export default function ObrigadoManutencao() {
  return (
    <ThankYou
      body="Nossa equipe entra em contato em breve pelo WhatsApp ou telefone informado para confirmar os detalhes da sua manutenção."
      conversionEvent="generate_lead"
      conversionParams={{ service: "manutencao" }}
    />
  );
}
