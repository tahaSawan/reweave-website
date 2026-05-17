import type { ComponentType } from 'react';
import { home } from '@/lib/homePageStyle';

const steps: {
  title: string;
  body: string;
  icon: ComponentType<{ className?: string }>;
}[] = [
  {
    title: 'Enter Simple',
    body: 'Start with intelligent materials that perform in extreme conditions.',
    icon: MaterialIcon,
  },
  {
    title: 'Scale Strategic',
    body: 'Utilize data orchestration to ensure transparency and absolute compliance.',
    icon: DataIcon,
  },
  {
    title: 'Build Sovereign',
    body: 'Achieve strategic independence through autonomous, closed-loop systems.',
    icon: SovereignIcon,
  },
];

function MaterialIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M4 8 12 4l8 4v8l-8 4-8-4V8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M12 12v8M4 8l8 4 8-4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function DataIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="6" cy="6" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="18" cy="6" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 6h8M7 8l4 8M17 8l-4 8" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function SovereignIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M12 4a12 12 0 0 1 0 16M12 4a12 12 0 0 0 0 16M4 12h16"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function LogicCard({
  title,
  body,
  icon: Icon,
}: {
  title: string;
  body: string;
  icon: ComponentType<{ className?: string }>;
}) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#1c1916] p-6 text-left shadow-[0_4px_24px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C8A882]/35 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] sm:p-7">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C8A882]/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden
      />

      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#C8A882]/12 text-[#C8A882] ring-1 ring-[#C8A882]/25 transition-all duration-300 group-hover:bg-[#C8A882]/20 group-hover:ring-[#C8A882]/45 group-hover:shadow-[0_0_20px_rgba(200,168,130,0.15)]">
        <Icon className="h-5 w-5" />
      </span>

      <h3 className="mt-6 text-sm font-bold leading-snug text-white sm:text-base">{title}</h3>
      <div className="mt-3 h-px w-8 bg-[#C8A882]/60" aria-hidden />
      <p className="mt-4 text-sm leading-relaxed text-[#c9bfb0]">{body}</p>
    </article>
  );
}

export default function CoreLogicSection() {
  return (
    <section className="bg-[#141210] py-12 sm:py-14 lg:py-16">
      <div className={home.container}>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-xl font-semibold leading-snug tracking-tight text-white sm:text-2xl">
            The Core Logic
          </h2>
          <div className={`mx-auto mt-4 w-14 ${home.ruleBar}`} />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-3 sm:gap-6">
          {steps.map((item) => (
            <LogicCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
