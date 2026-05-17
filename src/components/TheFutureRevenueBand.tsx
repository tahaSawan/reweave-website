import { home } from '@/lib/homePageStyle';
import TheFutureSection from '@/components/TheFutureSection';
import FourRevenueLayersSection from '@/components/FourRevenueLayersSection';

export default function TheFutureRevenueBand() {
  return (
    <section className="border-t border-[#ebe6dc] bg-[#f5f1ea]">
      <div className={`${home.container} py-8 sm:py-10 lg:py-12`}>
        <div className="grid min-h-0 grid-cols-1 items-stretch gap-8 lg:grid-cols-[minmax(0,38%)_minmax(0,1fr)] lg:gap-10 xl:gap-12">
          <TheFutureSection variant="split" />
          <FourRevenueLayersSection variant="split" />
        </div>
      </div>
    </section>
  );
}
