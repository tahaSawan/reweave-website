import Image from 'next/image';
import type { ReactNode } from 'react';
import { home } from '@/lib/homePageStyle';

type ApplicationDetail = {
  num: string;
  image: string;
  imageAlt: string;
  title: string;
  points: ReactNode;
};

const applications: ApplicationDetail[] = [
  {
    num: '1',
    image: '/sense-tex/space.png',
    imageAlt: 'Space and aerospace orbital habitats',
    title: 'Space & Aerospace: Orbital Habitats & ISRU',
    points: (
      <>
        <p className={home.body}>
          <strong className="text-[#2c2c2c]">Strategic Sovereignty:</strong> Engineered for orbital
          habitats and long-duration missions where resource autonomy is a non-negotiable requirement.
        </p>
        <p className={home.body}>
          <strong className="text-[#2c2c2c]">Extreme Protection:</strong> Utilizes dual-spinning
          architecture to fuse lunar regolith (moon dust) with sense-capable cores, providing critical
          radiation shielding and thermal stability.
        </p>
        <p className={home.body}>
          <strong className="text-[#2c2c2c]">Resource Independence:</strong> Integrated Bioreactors and
          ISRU (In-Situ Resource Utilization) modules convert biological waste and local materials into
          structural skins and life-support components.
        </p>
        <p className={home.body}>
          <strong className="text-[#2c2c2c]">Mission Impact:</strong> Directly supports Artemis, Moon
          Village, and Mars missions by turning waste into resources and enabling long-term autonomy.
        </p>
      </>
    ),
  },
  {
    num: '2',
    image: '/sense-tex/defense.png',
    imageAlt: 'Defense and technical systems',
    title: 'Defense & Technical Systems: Operational Resilience',
    points: (
      <>
        <p className={home.body}>
          <strong className="text-[#2c2c2c]">Adaptive Uniforms:</strong> Next-generation tactical
          textiles featuring structural sensing for real-time health monitoring and mission-critical
          reliability.
        </p>
        <p className={home.body}>
          <strong className="text-[#2c2c2c]">Ballistic & Chemical Defense:</strong> Advanced PFAS-free
          coatings provide ballistic solutions and protection against extreme environments and chemical
          exposure.
        </p>
        <p className={home.body}>
          <strong className="text-[#2c2c2c]">Traceable Reliability:</strong> Secure-by-design data
          protocols and the TEAB protocol ensure full traceability and data integrity for high-security
          assets.
        </p>
      </>
    ),
  },
  {
    num: '3',
    image: '/sense-tex/healthcare.png',
    imageAlt: 'Healthcare and human monitoring',
    title: 'Healthcare & Human Monitoring: Hygienic Intelligence',
    points: (
      <>
        <p className={home.body}>
          <strong className="text-[#2c2c2c]">Continuous Biometrics:</strong> Biocompatible yarns with
          embedded sensor networks provide non-intrusive, real-time monitoring of vital signs and
          physiological parameters.
        </p>
        <p className={home.body}>
          <strong className="text-[#2c2c2c]">Hygiene Resilience:</strong> Fibers engineered with silver
          and zinc provide permanent antimicrobial and antifungal properties without the use of toxic
          chemical post-treatments.
        </p>
        <p className={home.body}>
          <strong className="text-[#2c2c2c]">Reduced Operational Intensity:</strong> Intelligent textiles
          reduce the need for aggressive washing and chemical intensity, extending the lifespan of hospital
          linens and ensuring compliance with healthcare hygiene standards.
        </p>
      </>
    ),
  },
  {
    num: '4',
    image: '/sense-tex/smart-city.png',
    imageAlt: 'Smart cities and circular infrastructure',
    title: 'Smart Cities & Circular Infrastructure',
    points: (
      <>
        <p className={home.body}>
          <strong className="text-[#2c2c2c]">Intelligent Piping Systems:</strong> Sensing-capable textile
          conduits acting as continuous monitoring systems for leak detection, stress mapping, and
          predictive maintenance in urban utilities.
        </p>
        <p className={home.body}>
          <strong className="text-[#2c2c2c]">Circular Flow Management:</strong> Digital Product Passports
          (DPP) link material flows to municipal circular infrastructure, enabling zero-waste city networks.
        </p>
        <p className={home.body}>
          <strong className="text-[#2c2c2c]">Self-Healing Materials:</strong> Damage-responsive textiles
          designed to restore structural integrity, significantly reducing long-term maintenance costs
          for public infrastructure.
        </p>
      </>
    ),
  },
  {
    num: '5',
    image: '/sense-tex/fashion.png',
    imageAlt: 'Fashion and culture ethical performance',
    title: 'Fashion & Culture: Ethical Performance',
    points: (
      <>
        <p className={home.body}>
          <strong className="text-[#2c2c2c]">Premium Storytelling:</strong> Provides brands with full
          lifecycle transparency and &quot;compliance-by-design&quot; to meet emerging ESG and EPR
          regulations.
        </p>
        <p className={home.body}>
          <strong className="text-[#2c2c2c]">Circular Collections:</strong> Sense-Tex™ materials are
          designed for mechanical reversibility, allowing high-value garments to be separated and
          recovered back into pure fiber-to-fiber cycles.
        </p>
        <p className={home.body}>
          <strong className="text-[#2c2c2c]">Functional Fashion:</strong> Merges high-spec utility with
          aesthetic design, creating apparel that protects against environmental toxins while maintaining
          comfort and breathability.
        </p>
      </>
    ),
  },
];

function ApplicationDetailCard({ num, image, imageAlt, title, points }: ApplicationDetail) {
  return (
    <article
      className={`overflow-hidden transition-shadow duration-300 hover:shadow-md ${home.cardLight}`}
    >
      <div className="flex flex-col gap-5 p-5 sm:flex-row sm:gap-6 sm:p-6 lg:p-7">
        <div className="relative mx-auto h-28 w-full max-w-[12rem] shrink-0 overflow-hidden rounded-xl bg-[#faf8f5] ring-1 ring-[#C8A882]/20 sm:mx-0 sm:h-32 sm:w-36 lg:h-36 lg:w-40">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 80vw, 160px"
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#C8A882]/12 ring-1 ring-[#C8A882]/25 sm:h-10 sm:w-10">
              <span className="text-sm font-bold text-[#8f7350]">{num}</span>
            </div>
            <div className="min-w-0">
              <p className={home.cardEyebrowLight}>Application {num}</p>
              <h3 className="mt-1.5 text-base font-semibold leading-snug text-[#2c2c2c] sm:text-lg">
                {title}
              </h3>
            </div>
          </div>

          <div className={`mt-4 w-10 sm:mt-5 ${home.ruleBar}`} aria-hidden />
          <div className="mt-4 space-y-3 sm:mt-5 sm:space-y-3.5">{points}</div>
        </div>
      </div>
    </article>
  );
}

export default function ApplicationsDetailSection() {
  return (
    <section className={`border-t border-[#ebe6dc] bg-white ${home.section}`}>
      <div className={`${home.container} max-w-5xl`}>
        <div className="space-y-6 sm:space-y-7">
          {applications.map((app) => (
            <ApplicationDetailCard key={app.num} {...app} />
          ))}
        </div>
      </div>
    </section>
  );
}
