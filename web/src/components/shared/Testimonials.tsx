type Testimonial = {
  heading: string;
  quote: string;
  initial: string;
  name: string;
  role: string;
};

type TrustCard = {
  title: string;
  description: string;
  badgeLabel: string;
};

function ShieldIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Testimonials({
  eyebrow = "DEPOIMENTOS",
  title = "Quem já contratou, recomenda",
  testimonials,
  trustCard,
}: {
  eyebrow?: string;
  title?: string;
  testimonials: Testimonial[];
  trustCard?: TrustCard;
}) {
  return (
    <section className="bg-white px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <div className="font-mono text-xs font-medium tracking-widest text-brand">
            {eyebrow}
          </div>
          <h2 className="font-editorial mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            {title}
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

          {trustCard && (
            <div className="flex min-h-[260px] flex-col justify-between rounded-2xl bg-surface-dark p-8">
              <div>
                <h3 className="font-editorial mb-3 text-lg font-bold text-white">
                  {trustCard.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/50">
                  {trustCard.description}
                </p>
              </div>
              <div className="mt-6 border-t border-white/10 pt-5">
                <span className="inline-flex items-center gap-1.5 rounded-pill border border-gold/35 bg-gold/15 px-3 py-1 text-[11px] font-semibold tracking-wide text-gold">
                  <ShieldIcon />
                  {trustCard.badgeLabel}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
