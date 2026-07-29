export type PricingPlan = {
  name: string;
  price: string;
  priceSuffix?: string;
  description: string;
  features: string[];
  ctaLabel: string;
  featured?: boolean;
};

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function PricingPlans({
  eyebrow = "PLANOS",
  title,
  subtitle,
  plans,
  ctaHref,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  plans: PricingPlan[];
  ctaHref: string;
}) {
  return (
    <section className="bg-gray-100 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <div className="font-mono text-xs font-medium tracking-widest text-brand">
            {eyebrow}
          </div>
          <h2 className="font-editorial mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h2>
          {subtitle && <p className="mt-3 max-w-xl text-sm text-gray-500">{subtitle}</p>}
        </div>

        <div className="relative overflow-hidden rounded-hero bg-surface-dark p-8 sm:p-12">
          <div
            aria-hidden
            className="font-editorial pointer-events-none absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap text-[160px] font-extrabold leading-none tracking-tighter text-white/[0.025]"
          >
            PLANOS
          </div>

          <div className="relative grid grid-cols-1 gap-5 md:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={
                  plan.featured
                    ? "flex flex-col rounded-2xl border border-brand/40 bg-brand/15 p-8"
                    : "flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-8 transition-colors hover:border-white/20 hover:bg-white/[0.06]"
                }
              >
                <div
                  className={
                    plan.featured
                      ? "mb-3 text-xs font-bold tracking-widest text-white/70 uppercase"
                      : "mb-3 text-xs font-bold tracking-widest text-gray-400 uppercase"
                  }
                >
                  {plan.name}
                </div>
                <div className="font-editorial mb-1 text-4xl font-bold tracking-tight text-white">
                  {plan.price}
                  {plan.priceSuffix && (
                    <span className="text-base font-normal text-gray-500">{plan.priceSuffix}</span>
                  )}
                </div>
                <p className="mb-6 text-sm leading-relaxed text-gray-400">{plan.description}</p>

                <ul className="mb-8 flex flex-col gap-2.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-sm text-gray-300">
                      <span className="text-cool">
                        <CheckIcon />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={ctaHref}
                  className={
                    plan.featured
                      ? "mt-auto inline-flex items-center justify-center rounded-pill bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-hover"
                      : "mt-auto inline-flex items-center justify-center rounded-pill border border-white/15 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                  }
                >
                  {plan.ctaLabel}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
