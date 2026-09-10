import type { Metadata } from "next";
import { LpHero } from "@/components/lp/LpHero";
import { Differentiators } from "@/components/lp/Differentiators";
import { Faq } from "@/components/lp/Faq";
import { LeadFormSection } from "@/components/lp/LeadFormSection";
import { Credentials } from "@/components/shared/Credentials";
import { JsonLd, faqPageJsonLd } from "@/components/shared/StructuredData";

export const metadata: Metadata = {
  title: "Conserto e Manutenção de Ar-Condicionado em Duque de Caxias | JS AR Central",
  description:
    "Assistência técnica de ar-condicionado credenciada de fábrica em Duque de Caxias e Baixada Fluminense: conserto, limpeza, recarga de gás e manutenção preventiva. Atendimento 24h, sem taxa de visita na nossa área.",
  alternates: { canonical: "/manutencao-ar-condicionado" },
};

const stats = [
  { value: "+31 anos", label: "De atuação no Rio de Janeiro", color: "text-brand" },
  { value: "24h", label: "Atendimento emergencial", color: "text-cool" },
  { value: "100%", label: "Credenciado pelos fabricantes", color: "text-gold" },
] as const;

const heroHighlights = [
  "Ar não gela",
  "Pinga água / vaza",
  "Faz barulho ou cheira mal",
  "Limpeza e higienização",
  "Recarga de gás",
  "Troca de peças",
  "Manutenção preventiva (PMOC)",
] as const;

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

function SnowflakeIcon() {
  return (
    <svg {...iconProps}>
      <path d="M12 2v20M4 6l16 12M20 6L4 18" />
    </svg>
  );
}
function DropIcon() {
  return (
    <svg {...iconProps}>
      <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z" />
    </svg>
  );
}
function SprayIcon() {
  return (
    <svg {...iconProps}>
      <rect x="8" y="8" width="8" height="13" rx="1.5" />
      <path d="M10 8V5h4v3M16 5h2M16 8h3M18 3v2" />
    </svg>
  );
}
function GaugeIcon() {
  return (
    <svg {...iconProps}>
      <path d="M12 14 8 8M4 18a8 8 0 1 1 16 0" />
    </svg>
  );
}
function CalendarIcon() {
  return (
    <svg {...iconProps}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg {...iconProps}>
      <path d="M12 21c4.5-1.8 8-5.5 8-11V6l-8-3-8 3v4c0 5.5 3.5 9.2 8 11z" />
      <path d="M9 12.2l2 2 4-4.2" />
    </svg>
  );
}

const services = [
  {
    icon: <SnowflakeIcon />,
    title: "Ar não está gelando",
    description:
      "Diagnóstico de baixa refrigeração: compressor, sensores, filtro sujo ou falta de gás. Identificamos a causa antes de dar o orçamento — sem troca desnecessária de peça.",
  },
  {
    icon: <DropIcon />,
    title: "Vazamento de água ou gelo",
    description:
      "Dreno entupido, inclinação errada da unidade ou serpentina congelando. Corrigimos o problema na raiz para não voltar no mês seguinte.",
  },
  {
    icon: <SprayIcon />,
    title: "Limpeza e higienização",
    description:
      "Limpeza técnica de filtros, serpentinas e turbina, com produto próprio para ar-condicionado. Resolve mau cheiro, alergia e perda de eficiência.",
  },
  {
    icon: <GaugeIcon />,
    title: "Recarga de gás e reparos",
    description:
      "Detecção e correção de vazamento antes da recarga, troca de capacitor, placa, sensores e motor. Peças compatíveis com a marca do seu equipamento.",
  },
  {
    icon: <CalendarIcon />,
    title: "Manutenção preventiva e PMOC",
    description:
      "Planos de manutenção periódica para residências, comércios e condomínios, com relatório técnico e emissão de PMOC quando exigido por lei.",
  },
  {
    icon: <ShieldIcon />,
    title: "Sem anular a garantia",
    description:
      "Somos credenciados por Daikin, LG, Carrier, Gree, Fujitsu, Midea e outros. O serviço é reconhecido oficialmente e não coloca a garantia de fábrica em risco.",
  },
];

