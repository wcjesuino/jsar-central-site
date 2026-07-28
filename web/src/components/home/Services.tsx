import Link from "next/link";

function AnchorPill() {
  return (
    <span className="w-fit rounded-pill border border-white/30 bg-white/15 px-3 py-1 text-[11px] font-semibold tracking-wide text-white">
      Serviço-âncora
    </span>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M7 17L17 7M17 7H9M17 7V15" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ServiceLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="inline-flex w-fit items-center gap-2.5 rounded-pill bg-black/20 py-1.5 pl-4 pr-1.5 text-sm font-medium text-white transition-colors hover:bg-black/30"
    >
      {label}
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-gray-900">
        <ArrowIcon />
      </span>
    </Link>
  );
}

export function Services() {
  return (
    <section className="bg-gray-100 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <div className="font-mono text-xs font-medium tracking-widest text-brand">
            NOSSOS SERVIÇOS
          </div>
          <h2 className="font-editorial mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            O que fazemos
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
          <div className="flex min-h-[280px] flex-col justify-between rounded-2xl bg-brand p-8 md:col-span-7">
            <AnchorPill />
            <div>
              <h3 className="font-editorial mb-4 text-2xl font-semibold leading-tight text-white sm:text-3xl">
                Instalação de
                <br />
                Ar-Condicionado
              </h3>
              <ServiceLink href="/instalacao-ar-condicionado" label="Ver detalhes" />
            </div>
          </div>

          <div className="flex min-h-[280px] flex-col justify-between rounded-2xl bg-cool p-8 md:col-span-5">
            <AnchorPill />
            <div>
              <h3 className="font-editorial mb-4 text-2xl font-semibold leading-tight text-white">
                Manutenção Preventiva
                <br />& Corretiva
              </h3>
              <ServiceLink href="/manutencao-ar-condicionado" label="Ver detalhes" />
            </div>
          </div>

          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-gray-200 bg-white p-8 sm:flex-row sm:items-center md:col-span-12">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/15">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A227" strokeWidth="2">
                  <path d="M21 8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16V8z" />
                  <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
                </svg>
              </div>
              <div>
                <h3 className="font-editorial text-lg font-semibold text-gray-900">
                  Insumos & Materiais
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Venda de peças e insumos para climatização, para revenda e obra.
                </p>
              </div>
            </div>
            <Link
              href="/contato"
              className="text-sm font-semibold text-brand transition-colors hover:text-brand-hover"
            >
              Fale conosco →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
