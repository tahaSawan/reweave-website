import ModelSectionIntro from '@/components/model/ModelSectionIntro';
import { home } from '@/lib/homePageStyle';

const transitions = [
  {
    label: 'From Disruption to Direction',
    body: 'Moving from reacting to risk to building inherent resilience.',
  },
  {
    label: 'From Linear to Sovereign',
    body: 'Transitioning from dependent supply chains to autonomous, closed-loop systems.',
  },
  {
    label: 'From Waste to Value',
    body: 'Turning waste streams into high-performance resources through biological and mechanical intelligence.',
  },
] as const;

function ArrowIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ShiftSolutionSection() {
  return (
    <section className={`bg-[#f5f1ea] ${home.section}`}>
      <div className={home.container}>
        <ModelSectionIntro
          index="3."
          title={
            <>
              The Solution:{' '}
              <span className={home.accentGold}>Sense-Tex-Infrastructure as Direction</span>
            </>
          }
          lead="Sense-Tex transforms these challenges into a competitive advantage by replacing fragmented supply chains with sovereign material infrastructure."
        />

        <div className="grid gap-4 md:grid-cols-3 md:gap-5">
          {transitions.map((item) => (
            <article
              key={item.label}
              className={`flex flex-col shadow-[0_12px_36px_rgba(0,0,0,0.12)] transition-all duration-300 hover:border-[#C8A882]/35 hover:shadow-[0_16px_44px_rgba(0,0,0,0.18)] ${home.cardImperative}`}
            >
              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-[#C8A882]/15 text-[#C8A882]">
                <ArrowIcon className="h-4 w-4" />
              </div>
              <h3 className={home.imperativeCardTitle}>{item.label}</h3>
              <p className={home.imperativeCardBody}>{item.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-3.5 rounded-2xl bg-[#1a1a1a] px-4 py-4 text-white sm:mt-10 sm:gap-4 sm:px-5 sm:py-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#C8A882]/40 text-[#C8A882]">
            <ArrowIcon className="h-5 w-5" />
          </div>
          <div className="h-10 w-px shrink-0 bg-white/20" aria-hidden />
          <p className="text-sm font-medium leading-relaxed text-white/95 sm:text-[0.9375rem]">
            The future belongs to systems that are resilient, regenerative, and sovereign by design.
          </p>
        </div>
      </div>
    </section>
  );
}
