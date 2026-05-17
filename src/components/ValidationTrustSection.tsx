import { home } from '@/lib/homePageStyle';

export default function ValidationTrustSection() {
  return (
    <section className={`border-b border-[#ebe6dc] bg-[#f5f2ed] ${home.section}`}>
      <div className={`${home.container} max-w-[52rem]`}>
        <div className="mb-9 text-center">
          <h2 className={`${home.h2}`}>
            Validated on <span className={home.accent}>Earth</span>.
            <br className="hidden sm:block" />{' '}
            Engineered for <span className={home.accent}>Space</span>.
          </h2>
          <div className={`mx-auto mt-5 w-14 ${home.ruleBar}`} />
        </div>

        <div className="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-2 lg:gap-5">
          <article className={`relative flex flex-col overflow-hidden ${home.cardLight}`}>
            <div
              className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#C8A882]/8 blur-2xl"
              aria-hidden
            />

            <p className={home.cardEyebrowLight}>Strategic Market Presence</p>

            <h3 className={`mt-2 ${home.cardTitle}`}>Market Resilience Strategy</h3>

            <p className={`mt-3 flex-1 ${home.cardBody}`}>
              Developing resilient market strategies in{' '}
              <span className="font-semibold text-[#2c2c2c]">India (Gujarat & Telangana)</span> to secure
              high-volume circular material flows.
            </p>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className={home.cardInsetLight}>
                <p className={home.statValue}>Gujarat</p>
                <p className={home.statLabel}>Production Hub</p>
              </div>
              <div className={home.cardInsetLight}>
                <p className={home.statValue}>Telangana</p>
                <p className={home.statLabel}>Circular Flows</p>
              </div>
            </div>
          </article>

          <article className={`flex flex-col ${home.cardDark}`}>
            <p className={home.cardEyebrowDark}>Technical Evidence</p>

            <h3 className={`mt-2 ${home.cardTitleOnDark}`}>Autonomous Recovery</h3>

            <p className={`mt-3 flex-1 ${home.cardBodyOnDark}`}>
              Our <span className={home.highlightOnDark}>Autonomous Recycling Cluster (ARC)</span> is
              specifically engineered for high-recovery output, closing the physical loop with{' '}
              <span className="font-semibold text-white">zero human dependency</span>.
            </p>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className={home.cardInsetDark}>
                <p className={home.statValueOnDark}>90%</p>
                <p className={home.statLabelOnDark}>Fiber Purity</p>
              </div>
              <div className={home.cardInsetDark}>
                <p className={home.statValueOnDark}>0</p>
                <p className={home.statLabelOnDark}>Human Dependency</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
