const manufacturers = [
  "agratto",
  "carrier",
  "daikin",
  "elgin",
  "fujitsu",
  "gree",
  "hitachi",
  "lg",
  "midea",
  "philco",
  "springer-midea",
  "tcl",
  "ventisol",
];

export function ManufacturerTicker() {
  const items = [...manufacturers, ...manufacturers];

  return (
    <section className="overflow-hidden rounded-b-hero border-t border-gray-200 bg-white py-4 sm:py-6">
      <div className="flex w-max animate-marquee items-center gap-8 sm:gap-12">
        {items.map((brand, i) => (
          <span key={`${brand}-${i}`} className="flex shrink-0 items-center gap-3">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
            {/* eslint-disable-next-line @next/next/no-img-element -- logo decorativo pequeno, otimização do next/image é desnecessária aqui */}
            <img
              src={`/brand/manufacturers/${brand}.png`}
              alt={brand}
              className="h-5 w-auto object-contain sm:h-7"
            />
          </span>
        ))}
      </div>
    </section>
  );
}
