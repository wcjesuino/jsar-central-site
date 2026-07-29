import { NextResponse } from "next/server";

type LeadPayload = {
  name: string;
  whatsapp: string;
  neighborhood: string;
  service: string;
  page: string;
};

function isValidPayload(body: unknown): body is LeadPayload {
  if (!body || typeof body !== "object") return false;
  const b = body as Record<string, unknown>;
  return (
    typeof b.name === "string" &&
    b.name.trim().length > 0 &&
    typeof b.whatsapp === "string" &&
    b.whatsapp.replace(/\D/g, "").length >= 10 &&
    typeof b.neighborhood === "string" &&
    b.neighborhood.trim().length > 0 &&
    typeof b.service === "string" &&
    typeof b.page === "string"
  );
}

// Story 3.2, AC3: mecanismo definitivo (e-mail ou webhook) ainda a definir
// com o cliente. Por enquanto, encaminha para LEAD_FORM_WEBHOOK_URL se
// configurado; sempre loga no servidor para não perder nenhum lead.
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "JSON inválido." }, { status: 400 });
  }

  if (!isValidPayload(body)) {
    return NextResponse.json(
      { ok: false, error: "Preencha nome, WhatsApp e bairro/cidade corretamente." },
      { status: 400 },
    );
  }

  console.log("[lead]", JSON.stringify(body));

  const webhookUrl = process.env.LEAD_FORM_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) {
        console.error("[lead] webhook respondeu status", res.status);
        return NextResponse.json(
          { ok: false, error: "Não conseguimos enviar seu pedido agora. Tente novamente ou chame no WhatsApp." },
          { status: 502 },
        );
      }
    } catch (err) {
      console.error("[lead] falha ao chamar webhook", err);
      return NextResponse.json(
        { ok: false, error: "Não conseguimos enviar seu pedido agora. Tente novamente ou chame no WhatsApp." },
        { status: 502 },
      );
    }
  }

  return NextResponse.json({ ok: true });
}
