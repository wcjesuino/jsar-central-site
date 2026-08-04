import type { Metadata } from "next";
import { LpHero } from "@/components/lp/LpHero";
import { Differentiators } from "@/components/lp/Differentiators";
import { Faq } from "@/components/lp/Faq";
import { LeadFormSection } from "@/components/lp/LeadFormSection";
import { Credentials } from "@/components/shared/Credentials";
import { Testimonials } from "@/components/shared/Testimonials";

export const metadata: Metadata = {
  title: "Instalação de Ar-Condicionado | JS AR Central",
  description:
    "Instalação de ar-condicionado central, split ou multi-split com técnica certificada pelo fabricante. Rio de Janeiro e Baixada Fluminense.",
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

function ShieldIcon() {
  return (
    <svg {...iconProps}>
      <path d="M12 21c4.5-1.8 8-5.5 8-11V6l-8-3-8 3v4c0 5.5 3.5 9.2 8 11z" />
      <path d="M9 12.2l2 2 4-4.2" />
    </svg>
  );
}
function LayersIcon() {
  return (
    <svg {...iconProps}>
      <path d="M12 3 3 8l9 5 9-5-9-5z" />
      <path d="M3 16l9 5 9-5M3 12l9 5 9-5" />
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
function AwardIcon() {
  return (
    <svg {...iconProps}>
      <circle cx="12" cy="8.5" r="5.5" />
      <path d="M9 13.2 7.5 21l4.5-2.5 4.5 2.5-1.5-7.8" />
    </svg>
  );
}

const differentiators = [
  {
    icon: <ShieldIcon />,
    title: "Credenciamento de fábrica",
    description:
      "Seguimos o protocolo exato de Daikin, LG, Carrier, Gree, Fujitsu, Midea e outras marcas. Instalação fora do padrão é a causa nº1 de perda de garantia.",
  },
  {
    icon: <LayersIcon />,
    title: "Qualquer porte de projeto",
    description:
      "Do split residencial ao sistema central de um condomínio inteiro — a mesma equipe cuida do dimensionamento ao acabamento.",
  },
  {
    icon: <ClockIcon />,
    title: "Atendimento 24 horas",
    description:
      "Emergência não avisa. Respondemos chamados urgentes a qualquer hora, com prioridade para Rio de Janeiro e Baixada Fluminense.",
  },
  {
    icon: <AwardIcon />,
    title: "Mais de 31 anos de experiência",
    description:
      "Mais de 31 anos instalando na mesma região já nos ensinaram: instalação bem feita evita 9 em cada 10 chamados de manutenção no primeiro ano.",
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

const stats = [
  { value: "+31 anos", label: "De atuação no Rio de Janeiro", color: "text-brand" },
  { value: "24h", label: "Atendimento emergencial", color: "text-cool" },
  { value: "100%", label: "Credenciado pelos fabricantes", color: "text-gold" },
] as const;

export default function InstalacaoArCondicionado() {
  return (
    <>
      <LpHero
        badgeLabel="Atendimento 24h disponível"
        headline={
          <>
            Instalação de
            <br />
            Ar-Condicionado
            <br />
            feita para durar
            <br />
            <span className="text-gray-400">e para valer a garantia.</span>
          </>
        }
        subheadline="Central, split ou multi-split: instalação com a técnica certificada pelo fabricante do seu equipamento. Mais de 31 anos atendendo o Rio de Janeiro e a Baixada Fluminense."
        primaryCtaLabel="Solicitar Orçamento"
        defaultService="Instalação"
        videoSrc="/video/lp_instalacao.mp4"
        posterSrc="/video/lp_instalacao_poster.jpg"
        stats={stats}
        floatingBadge={{
          title: "Instalação em andamento",
          subtitle: "Técnico credenciado em campo",
        }}
      />
      <Differentiators title="Por que instalar com a JS AR Central" items={differentiators} />
      <Credentials />
      <Testimonials testimonials={testimonials} trustCard={trustCard} />
      <LeadFormSection
        service="Instalação"
        thankYouPath="/instalacao-ar-condicionado/obrigado"
      />
      <Faq items={faqItems} />
    </>
  );
}
