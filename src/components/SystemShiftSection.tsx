import Image from 'next/image';

const infrastructurePillars = [
  {
    label: 'Circular by Design',
    icon: '/shift-icon-circular.png',
    alt: 'Circular by design',
  },
  {
    label: 'Compliance by Design',
    icon: '/shift-icon-compliance.png',
    alt: 'Compliance by design',
  },
  {
    label: 'AI-Driven Autonomy',
    icon: '/shift-icon-ai.png',
    alt: 'AI-driven autonomy',
  },
  {
    label: 'Strategic Sovereignty',
    icon: '/shift-icon-sovereignty.png',
    alt: 'Strategic sovereignty',
  },
] as const;

export default function SystemShiftSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[#ebe6dc]" aria-hidden />
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#f7f3ec] via-[#ebe6dc] to-[#ddd2c3]"
        aria-hidden
      />
      <div
        className="absolute -right-24 top-0 h-[420px] w-[420px] rounded-full bg-[#C8A882]/15 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#d8cfc0]/80 to-transparent"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-16 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          {/* Left: narrative */}
          <div className="lg:pr-4">
            <p className="text-2xl font-medium leading-[1.35] tracking-tight text-[#2c2c2c] sm:text-3xl lg:text-[2rem] lg:leading-[1.3]">
              For decades, textiles have operated in linear models optimized for cost—{' '}
              <span className="font-semibold text-[#8f7350]">
                but under current regulatory and geopolitical pressure, that model is no longer
                viable.
              </span>
            </p>

            <div className="mt-8 flex items-center gap-4 sm:mt-10">
              <div className="h-px w-16 shrink-0 bg-[#C8A882]/70 sm:w-20" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#4a443c] sm:text-[11px]">
                A System Shift Is Underway
              </p>
            </div>
          </div>

          {/* Right: infrastructure card */}
          <div className="rounded-2xl border border-white/50 bg-white/40 p-6 shadow-[0_12px_40px_rgba(44,38,30,0.12)] backdrop-blur-md sm:p-8 lg:p-9">
            <div className="text-center">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#3d3832] sm:text-base">
                Textiles as
              </p>
              <h2 className="mt-1 text-2xl font-bold uppercase tracking-[0.12em] text-[#8f7350] sm:text-3xl">
                Infrastructure
              </h2>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-0 sm:divide-x sm:divide-[#3d3832]/15">
              {infrastructurePillars.map((pillar) => (
                <div
                  key={pillar.label}
                  className="flex flex-col items-center px-2 text-center sm:px-3"
                >
                  <div className="mb-3 flex h-12 w-12 items-center justify-center sm:h-14 sm:w-14">
                    <Image
                      src={pillar.icon}
                      alt={pillar.alt}
                      width={56}
                      height={56}
                      className="h-10 w-10 object-contain mix-blend-screen sm:h-12 sm:w-12"
                    />
                  </div>
                  <p className="text-[9px] font-semibold uppercase leading-tight tracking-[0.1em] text-[#3d3832] sm:text-[10px]">
                    {pillar.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
