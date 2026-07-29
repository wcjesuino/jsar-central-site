import { LeadForm } from "@/components/lp/LeadForm";

export function LeadFormSection({
  service,
  title = "Solicite seu orçamento",
  description = "Preencha os dados abaixo — um técnico credenciado entra em contato pelo WhatsApp.",
}: {
  service: string;
  title?: string;
  description?: string;
}) {
  return (
    <section className="bg-gray-100 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-xl">
        <div className="mb-8 text-center">
          <h2 className="font-editorial text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-2 text-sm text-gray-500">{description}</p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <LeadForm service={service} />
        </div>
      </div>
    </section>
  );
}
