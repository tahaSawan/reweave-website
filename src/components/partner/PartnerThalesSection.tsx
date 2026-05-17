import Image from 'next/image';
import { home } from '@/lib/homePageStyle';

const thalesPillars = [
  {
    step: '01',
    title: 'Joint Pilot Project',
    body: 'Focused on material validation for orbital habitats.',
  },
  {
    step: '02',
    title: 'Shared Innovation',
    body: "Leverage Thales' facility as a hub to validate next-generation textile solutions and establish a shared IP framework.",
  },
  {
    step: '03',
    title: 'Global Standard',
    body: 'Together, we set the new standard for European leadership in space infrastructure and sovereign materials.',
  },
] as const;

export default function PartnerThalesSection() {
  return (
    <section className={`relative overflow-hidden ${home.section}`}>
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src="/sense-tex/space.png"
          alt=""
          fill
          className="object-cover object-center opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0f0e0c]/88" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#C8A882]/10 via-transparent to-[#0f0e0c]/60" />
      </div>

      <div className={`relative ${home.container}`}>
        <div className="mb-10 text-center sm:mb-12">
          <p className={home.heroEyebrow}>2.</p>
          <h2 className="mx-auto mt-3 max-w-3xl text-balance text-xl font-semibold leading-snug tracking-tight text-white sm:text-2xl">
            The Strategic Ask: <span className={home.accentGold}>Thales + RE:WEAVE™</span>
          </h2>
          <div className={`mx-auto mt-5 w-14 ${home.ruleBar}`} />
          <p className="mx-auto mt-5 max-w-3xl text-sm font-medium leading-relaxed text-white/85 sm:text-base">
            We are specifically inviting Thales to join a co-development partnership within the new Space
            Joint Lab in Rome.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3 md:gap-5">
          {thalesPillars.map(({ step, title, body }) => (
            <article
              key={title}
              className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-[#C8A882]/20 bg-[#141210]/90 p-5 shadow-[0_16px_48px_rgba(0,0,0,0.4)] backdrop-blur-[2px] transition-all duration-300 hover:border-[#C8A882]/45 hover:shadow-[0_20px_56px_rgba(0,0,0,0.5)] sm:p-6"
            >
              <div
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C8A882]/70 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden
              />

              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#C8A882]/12 text-xs font-bold tabular-nums text-[#C8A882] ring-1 ring-[#C8A882]/30">
                {step}
              </span>

              <div className="mt-3 h-px w-8 bg-[#C8A882]/50" aria-hidden />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-white/88 sm:text-[0.9375rem]">
                <span className="font-semibold text-white">{title}:</span> {body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
