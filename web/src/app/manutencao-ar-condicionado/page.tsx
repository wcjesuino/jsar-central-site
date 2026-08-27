import type { Metadata } from "next";
import { LpHero } from "@/components/lp/LpHero";
import { Faq } from "@/components/lp/Faq";
import { LeadFormSection } from "@/components/lp/LeadFormSection";
import { Credentials } from "@/components/shared/Credentials";
import { Testimonials } from "@/components/shared/Testimonials";

export const metadata: Metadata = {
  title: "Manutenção de Ar-Condicionado | JS AR Central",
  description:
    "Manutenção preventiva e corretiva de ar-condicionado por técnicos credenciados pelos principais fabricantes. Rio de Janeiro e Baixada Fluminense.",
};

const stats = [
  { value: "+31 anos", label: "De atuação no Rio de Janeiro", color: "text-brand" },
  { value: "24h", label: "Atendimento emergencial", color: "text-cool" },
  { value: "100%", label: "Credenciado pelos fabricantes", color: "text-gold" },
] as const;

// Depoimentos placeholder (docs/copy-lp-manutencao.md) — substituir pelos
// reais antes de publicar.
const testimonials = [
  {
    heading: '"A garantia continuava valendo"',
    quote:
      "Fizeram a manutenção do meu ar central e me mostraram o certificado de credenciamento Daikin antes de começar. Isso me deu segurança.",
    initial: "R",
    name: "Roberto A.",
    role: "Duque de Caxias — Manutenção Preventiva",
  },
  {
    heading: '"Atenderam no mesmo dia"',
    quote:
      "Ar quebrou numa sexta à noite, e o time atendeu no mesmo dia. Rápido e honesto sobre o que realmente precisava ser trocado.",
    initial: "M",
    name: "Mariana F.",
    role: "Rio de Janeiro — Manutenção Corretiva",
  },
];

const faqItems = [
  {
    question: "Com que frequência devo fazer manutenção preventiva no ar-condicionado?",
    answer:
      "Recomendamos a cada 3 meses para uso residencial contínuo e mensal para uso comercial intenso. Ambientes com muita poeira ou pelos de animal podem precisar de intervalos menores.",
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
    question: "Qual a diferença entre manutenção preventiva e corretiva?",
    answer:
      "A preventiva é feita em intervalos regulares para evitar problemas (e é o que preserva a garantia). A corretiva é o reparo depois que algo já quebrou — mais cara e, se feita por quem não é credenciado, pode anular a garantia restante do equipamento.",
  },
  {
    question: "Fazer manutenção com vocês realmente preserva a garantia de fábrica?",
    answer:
      "Sim — como somos credenciados diretamente pelos fabricantes, o serviço é reconhecido oficialmente e não gera risco à garantia, diferente de um técnico avulso não certificado.",
  },
  {
    question: "Quanto custa a manutenção de ar-condicionado?",
    answer:
      "A manutenção avulsa (sem plano) começa a partir de R$700, variando conforme o tipo e porte do equipamento. Preencha o formulário ou chame no WhatsApp para um orçamento exato, sem compromisso.",
  },
];

export default function ManutencaoArCondicionado() {
  return (
    <>
      <LpHero
        badgeLabel="Atendimento 24h disponível"
        headline={
          <>
            Manutenção que
            <br />
            preserva sua garantia.
            <br />
            <span className="text-gray-400">Não arrisque.</span>
          </>
        }
        subheadline="Técnico não credenciado pode anular a garantia de fábrica do seu equipamento. Somos credenciados por Daikin, LG, Carrier, Gree, Fujitsu, Midea e outros fabricantes — manutenção correta, garantia intacta."
        primaryCtaLabel="Solicitar Orçamento"
        defaultService="Manutenção"
        videoSrc="/video/lp_manutencao.mp4"
        posterSrc="/video/lp_manutencao_poster.jpg"
        stats={stats}
        floatingBadge={{
          title: "Manutenção em andamento",
          subtitle: "Técnico credenciado em campo",
        }}
      />

      <section className="bg-white px-4 py-20 sm:px-6">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
          <div>
            <div className="font-mono text-xs font-medium tracking-widest text-brand">
              CREDENCIAMENTO
            </div>
            <h2 className="font-editorial mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              Credenciamento não
              <br />é só um selo.
            </h2>
          </div>
          <p className="text-base leading-relaxed text-gray-500">
            Fabricantes exigem manutenção por técnico certificado para manter a garantia válida.
            Um reparo malfeito ou peça incompatível instalada por quem não é credenciado pode
            custar caro — literalmente, anulando anos de garantia de fábrica. Nossa equipe é
            certificada diretamente pelos fabricantes que atendemos.
          </p>
        </div>
      </section>

      <Credentials />
      <Testimonials testimonials={testimonials} />

      <LeadFormSection
        service="Manutenção"
        thankYouPath="/manutencao-ar-condicionado/obrigado"
      />

      <Faq items={faqItems} />
    </>
  );
}
