import Image from 'next/image';
import { home } from '@/lib/homePageStyle';

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
    <section className={`relative overflow-hidden bg-[#ebe6dc] ${home.section}`}>
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-12">
          <div className="lg:pr-4">
            <p className={`${home.body} font-medium text-[#2c2c2c]`}>
              For decades, textiles have operated in linear models optimized for cost—{' '}
              <span className={home.accent}>
                but under current regulatory and geopolitical pressure, that model is no longer
                viable.
              </span>
            </p>

            <div className="mt-5 flex items-center gap-3 sm:mt-6">
              <div className={`w-12 shrink-0 sm:w-14 ${home.ruleBar}`} />
              <p className={`${home.cardEyebrowLight} tracking-[0.18em]`}>A System Shift Is Underway</p>
            </div>
          </div>

          <div className={home.shiftCard}>
            <div className="text-center">
              <p className={home.shiftKicker}>Textiles as</p>
              <h2 className={home.shiftTitle}>Infrastructure</h2>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-4 sm:mt-6 sm:grid-cols-4 sm:gap-0 sm:divide-x sm:divide-[#2c2c2c]/12">
              {infrastructurePillars.map((pillar) => (
                <div
                  key={pillar.label}
                  className="flex flex-col items-center px-1.5 text-center sm:px-2"
                >
                  <div className="mb-2 flex h-10 w-10 items-center justify-center sm:h-11 sm:w-11">
                    <Image
                      src={pillar.icon}
                      alt={pillar.alt}
                      width={56}
                      height={56}
                      className="h-9 w-9 object-contain mix-blend-multiply sm:h-10 sm:w-10"
                    />
                  </div>
                  <p className={home.shiftPillarLabel}>{pillar.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
