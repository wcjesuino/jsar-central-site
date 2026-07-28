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

function ShieldIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Testimonials() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <div className="font-mono text-xs font-medium tracking-widest text-brand">
            DEPOIMENTOS
          </div>
          <h2 className="font-editorial mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Quem já contratou, recomenda
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex min-h-[260px] flex-col justify-between rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div>
                <h3 className="font-editorial mb-3 text-lg font-bold text-gray-900">
                  {t.heading}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500">{t.quote}</p>
              </div>
              <div className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 font-editorial font-bold text-gray-500">
                  {t.initial}
                </span>
                <div>
                  <div className="text-sm font-semibold text-gray-900">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.role}</div>
                </div>
              </div>
            </div>
          ))}

          <div className="flex min-h-[260px] flex-col justify-between rounded-2xl bg-surface-dark p-8">
            <div>
              <h3 className="font-editorial mb-3 text-lg font-bold text-white">
                Credenciamento de fábrica
              </h3>
              <p className="text-sm leading-relaxed text-white/50">
                Equipe certificada por Daikin, LG, Carrier, Gree, Fujitsu e
                outros fabricantes — a manutenção correta que não invalida a
                garantia do seu equipamento.
              </p>
            </div>
            <div className="mt-6 border-t border-white/10 pt-5">
              <span className="inline-flex items-center gap-1.5 rounded-pill border border-gold/35 bg-gold/15 px-3 py-1 text-[11px] font-semibold tracking-wide text-gold">
                <ShieldIcon />
                Credenciado
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