const faqItems = [
  {
    question: "Meu ar-condicionado não está gelando. O que pode ser?",
    answer:
      "As causas mais comuns são filtro/serpentina sujos, falta de gás (que quase sempre indica um vazamento), capacitor ou compressor com defeito e sensor de temperatura queimado. O técnico faz o diagnóstico no local e informa o custo antes de qualquer reparo.",
  },
  {
    question: "Vocês fazem conserto de ar-condicionado no mesmo dia?",
    answer:
      "Para a maioria dos chamados de conserto na nossa área de atendimento (Duque de Caxias e Baixada Fluminense) conseguimos atender no mesmo dia ou no dia seguinte. Emergências têm atendimento 24h.",
  },
  {
    question: "Com que frequência devo fazer manutenção preventiva no ar-condicionado?",
    answer:
      "A cada 3 meses para uso residencial contínuo e mensal para uso comercial intenso. Ambientes com muita poeira ou pelos de animal podem precisar de intervalos menores.",
  },
  {
    question: "O que está incluso numa visita de manutenção preventiva?",
    answer:
      "Limpeza de filtros e serpentinas, checagem do nível de gás refrigerante, inspeção elétrica, teste de funcionamento e relatório técnico do que foi encontrado.",
  },
  {
    question: "Vocês atendem chamados de emergência fora do horário comercial?",
    answer:
      "Sim, temos atendimento 24h para emergências. Clientes com plano de manutenção têm prioridade no atendimento.",
  },
  {
    question: "Fazer manutenção com vocês realmente preserva a garantia de fábrica?",
    answer:
      "Sim — como somos credenciados diretamente pelos fabricantes, o serviço é reconhecido oficialmente e não gera risco à garantia, diferente de um técnico avulso não certificado.",
  },
  {
    question: "Quanto custa a manutenção de ar-condicionado?",
    answer:
      "A manutenção avulsa (sem plano) começa a partir de R$700, variando conforme o tipo e porte do equipamento. Preencha o formulário ou chame no WhatsApp para um orçamento exato, sem compromisso e sem taxa de visita na nossa área de cobertura.",
  },
];

export default function ManutencaoArCondicionado() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(faqItems)} />
      <LpHero
        badgeLabel="Atendimento 24h · sem taxa de visita na nossa área"
        headline={
          <>
            Conserto e manutenção
            <br />
            de ar-condicionado
            <br />
            <span className="text-gray-400">em Duque de Caxias e Baixada.</span>
          </>
        }
        subheadline="Ar não gela, pinga água, faz barulho ou está com mau cheiro? Assistência técnica credenciada de fábrica, com diagnóstico no local e atendimento 24h para emergências."
        primaryCtaLabel="Falar com um técnico agora"
        defaultService="Manutenção"
        videoSrc="/video/lp_manutencao.mp4"
        posterSrc="/video/lp_manutencao_poster.jpg"
        stats={stats}
        highlights={heroHighlights}
        floatingBadge={{
          title: "Manutenção em andamento",
          subtitle: "Técnico credenciado em campo",
        }}
      />

      <Differentiators
        eyebrow="SERVIÇOS"
        title="O que a gente resolve"
        items={services}
      />

      <section className="bg-white px-4 py-20 sm:px-6">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
          <div>
            <div className="font-mono text-xs font-medium tracking-widest text-brand">
              CREDENCIAMENTO
            </div>
            <h2 className="font-editorial mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              Técnico não credenciado
              <br />
              pode anular sua garantia.
            </h2>
          </div>
          <p className="text-base leading-relaxed text-gray-500">
            Os fabricantes exigem manutenção por técnico certificado para manter a garantia
            válida. Um reparo malfeito ou uma peça incompatível instalada por quem não é
            credenciado pode custar caro — literalmente, anulando anos de garantia de fábrica.
            A equipe da JS AR Central é certificada diretamente pelas marcas que atende, em Duque
            de Caxias, São João de Meriti, Nilópolis, Belford Roxo, Nova Iguaçu, Mesquita e Rio
            de Janeiro.
          </p>
        </div>
      </section>

      <Credentials />

      <LeadFormSection
        service="Manutenção"
        thankYouPath="/manutencao-ar-condicionado/obrigado"
      />

      <Faq items={faqItems} />
    </>
  );
}
