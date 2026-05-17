import Image from 'next/image';
import { home } from '@/lib/homePageStyle';

const regulatoryCards = [
  {
    image: '/flag.png',
    alt: 'European Union flag',
    code: 'ESPR',
    title: 'Ecodesign for Sustainable Products Regulation',
  },
  {
    image: '/passport.png',
    alt: 'Digital product passport book with fingerprint',
    code: 'DPP',
    title: 'Digital Product Passport',
  },
  {
    image: '/recycle-book.png',
    alt: 'Recycling symbol on wood and burlap',
    code: 'EPR',
    title: 'Extended Producer Responsibility',
  },
  {
    image: '/libra.png',
    alt: 'Scales of justice and gavel on legal documents',
    code: 'COMPLIANCE',
    codeStacked: true,
    title: 'Rising Enforcement & Fines',
  },
];

type RegulatoryCard = (typeof regulatoryCards)[number];

const regulatoryFooterHeight = 'h-[3.25rem] sm:h-[3.5rem]';
const regulatoryCardPadBottom = 'pb-[1.625rem] sm:pb-[1.75rem]';

function RegulatoryCardOverlay({
  code,
  title,
  codeStacked,
}: {
  code: RegulatoryCard['code'];
  title: string;
  codeStacked?: boolean;
}) {
  return (
    <div
      className={`absolute left-0 right-0 top-full z-10 flex w-full -translate-y-1/2 ${regulatoryFooterHeight} items-stretch overflow-hidden rounded-2xl bg-[#f5f1ea]`}
    >
      <div className="relative flex w-[36%] shrink-0 items-center justify-center px-2 sm:w-[34%] sm:px-2.5">
        <p
          className={`text-center font-bold uppercase leading-tight tracking-[0.05em] text-[#2c2c2c] ${
            codeStacked ? 'text-[8px] sm:text-[9px]' : 'text-[10px] sm:text-[11px]'
          }`}
        >
          {codeStacked ? (
            <>
              COMP
              <br />
              LIANCE
            </>
          ) : (
            code
          )}
        </p>
        <span
          className="absolute right-0 top-1/2 h-[58%] w-px -translate-y-1/2 bg-[#2c2c2c]/14"
          aria-hidden
        />
      </div>
      <div className="flex flex-1 items-center px-2 sm:px-2.5">
        <p className="text-left text-[9px] font-normal leading-snug text-[#4a443c] sm:text-[10px] sm:leading-snug">
          {title}
        </p>
      </div>
    </div>
  );
}

function MoneyBagIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M12 2.5c-3 1.7-5.5 3.2-5.5 6.2 0 1.5.7 2.8 1.8 3.8V19a1.25 1.25 0 0 0 1.25 1.25h5.1A1.25 1.25 0 0 0 15.7 19v-6.5c1.1-1 1.8-2.3 1.8-3.8 0-3-2.5-4.5-5.5-6.2Z"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinejoin="round"
      />
      <path
        d="M8.75 12.25h6.5M12 9.25v6"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <text
        x="12"
        y="16.25"
        textAnchor="middle"
        fill="currentColor"
        fontSize="6.5"
        fontWeight="700"
        fontFamily="system-ui, sans-serif"
      >
        $
      </text>
    </svg>
  );
}

export default function ProblemSection() {
  return (
    <section className={`bg-white ${home.section}`}>
      <div className={home.container}>
        <div className="grid items-start gap-8 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.25fr)] md:items-center md:gap-8 lg:gap-10 xl:gap-12">
          <div className="mx-auto max-w-xl text-center md:mx-0 md:max-w-none md:self-center md:text-left">
            <p className="inline-flex rounded-full bg-[#1a1a1a] px-3.5 py-1.5 text-[10px] font-medium italic uppercase tracking-[0.16em] text-white sm:px-4 sm:py-2 sm:text-[11px] sm:tracking-[0.18em]">
              THE PROBLEM
            </p>

            <h2 className="mt-5 text-balance text-xl font-semibold leading-[1.2] tracking-tight text-[#2c2c2c] sm:mt-6 sm:text-2xl sm:leading-[1.15] lg:text-[1.65rem] lg:leading-[1.18] xl:text-3xl">
              A system built for abundance can no longer meet a world defined by{' '}
              <span className={home.accent}>scarcity and accountability.</span>
            </h2>

            <div className={`mx-auto mt-5 h-px w-24 sm:mt-6 sm:w-28 md:mx-0 ${home.ruleBar}`} aria-hidden />

            <p className={`mt-5 sm:mt-6 ${home.body}`}>
              Fragmented supply chains, rising costs, regulatory pressure and resource volatility
              expose the limits of the linear textile model.
            </p>
          </div>

          <div className="min-w-0">
            <div className="flex flex-col gap-1.5 md:flex-row md:items-stretch md:gap-2">
              <div className="min-w-0 flex-1">
                <div className="grid grid-cols-2 gap-2 auto-rows-fr sm:gap-2.5">
                  {regulatoryCards.map((card) => (
                    <article
                      key={card.image}
                      className={`relative w-full ${regulatoryCardPadBottom}`}
                    >
                      <div className="relative w-full">
                        <div className="relative aspect-[5/4] w-full overflow-hidden rounded-t-2xl bg-[#ebe6dc]">
                          <Image
                            src={card.image}
                            alt={card.alt}
                            fill
                            className="object-cover object-[center_30%] sm:object-[center_32%]"
                            sizes="(max-width: 768px) 42vw, 220px"
                          />
                        </div>

                        <RegulatoryCardOverlay
                          code={card.code}
                          title={card.title}
                          codeStacked={'codeStacked' in card && card.codeStacked}
                        />
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <aside
                className="hidden shrink-0 items-center justify-center rounded-full bg-[#2c2c2c] px-1.5 py-4 md:flex md:w-9"
                aria-label="Regulatory pressure is accelerating"
              >
                <p className="text-[8px] font-semibold uppercase leading-none tracking-[0.16em] text-white [writing-mode:vertical-rl] rotate-180">
                  Regulatory pressure is accelerating
                </p>
              </aside>
            </div>

            <p className="mt-1.5 rounded-full bg-[#2c2c2c] px-2.5 py-1.5 text-center text-[8px] font-semibold uppercase tracking-[0.12em] text-white sm:text-[9px] md:hidden">
              Regulatory pressure is accelerating
            </p>

            <div className="mt-2 flex min-h-[3.25rem] flex-col overflow-hidden rounded-2xl bg-[#2c2c2c] text-white sm:mt-2.5 sm:min-h-[3.75rem] sm:flex-row sm:items-stretch">
              <div className="flex items-center gap-2.5 border-[#ffffff1f] px-3 py-3 sm:w-[42%] sm:shrink-0 sm:border-r sm:px-4 sm:py-3.5">
                <MoneyBagIcon className="h-5 w-5 shrink-0 text-[#C8A882] sm:h-6 sm:w-6" />
                <p className="text-[10px] font-bold uppercase leading-tight tracking-[0.08em] sm:text-[11px]">
                  The cost of inaction
                </p>
              </div>

              <div className="flex flex-1 items-center px-3 pb-3 sm:px-4 sm:py-3.5 sm:pb-3.5">
                <p className="text-left text-[10px] font-normal leading-snug text-white/92 sm:text-[11px] sm:leading-relaxed">
                  Higher costs. Lost market access. Operational risk. Strategic vulnerability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
