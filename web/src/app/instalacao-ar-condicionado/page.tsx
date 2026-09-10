import type { Metadata } from "next";
import { LpHero } from "@/components/lp/LpHero";
import { Differentiators } from "@/components/lp/Differentiators";
import { Faq } from "@/components/lp/Faq";
import { LeadFormSection } from "@/components/lp/LeadFormSection";
import { Credentials } from "@/components/shared/Credentials";
import { JsonLd, faqPageJsonLd } from "@/components/shared/StructuredData";

export const metadata: Metadata = {
  title: "Instalação de Ar-Condicionado em Duque de Caxias e Baixada | JS AR Central",
  description:
    "Instalação de ar-condicionado split, multi-split e central com técnica certificada pelo fabricante, em Duque de Caxias e Baixada Fluminense. Orçamento sem taxa de visita na nossa área.",
  alternates: { canonical: "/instalacao-ar-condicionado" },
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
      "Emergência não avisa. Respondemos chamados urgentes a qualquer hora, com prioridade para Duque de Caxias e Baixada Fluminense.",
  },
  {
    icon: <AwardIcon />,
    title: "Mais de 31 anos de experiência",
    description:
      "Mais de 31 anos instalando na mesma região já nos ensinaram: instalação bem feita evita 9 em cada 10 chamados de manutenção no primeiro ano.",
  },
];

const faqItems = [
  {
    question: "Quanto tempo leva uma instalação de ar-condicionado split?",
    answer:
      "Um split residencial padrão costuma ser instalado em até 4 horas. Sistemas centrais ou multi-split dependem do projeto — passamos o prazo estimado já no orçamento.",
  },
  {
    question: "Quanto custa instalar um ar-condicionado?",
    answer:
      "Depende do tipo de equipamento, da distância entre a evaporadora e a condensadora e da infraestrutura já existente. Um técnico avalia o local e envia o valor antes de qualquer serviço, sem taxa de visita na nossa área de cobertura.",
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
    question: "Qual a área de atendimento para instalação?",
    answer:
      "Duque de Caxias, São João de Meriti, Nilópolis, Belford Roxo, Nova Iguaçu, Mesquita e Rio de Janeiro, com sede em Duque de Caxias.",
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

const heroHighlights = [
  "Split e split inverter",
  "Multi-split",
  "Ar central",
  "Residencial e comercial",
  "Projeto e dimensionamento",
  "Sem taxa de visita na nossa área",
] as const;

export default function InstalacaoArCondicionado() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(faqItems)} />
      <LpHero
        badgeLabel="Atendimento 24h · sem taxa de visita na nossa área"
        headline={
          <>
            Instalação de
            <br />
            ar-condicionado
            <br />
            feita para durar
            <br />
            <span className="text-gray-400">e para valer a garantia.</span>
          </>
        }
        subheadline="Split, multi-split ou central: instalação com a técnica certificada pelo fabricante do seu equipamento, em Duque de Caxias e toda a Baixada Fluminense. Mais de 31 anos na mesma região."
        primaryCtaLabel="Pedir orçamento de instalação"
        defaultService="Instalação"
        videoSrc="/video/lp_instalacao.mp4"
        posterSrc="/video/lp_instalacao_poster.jpg"
        stats={stats}
        highlights={heroHighlights}
        floatingBadge={{
          title: "Instalação em andamento",
          subtitle: "Técnico credenciado em campo",
        }}
      />
      <Differentiators title="Por que instalar com a JS AR Central" items={differentiators} />
      <Credentials />
      <LeadFormSection
        service="Instalação"
        thankYouPath="/instalacao-ar-condicionado/obrigado"
      />
      <Faq items={faqItems} />
    </>
  );
}
