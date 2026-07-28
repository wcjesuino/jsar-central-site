import { Hero } from "@/components/home/Hero";
import { ManufacturerTicker } from "@/components/home/ManufacturerTicker";
import { Services } from "@/components/home/Services";
import { Testimonials } from "@/components/shared/Testimonials";

// Depoimentos abaixo são placeholders (Story 2.4, AC1) — substituir por
// depoimentos reais fornecidos pelo cliente assim que disponíveis.
const testimonials = [
  {
    heading: '"Garantia preservada, como prometido"',
    quote:
      "Instalaram meu ar central e me explicaram todo o processo de credenciamento. Fiquei tranquilo quanto à garantia de fábrica.",
    initial: "R",
    name: "Roberto A.",
    role: "Duque de Caxias · Instalação Central",
  },
  {
    heading: '"Atendimento rápido, mesmo à noite"',
    quote:
      "Ar quebrou numa sexta à noite, e o time da JS AR Central atendeu no mesmo dia. Manutenção rápida e honesta.",
    initial: "M",
    name: "Mariana F.",
    role: "Rio de Janeiro · Manutenção Corretiva",
  },
];

const trustCard = {
  title: "Credenciamento de fábrica",
  description:
    "Equipe certificada por Daikin, LG, Carrier, Gree, Fujitsu e outros fabricantes — a manutenção correta que não invalida a garantia do seu equipamento.",
  badgeLabel: "Credenciado",
};

export default function Home() {
  return (
    <>
      <div className="mx-auto max-w-[1280px] p-3 sm:p-5">
        <Hero />
        <ManufacturerTicker />
      </div>
      <Services />
      <Testimonials testimonials={testimonials} trustCard={trustCard} />
    </>
  );
}
