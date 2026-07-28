export type FaqItem = {
  question: string;
  answer: string;
};

function QuestionIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.8.4-1 .9-1 1.7" strokeLinecap="round" />
      <circle cx="12" cy="17" r="0.5" fill="currentColor" />
    </svg>
  );
}

export function Faq({ title = "Perguntas frequentes", items }: { title?: string; items: FaqItem[] }) {
  return (
    <section className="bg-white px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-editorial mb-10 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
          {title}
        </h2>

        <div className="flex flex-col gap-6">
          {items.map((item) => (
            <div key={item.question} className="border-t border-gray-200 pt-6">
              <div className="mb-2.5 flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-gray-100 text-gray-400">
                  <QuestionIcon />
                </span>
                <h3 className="text-base font-medium text-gray-900">{item.question}</h3>
              </div>
              <p className="pl-9 text-sm leading-relaxed text-gray-500">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
