const flowSteps = ['Extract', 'Produce', 'Use', 'Discard'] as const;

const regulations = [
  {
    text: 'Products must be designed for recovery (ESPR)',
    variant: 'light' as const,
  },
  {
    text: 'Materials must be traceable (DPP)',
    variant: 'dark' as const,
  },
  {
    text: 'Producers must manage end-of-life (EPR)',
    variant: 'dark' as const,
  },
  {
    text: 'Companies must report full lifecycle impact (CSRD)',
    variant: 'light' as const,
  },
] as const;

export default function WhyItMattersSection() {
  return (
    <section className="border-t border-[#ebe6dc] bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-6 sm:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-[#2c2c2c] sm:text-4xl">
          Why It Matters
        </h2>

        <p className="mt-10 text-center text-sm text-[#4a443c] sm:text-base">
          Today&apos;s material systems are still linear:
        </p>

        <div className="mt-4 overflow-hidden rounded-full bg-[#2c2c2c] px-4 py-3.5 shadow-sm sm:px-6 sm:py-4">
          <div className="flex flex-wrap items-center justify-center gap-x-1 gap-y-2 text-xs font-medium text-white sm:text-sm">
            {flowSteps.map((step, index) => (
              <span key={step} className="flex items-center">
                <span>{step}</span>
                {index < flowSteps.length - 1 ? (
                  <span className="mx-2 sm:mx-3 text-white/35" aria-hidden>
                    |
                  </span>
                ) : null}
              </span>
            ))}
          </div>
        </div>

        <p className="mt-8 text-center text-sm leading-relaxed text-[#4a443c] sm:text-[0.9375rem] sm:leading-[1.75]">
          Less than 1% of textiles are recycled into new materials, while industries face growing
          requirements for circularity, traceability, and accountability (Niinimäki et al., 2020;
          Ellen MacArthur Foundation, 2017).
        </p>

        <p className="mt-10 text-center text-sm text-[#4a443c] sm:text-base">
          At the same time, regulation is shifting rapidly:
        </p>

        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
          {regulations.map((item) => (
            <div
              key={item.text}
              className={`rounded-full px-5 py-3.5 text-center text-xs font-medium leading-snug sm:px-6 sm:py-4 sm:text-sm ${
                item.variant === 'dark'
                  ? 'bg-[#2c2c2c] text-white'
                  : 'bg-[#ebe6dc] text-[#2c2c2c]'
              }`}
            >
              {item.text}
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-[#6b6358] sm:text-base">
          Circularity is no longer optional, it is becoming infrastructure.
        </p>
      </div>
    </section>
  );
}
