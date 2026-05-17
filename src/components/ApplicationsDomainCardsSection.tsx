import { home } from '@/lib/homePageStyle';
import { ApplicationDomainCard, applicationDomains } from '@/components/ApplicationDomainCard';

const domains = applicationDomains.filter((app) => !app.title.startsWith('Defense'));

export default function ApplicationsDomainCardsSection() {
  return (
    <section className="border-t border-[#ebe6dc] bg-[#faf8f5] py-10 sm:py-12 lg:py-14">
      <div className={`${home.container} max-w-7xl`}>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3 lg:grid-cols-4 lg:gap-3">
          {domains.map((app) => (
            <ApplicationDomainCard key={app.title} {...app} />
          ))}
        </div>
      </div>
    </section>
  );
}
