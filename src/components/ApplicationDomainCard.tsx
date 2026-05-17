import Image from 'next/image';

export const applicationDomains = [
  {
    image: '/sense-tex/defense.png',
    title: 'Defense / Technical',
    body: 'Circular infrastructure textiles, waste reduction, DPP-linked material flows.',
  },
  {
    image: '/sense-tex/space.png',
    title: 'Space / ISRU / Habitat',
    body: 'Protective textiles, ballistic solutions, chemical resistance, mission-critical reliability.',
  },
  {
    image: '/sense-tex/smart-city.png',
    title: 'Smart Cities',
    body: 'Radiation protection, extreme temperature resistance, lightweight, closed-loop compatible.',
  },
  {
    image: '/sense-tex/fashion.png',
    title: 'Fashion & Culture',
    body: 'Radiation protection, extreme temperature resistance, lightweight, closed-loop compatible.',
  },
  {
    image: '/sense-tex/healthcare.png',
    title: 'Healthcare',
    body: 'Hygienic, antimicrobial, solutions, reduced washing and chemical intensity.',
  },
] as const;

export function ApplicationDomainCard({
  image,
  title,
  body,
}: {
  image: string;
  title: string;
  body: string;
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#e0d9cf] bg-white shadow-sm transition-all duration-300 hover:border-[#C8A882]/60 hover:shadow-[0_8px_24px_-8px_rgba(44,44,44,0.12)]">
      <div className="flex items-start gap-3 border-b border-[#ebe4d9] bg-[#faf8f5] p-3 sm:p-3.5">
        <div className="relative h-[4.5rem] w-[4.5rem] shrink-0 overflow-hidden rounded-lg ring-1 ring-[#2c2c2c]/8 sm:h-20 sm:w-20">
          <Image
            src={image}
            alt=""
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="80px"
          />
        </div>
        <h4 className="pt-0.5 text-[10px] font-bold uppercase leading-snug tracking-[0.07em] text-[#2c2c2c] sm:text-[11px]">
          {title}
        </h4>
      </div>
      <p className="flex-1 p-3 text-left text-[10px] leading-relaxed text-[#4a443c] sm:p-3.5 sm:text-[11px] sm:leading-snug">
        {body}
      </p>
    </article>
  );
}
