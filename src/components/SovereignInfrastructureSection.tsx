import Image from 'next/image';
import { home } from '@/lib/homePageStyle';

const builtForTiles = [
  {
    image: '/thread-l.png',
    alt: 'Woven textile fibers',
    title: 'Built for compliance',
    body: 'Compliance-by-design for ESPR, DPP and EPR.',
  },
  {
    image: '/leaf-l.png',
    alt: 'Leaf vein structure',
    title: 'Built for circularity',
  },
  {
    image: '/thread-r.png',
    alt: 'Natural fiber threads',
    title: 'Built for intelligence',
  },
  {
    image: '/nature-r.png',
    alt: 'River valley landscape',
    title: 'Built for sovereignty',
  },
] as const;

export default function SovereignInfrastructureSection() {
  return (
    <section className={`border-t border-[#ebe6dc] bg-[#f5f1ea] ${home.section}`}>
      <div className={`${home.container} max-w-6xl`}>
        {/* Top: copy + system flow */}
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="min-w-0">
            <h2 className="text-balance text-xl font-semibold leading-snug tracking-tight text-[#2c2c2c] sm:text-2xl">
              Re:Weave™ is{' '}
              <span className={home.accent}>sovereign material infrastructure.</span>
            </h2>

            <div className={`mt-4 h-px w-[min(100%,18rem)] ${home.ruleBar}`} aria-hidden />

            <p className={`mt-5 max-w-xl ${home.body}`}>
              A closed-loop system that integrates advanced materials, biological regeneration, energy
              systems, autonomous robotics and AI control to create resilience, compliance and
              long-term value.
            </p>

            <div className="mt-6 flex flex-col gap-4 rounded-xl border border-[#e6dfd4] bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-6">
              <p className="shrink-0 text-xs font-bold uppercase tracking-[0.12em] text-[#2c2c2c] sm:text-[11px] sm:tracking-[0.14em]">
                ONE SYSTEM. MANY APPLICATIONS:
              </p>

              <div className="min-w-0 sm:max-w-[55%] sm:text-right">
                <div className={`mb-2 h-px w-10 sm:ml-auto ${home.ruleBar}`} aria-hidden />
                <p className={`${home.body} text-[#2c2c2c]`}>
                  Space. Defense. Healthcare. Smart Cities. Fashion.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-none">
              <Image
                src="/new-info.png"
                alt="RE:WEAVE system flow: closed-loop resource cycle across five infrastructure pillars"
                width={640}
                height={640}
                className="h-auto w-full mix-blend-multiply [mask-image:radial-gradient(ellipse_90%_90%_at_50%_50%,#000_58%,transparent_100%)] [-webkit-mask-image:radial-gradient(ellipse_90%_90%_at_50%_50%,#000_58%,transparent_100%)]"
                sizes="(max-width: 1024px) 90vw, 480px"
              />
            </div>
          </div>
        </div>

        {/* Bottom: left feature card | right = image row + shared text bar */}
        <div className="mt-10 grid gap-3 sm:mt-12 sm:gap-4 lg:mt-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.55fr)] lg:items-stretch">
          <article className="flex flex-col overflow-hidden rounded-2xl border border-[#e6dfd4]/80 bg-white shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
            <div className="flex items-center gap-3 bg-[#1a1a1a] px-4 py-4 sm:gap-4 sm:px-5 sm:py-5">
              <Image
                src="/f33.png"
                alt="RE:WEAVE"
                width={56}
                height={56}
                className="h-12 w-12 shrink-0 rounded-full object-cover sm:h-14 sm:w-14"
              />
              <div className="h-11 w-px shrink-0 bg-white/35 sm:h-12" aria-hidden />
              <div className="min-w-0">
                <p className="text-[9px] font-medium uppercase leading-none tracking-[0.14em] text-white/90 sm:text-[10px]">
                  Not a
                </p>
                <p className="mt-1 text-[11px] font-bold uppercase leading-tight tracking-[0.08em] text-white sm:text-xs sm:tracking-[0.1em]">
                  Product. A system.
                </p>
                <p className="mt-1.5 text-[10px] leading-snug text-white/75 sm:text-[11px] sm:leading-relaxed">
                  From linear supply to sovereign infrastructure.
                </p>
              </div>
            </div>

            <div className="relative min-h-[120px] flex-1">
              <Image
                src="/nature-l.png"
                alt="River valley at golden hour"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 360px"
              />
            </div>
          </article>

          <div className="flex min-w-0 flex-col gap-2 sm:gap-2.5">
            <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
              {builtForTiles.map((tile) => (
                <div
                  key={tile.image}
                  className="relative aspect-[4/3] overflow-hidden rounded-xl border border-[#e6dfd4]/60 bg-white shadow-sm"
                >
                  <Image
                    src={tile.image}
                    alt={tile.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 22vw, 140px"
                  />
                </div>
              ))}
            </div>

            <div className="grid flex-1 grid-cols-4 overflow-hidden rounded-xl border border-[#e6dfd4] bg-white shadow-[0_8px_32px_rgba(0,0,0,0.06)] divide-x divide-[#2c2c2c]/10">
              {builtForTiles.map((tile) => (
                <div
                  key={tile.title}
                  className="flex flex-col justify-center px-2 py-2.5 text-center sm:px-2.5 sm:py-3"
                >
                  <p className="text-[9px] font-bold uppercase leading-tight tracking-[0.06em] text-[#2c2c2c] sm:text-[10px] sm:tracking-[0.08em]">
                    {tile.title}
                  </p>
                  {'body' in tile && tile.body ? (
                    <p className="mt-1 text-[9px] leading-snug text-[#4a443c] sm:text-[10px] sm:leading-relaxed">
                      {tile.body}
                    </p>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
