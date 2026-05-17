import type { ReactNode } from 'react';
import { home } from '@/lib/homePageStyle';

type PageHeroSectionProps = {
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  lead: string;
};

export default function PageHeroSection({ eyebrow, title, subtitle, lead }: PageHeroSectionProps) {
  return (
    <section className="relative isolate min-h-[min(68vh,640px)] overflow-hidden pt-24">
      <div
        className="absolute inset-0 bg-cover bg-[position:center_35%]"
        style={{ backgroundImage: 'url(/system-hero.png)' }}
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/75"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_50%_35%,transparent_20%,rgba(0,0,0,0.5)_85%)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex min-h-[min(68vh,640px)] max-w-5xl flex-col justify-center px-6 py-14 text-center sm:px-8 lg:px-12">
        <p className={`mx-auto mb-3 max-w-2xl ${home.heroEyebrow}`}>{eyebrow}</p>
        <h1 className={`mx-auto max-w-3xl ${home.heroTitle}`}>{title}</h1>
        <div className={`mx-auto mt-5 h-px w-14 ${home.ruleBar}`} />
        <p className="mx-auto mt-5 max-w-2xl text-base font-medium text-white/90 sm:text-lg">{subtitle}</p>
        <p className={`mx-auto mt-5 max-w-3xl text-pretty ${home.heroLead}`}>{lead}</p>
      </div>
    </section>
  );
}
