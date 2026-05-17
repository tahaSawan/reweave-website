import WhyItMattersSection from '@/components/WhyItMattersSection';
import ResourceSovereigntySection from '@/components/ResourceSovereigntySection';

export default function WhyItMattersResourceBand() {
  return (
    <section className="border-t border-[#ebe6dc]">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-stretch">
        <WhyItMattersSection variant="split" />
        <ResourceSovereigntySection variant="split" />
      </div>
    </section>
  );
}
