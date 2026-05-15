const facts = [
  {
    label: 'The Cost of Inaction',
    body: (
      <>
        The linear textile model is no longer a financial option. Regulatory enforcement of{' '}
        <span className="font-semibold text-[#e8d4b8]">ESPR, DPP, and EPR</span> carries fines of up
        to{' '}
        <span className="text-[#f0c987] font-bold text-lg sm:text-xl tabular-nums">
          10%
        </span>{' '}
        <span className="font-semibold text-white">of annual turnover.</span>
      </>
    ),
    accent: 'from-[#c45c4a]/80 to-[#C8A882]',
  },
  {
    label: 'The Resource Gap',
    body: (
      <>
        Currently,{' '}
        <span className="text-[#f0c987] font-bold text-lg sm:text-xl tabular-nums">
          less than 1%
        </span>{' '}
        of textiles are recycled into new textiles, while{' '}
        <span className="text-[#f0c987] font-bold text-lg sm:text-xl tabular-nums">
          over 85%
        </span>{' '}
        end up in landfills.
      </>
    ),
    accent: 'from-[#C8A882] to-[#8f7350]',
  },
  {
    label: 'Geopolitical Risk',
    body: (
      <>
        <span className="font-semibold text-white">Fragmented supply chains</span> and global
        volatility expose critical vulnerabilities in material access.
      </>
    ),
    accent: 'from-[#8f7350] to-[#5c4a38]',
  },
] as const;

export default function ImperativeSection() {
  return (
    <section className="relative overflow-hidden bg-[#141210] py-16 sm:py-20 lg:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(200,168,130,0.12) 0%, transparent 45%),
            radial-gradient(circle at 80% 20%, rgba(196,92,74,0.08) 0%, transparent 40%)`,
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        aria-hidden
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C8A882' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#C8A882] sm:text-[11px]">
            The Imperative
          </p>
          <h2 className="mt-4 text-2xl font-semibold leading-[1.25] tracking-tight text-white sm:text-3xl lg:text-[2.125rem] lg:leading-[1.2]">
            The first autonomous infrastructure platform for Earth and Space.
          </h2>
          <p className="mt-4 text-base font-medium leading-relaxed text-[#c9bfb0] sm:text-lg lg:text-xl">
            We achieve{' '}
            <span className="font-semibold text-[#e8d4b8]">technological sovereignty</span> through{' '}
            <span className="font-semibold text-[#e8d4b8]">closed-loop systems.</span>
          </p>
          <div className="mx-auto mt-8 h-px w-16 bg-gradient-to-r from-transparent via-[#C8A882] to-transparent" />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:mt-14 md:grid-cols-3 md:gap-6">
          {facts.map((fact) => (
            <article
              key={fact.label}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-[#C8A882]/20 bg-[#1e1b18] p-6 shadow-[0_8px_32px_rgba(0,0,0,0.45)] transition-all duration-300 hover:border-[#C8A882]/45 hover:shadow-[0_12px_40px_rgba(0,0,0,0.55)] sm:p-7"
            >
              <div
                className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${fact.accent}`}
                aria-hidden
              />
              <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.14em] text-white sm:text-[0.8125rem]">
                {fact.label}
              </h3>
              <p className="flex-1 text-sm leading-[1.65] text-[#b8aea3] sm:text-[0.9375rem]">
                {fact.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
