import type { Metadata } from "next";
import { GlassNav } from "@/components/shared/GlassNav";
import { LeadFormSection } from "@/components/lp/LeadFormSection";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contato | JS AR Central",
  description:
    "Fale com a JS AR Central pelo WhatsApp, telefone ou e-mail. Atendimento em toda a Baixada Fluminense e Rio de Janeiro.",
};

const iconProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function PhoneIcon() {
  return (
    <svg {...iconProps}>
      <path d="M4 5c0-.6.4-1 1-1h3l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v3c0 .6-.4 1-1 1C10.6 19 4 12.4 4 5z" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg {...iconProps}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg {...iconProps}>
      <path d="M12 21s7-6.3 7-11.5A7 7 0 0 0 5 9.5C5 14.7 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.3" />
    </svg>
  );
}

const channels = [
  {
    icon: <PhoneIcon />,
    label: "WhatsApp / Telefone",
    value: siteConfig.phoneDisplay,
    legend: "Atendimento comercial e suporte técnico",
  },
  {
    icon: <MailIcon />,
    label: "E-mail",
    value: siteConfig.email,
    legend: "Para orçamentos detalhados e parcerias",
  },
  {
    icon: <ClockIcon />,
    label: "Horário de atendimento",
    value: "Segunda a sexta, 8h às 18h",
    legend: "Emergências fora do horário: consulte disponibilidade via WhatsApp",
  },
  {
    icon: <PinIcon />,
    label: "Área de cobertura",
    value: "Rio de Janeiro e Baixada Fluminense",
    legend: "Atendemos residências, comércios e condomínios em toda a região",
  },
];

export default function Contato() {
  return (
    <>
      <div className="mx-auto w-full max-w-[1280px] p-3 sm:p-5">
        <section className="relative overflow-hidden rounded-hero bg-surface-dark px-8 py-10 sm:py-14">
          <GlassNav />
          <div className="relative z-10 mx-auto mt-12 max-w-2xl text-center">
            <div className="font-mono text-xs font-medium tracking-widest text-brand">
              FALE COM A GENTE
            </div>
            <h1 className="font-editorial mt-2 text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl">
              Atendimento rápido, direto
              <br />
              com quem instala e conserta.
            </h1>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/55 sm:text-base">
              Escolha o canal que for mais fácil pra você. Respondemos rápido no
              WhatsApp — é o canal mais usado pelos nossos clientes.
            </p>
          </div>
        </section>
      </div>

      <section className="bg-white px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <div className="font-mono text-xs font-medium tracking-widest text-brand">
              CANAIS DE ATENDIMENTO
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {channels.map((c) => (
              <div
                key={c.label}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  {c.icon}
                </div>
                <div className="text-xs font-semibold tracking-wide text-gray-400 uppercase">
                  {c.label}
                </div>
                <div className="font-editorial mt-1 text-base font-bold whitespace-nowrap text-gray-900">
                  {c.value}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{c.legend}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LeadFormSection
        service="Contato"
        thankYouPath="/contato/obrigado"
        title="Prefere que a gente te chame?"
        description="Deixa seu nome e WhatsApp que a nossa equipe entra em contato ainda hoje pra entender sua necessidade e passar um orçamento sem compromisso."
      />
    </>
  );
}
