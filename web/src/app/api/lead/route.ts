import { NextResponse } from "next/server";

type LeadPayload = {
  name: string;
  whatsapp: string;
  neighborhood?: string;
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
    (b.neighborhood === undefined || typeof b.neighborhood === "string") &&
    typeof b.service === "string" &&
    typeof b.page === "string"
  );
}

// Story 3.2, AC3: leads são encaminhados para o CRM do Ads Studio (funil do
// cliente JS AR Central, fase "novo"), que dispara a notificação por e-mail.
// Sempre loga no servidor para não perder nenhum lead mesmo se o webhook falhar.
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "JSON inválido." }, { status: 400 });
  }

  if (!isValidPayload(body)) {
    return NextResponse.json(
      { ok: false, error: "Preencha nome e WhatsApp corretamente." },
      { status: 400 },
    );
  }

  console.log("[lead]", JSON.stringify(body));

  const webhookUrl = process.env.ADS_STUDIO_LEADS_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: body.name,
          phone: body.whatsapp,
          source: "site",
          product_service: body.service,
          notes: body.neighborhood
            ? `Bairro/Cidade: ${body.neighborhood} — Página: ${body.page}`
            : `Página: ${body.page}`,
        }),
      });
      if (!res.ok) {
        console.error("[lead] webhook Ads Studio respondeu status", res.status);
        return NextResponse.json(
          { ok: false, error: "Não conseguimos enviar seu pedido agora. Tente novamente ou chame no WhatsApp." },
          { status: 502 },
        );
      }
    } catch (err) {
      console.error("[lead] falha ao chamar webhook Ads Studio", err);
      return NextResponse.json(
        { ok: false, error: "Não conseguimos enviar seu pedido agora. Tente novamente ou chame no WhatsApp." },
        { status: 502 },
      );
    }
  }

  return NextResponse.json({ ok: true });
}
