import type { Metadata } from "next";
import { LpHero } from "@/components/lp/LpHero";
import { Differentiators } from "@/components/lp/Differentiators";
import { Faq } from "@/components/lp/Faq";
import { Testimonials } from "@/components/shared/Testimonials";

export const metadata: Metadata = {
  title: "Instalação de Ar-Condicionado | JS AR Central",
  description:
    "Instalação de ar-condicionado central, split ou multi-split com técnica certificada pelo fabricante. Rio de Janeiro e Baixada Fluminense.",
};

const CTA_MESSAGE = "Olá! Gostaria de solicitar um orçamento de instalação.";

function ShieldIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}
function LayersIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2 2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" strokeLinecap="round" />
    </svg>
  );
}
function AwardIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="8" r="6" />
      <path d="M8.5 13.5 7 22l5-3 5 3-1.5-8.5" />
    </svg>
  );
}

const differentiators = [
  {
    icon: <ShieldIcon />,
    title: "Credenciamento de fábrica",
    description:
      "Instalamos seguindo o protocolo de Daikin, LG, Carrier, Gree, Fujitsu, Midea e outros — instalação fora do padrão é a causa mais comum de perda de garantia.",
  },
  {
    icon: <LayersIcon />,
    title: "Qualquer porte de projeto",
    description:
      "De um split residencial a um sistema central completo para comércio ou condomínio, a mesma equipe cuida do dimensionamento à finalização.",
  },
  {
    icon: <ClockIcon />,
    title: "Atendimento 24 horas",
    description:
      "Emergência não escolhe hora. Respondemos chamados urgentes fora do horário comercial na Baixada Fluminense e Rio de Janeiro.",
  },
  {
    icon: <AwardIcon />,
    title: "Mais de 10 anos de experiência",
    description:
      "Uma década instalando na mesma região nos ensinou o que funciona: instalação bem feita evita 90% dos chamados de manutenção no primeiro ano.",
  },
];

// Depoimentos placeholder (docs/copy-lp-instalacao.md) — substituir pelos
// reais antes de publicar.
const testimonials = [
  {
    heading: '"Fiquei tranquilo quanto à garantia"',
    quote:
      "Instalaram o ar central do meu apartamento em Duque de Caxias e me mostraram o certificado de credenciamento Daikin antes de começar.",
    initial: "R",
    name: "Roberto A.",
    role: "Duque de Caxias — Instalação Central",
  },
  {
    heading: '"Terminaram no mesmo dia"',
    quote:
      "Pedi orçamento para 3 splits no meu escritório em Nova Iguaçu. Chegaram no horário combinado e terminaram no mesmo dia.",
    initial: "F",
    name: "Fernanda M.",
    role: "Nova Iguaçu — Instalação Multi-Split",
  },
];

const trustCard = {
  title: "Por que credenciamento importa",
  description:
    "A JS AR Central foi a única que explicou por que a marca do equipamento precisa de técnico credenciado — segundo relato de cliente da Zona Norte do Rio.",
  badgeLabel: "Credenciado",
};

const faqItems = [
  {
    question: "Quanto tempo leva uma instalação?",
    answer:
      "Um split residencial padrão costuma ser instalado em até 4 horas. Sistemas centrais ou multi-split dependem do projeto — passamos o prazo estimado já no orçamento.",
  },
  {
    question: "A instalação de vocês preserva a garantia de fábrica?",
    answer:
      "Sim. Somos credenciados pelos principais fabricantes do mercado, o que significa que seguimos exatamente o protocolo exigido por cada marca para manter a garantia válida.",
  },
  {
    question: "Vocês instalam qualquer marca ou modelo de ar-condicionado?",
    answer:
      "Instalamos split, multi-split e sistemas centrais de praticamente todas as marcas vendidas no Brasil. Se o seu equipamento for de uma marca específica, é só perguntar.",
  },
  {
    question: "Qual a área de atendimento?",
    answer:
      "Atendemos o Rio de Janeiro (capital) e toda a Baixada Fluminense, com sede em Duque de Caxias.",
  },
  {
    question: "Como funciona o orçamento?",
    answer:
      "Preenchendo o formulário ou chamando no WhatsApp, um técnico avalia o local e envia o valor antes de qualquer serviço ser iniciado. Sem taxa de visita na nossa área de cobertura.",
  },
  {
    question: "Vocês também fazem manutenção depois da instalação?",
    answer:
      "Sim — inclusive oferecemos planos de manutenção preventiva para quem acabou de instalar, a forma mais barata de evitar problemas nos primeiros anos de uso.",
  },
];

export default function InstalacaoArCondicionado() {
  return (
    <>
      <LpHero
        badgeLabel="Atendimento 24h disponível"
        headline={
          <>
            Instalação de ar-condicionado
            <br />
            <span className="text-gray-400">feita para durar</span> — e para
            valer a garantia.
          </>
        }
        subheadline="Central, split ou multi-split: instalamos com a técnica certificada pelo fabricante do seu equipamento. Mais de 10 anos atendendo o Rio de Janeiro e a Baixada Fluminense."
        primaryCtaLabel="Solicitar Orçamento de Instalação"
        ctaMessage={CTA_MESSAGE}
        backgroundImage="/home/card_bg_instalacao.jpg"
      />
      <Differentiators title="Por que instalar com a JS AR Central" items={differentiators} />
      <Testimonials testimonials={testimonials} trustCard={trustCard} />
      <Faq items={faqItems} />
    </>
  );
}
