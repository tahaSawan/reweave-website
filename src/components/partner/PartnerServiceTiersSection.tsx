import ModelSectionIntro from '@/components/model/ModelSectionIntro';
import { home } from '@/lib/homePageStyle';
import {
  CheckIcon,
  ExpandIcon,
  FoundationIcon,
  IntegrateIcon,
  SovereignIcon,
} from '@/components/partner/partnerIcons';

const tiers = [
  {
    name: 'Foundation: Build the Base',
    price: '€25K per engagement',
    Icon: FoundationIcon,
    features: [
      {
        label: 'Readiness Assessment',
        body: 'Establish compliance baselines and design your strategic roadmap.',
      },
      {
        label: 'Regulatory Support',
        body: 'Navigate ESPR, DPP, and EPR requirements with expert guidance.',
      },
    ],
    dark: false,
  },
  {
    name: 'Integrate: Connect & Optimize',
    price: '€75K per engagement',
    Icon: IntegrateIcon,
    features: [
      {
        label: 'System Activation',
        body: 'Deploy data platforms and traceability dashboards.',
      },
      {
        label: 'Operational Optimization',
        body: 'Integrate materials into existing supply chains with digital twinning and circular strategy.',
      },
    ],
    dark: false,
  },
  {
    name: 'Expand: Scale & Innovate',
    price: '€150K per engagement',
    Icon: ExpandIcon,
    features: [
      {
        label: 'Market Access',
        body: 'Unlock new sectors and drive circular performance.',
      },
      {
        label: 'Advanced Analytics',
        body: 'Leverage AI insights to lead in sustainability and performance.',
      },
    ],
    dark: false,
  },
  {
    name: 'Sovereign Partner: Transform & Lead',
    price: 'Custom Partnership',
    Icon: SovereignIcon,
    features: [
      {
        label: 'Strategic Alliance',
        body: 'A full-service partnership for building sovereign infrastructure and long-term industry leadership.',
      },
    ],
    dark: true,
  },
] as const;

function TierFeature({
  label,
  body,
  onDark,
}: {
  label: string;
  body: string;
  onDark?: boolean;
}) {
  return (
    <div className="flex items-start gap-3">
      <span
        className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md ${
          onDark ? 'bg-[#C8A882]/15 text-[#C8A882]' : 'bg-[#C8A882]/12 text-[#8f7350]'
        }`}
      >
        <CheckIcon className="h-3.5 w-3.5" />
      </span>
      <p className={`text-sm leading-relaxed sm:text-[0.9375rem] ${onDark ? 'text-[#c9bfb0]' : 'text-[#4a443c]'}`}>
        <span className={`font-semibold ${onDark ? 'text-white' : 'text-[#2c2c2c]'}`}>{label}:</span> {body}
      </p>
    </div>
  );
}

export default function PartnerServiceTiersSection() {
  return (
    <section className={`bg-[#f5f1ea] ${home.section}`}>
      <div className={home.container}>
        <ModelSectionIntro
          index="1."
          title={
            <>
              Modular <span className={home.accentGold}>Service Tiers</span>
            </>
          }
          lead="Our services are engineered for flexibility and long-term impact, delivering ROI through risk mitigation and reduced operational costs."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:gap-5">
          {tiers.map((tier) => {
            const { Icon } = tier;
            const shell = tier.dark ? home.cardImperative : home.cardLight;

            return (
              <article
                key={tier.name}
                className={`flex h-full flex-col transition-all duration-300 hover:border-[#C8A882]/35 ${
                  tier.dark
                    ? 'shadow-[0_12px_36px_rgba(0,0,0,0.18)] hover:shadow-[0_16px_44px_rgba(0,0,0,0.22)]'
                    : 'hover:shadow-[0_12px_32px_-10px_rgba(44,44,44,0.14)]'
                } ${shell}`}
              >
                <div className="mb-4 flex items-center gap-3">
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                      tier.dark ? 'bg-[#C8A882]/15 text-[#C8A882]' : 'bg-[#C8A882]/12 text-[#8f7350]'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className={tier.dark ? home.cardEyebrowDark : home.cardEyebrowLight}>
                    Engagement tier
                  </p>
                </div>

                <h3
                  className={`text-base font-bold leading-snug sm:text-lg ${
                    tier.dark ? 'text-white' : 'text-[#2c2c2c]'
                  }`}
                >
                  {tier.name}{' '}
                  <span className={tier.dark ? 'text-[#C8A882]' : home.accentGold}>({tier.price})</span>
                </h3>

                <div className="mt-5 flex flex-1 flex-col space-y-4">
                  {tier.features.map((feature) => (
                    <TierFeature
                      key={feature.label}
                      label={feature.label}
                      body={feature.body}
                      onDark={tier.dark}
                    />
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
