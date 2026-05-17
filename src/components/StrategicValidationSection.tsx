import { home } from '@/lib/homePageStyle';

export default function StrategicValidationSection() {
  return (
    <section className={`border-t border-[#ebe6dc] bg-white ${home.section}`}>
      <div className={`${home.container} max-w-[52rem]`}>
        <div className="mb-9 text-center sm:mb-10">
          <h2 className={home.h2}>Strategic Validation</h2>
          <div className={`mx-auto mt-5 w-14 ${home.ruleBar}`} />
        </div>

        <div className="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-2 lg:gap-5">
          <article
            className={`group relative flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-md ${home.cardLight}`}
          >
            <div
              className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#C8A882]/8 blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-80"
              aria-hidden
            />

            <p className={home.cardEyebrowLight}>Trust Signal</p>

            <h3 className={`mt-2 ${home.cardTitle}`}>Global Scalability</h3>

            <p className={`mt-3 flex-1 ${home.cardBody}`}>
              Currently establishing market strategies in{' '}
              <span className="font-semibold text-[#2c2c2c]">Gujarat & Telangana, India</span>, to
              validate high-volume circular material flows within global textile hubs.
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

          <article
            className={`flex flex-col transition-shadow duration-300 hover:shadow-md ${home.cardDark}`}
          >
            <p className={home.cardEyebrowDark}>Trust Signal</p>

            <h3 className={`mt-2 ${home.cardTitleOnDark}`}>Sovereign Standards</h3>

            <p className={`mt-3 flex-1 ${home.cardBodyOnDark}`}>
              All systems are designed to be compliant with{' '}
              <span className="font-semibold text-white">ESA & ECSS standards</span>, ensuring the
              highest level of data integrity and physical reliability.
            </p>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className={home.cardInsetDark}>
                <p className={home.statValueOnDark}>ESA</p>
                <p className={home.statLabelOnDark}>Space Standards</p>
              </div>
              <div className={home.cardInsetDark}>
                <p className={home.statValueOnDark}>ECSS</p>
                <p className={home.statLabelOnDark}>System Compliance</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
