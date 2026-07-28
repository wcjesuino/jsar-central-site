import type { ReactNode } from "react";

export type Differentiator = {
  icon: ReactNode;
  title: string;
  description: string;
};

export function Differentiators({
  eyebrow = "DIFERENCIAIS",
  title,
  items,
}: {
  eyebrow?: string;
  title: string;
  items: Differentiator[];
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
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                {item.icon}
              </div>
              <h3 className="font-editorial mb-2 text-base font-bold text-gray-900">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
