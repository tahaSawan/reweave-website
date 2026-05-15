export default function ValidationTrustSection() {
  return (
    <section className="bg-[#f5f2ed] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <div className="mb-12 text-center">
          <h2 className="text-xl font-semibold uppercase tracking-[0.12em] text-[#2c2c2c] sm:text-2xl md:text-[1.75rem] md:leading-tight">
            Validated on <span className="text-[#8f7350]">Earth</span>.
            <br className="hidden sm:block" /> Engineered for{' '}
            <span className="text-[#8f7350]">Space</span>.
          </h2>
          <div className="mx-auto mt-6 h-px w-12 bg-[#C8A882]/60" />
        </div>

        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
          <article className="relative flex flex-col overflow-hidden rounded-2xl border border-[#e8dcc6] bg-white p-7 shadow-sm sm:p-8">
            <div
              className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#C8A882]/8 blur-2xl"
              aria-hidden
            />

            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#8f7350] sm:text-[11px]">
              Strategic Market Presence
            </p>

            <p className="mt-5 flex-1 text-base leading-relaxed text-[#4a443c] sm:text-[1.0625rem] sm:leading-[1.7]">
              Developing resilient market strategies in{' '}
              <span className="font-semibold text-[#2c2c2c]">India (Gujarat & Telangana)</span> to secure
              high-volume circular material flows.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-lg border border-[#e8dcc6] bg-[#faf8f4] px-4 py-5 text-center">
                <p className="text-xl font-semibold tracking-tight text-[#8f7350] sm:text-2xl">
                  Gujarat
                </p>
                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#6b6358]">
                  Production Hub
                </p>
              </div>
              <div className="rounded-lg border border-[#e8dcc6] bg-[#faf8f4] px-4 py-5 text-center">
                <p className="text-xl font-semibold tracking-tight text-[#8f7350] sm:text-2xl">
                  Telangana
                </p>
                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#6b6358]">
                  Circular Flows
                </p>
              </div>
            </div>
          </article>

          <article className="flex flex-col rounded-2xl bg-[#1e1b18] p-7 shadow-[0_12px_40px_rgba(0,0,0,0.2)] sm:p-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C8A882] sm:text-[11px]">
              Technical Evidence
            </p>
            <p className="mt-5 flex-1 text-base leading-relaxed text-[#c9bfb0] sm:text-[1.0625rem] sm:leading-[1.7]">
              Our{' '}
              <span className="font-semibold text-[#e8d4b8]">
                Autonomous Recycling Cluster (ARC)
              </span>{' '}
              is specifically engineered for high-recovery output, closing the physical loop with{' '}
              <span className="font-semibold text-white">zero human dependency</span>.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-lg border border-white/10 bg-white/5 px-4 py-5 text-center">
                <p className="text-2xl font-light tabular-nums text-[#C8A882] sm:text-3xl">90%</p>
                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/75">
                  Fiber Purity
                </p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 px-4 py-5 text-center">
                <p className="text-2xl font-light tabular-nums text-[#C8A882] sm:text-3xl">0</p>
                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/75">
                  Human Dependency
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
