import Link from 'next/link';
import { home } from '@/lib/homePageStyle';

const categories = [
  'Manufacturing & Fashion',
  'Healthcare Systems',
  'Defense & Disaster Response',
  'Urban Infrastructure',
  'Space Missions and Habitats',
] as const;

const creamPanel = 'rounded-2xl border border-[#e6dfd4] bg-[#f5f1e9] shadow-sm';

export default function ApplicationsFrameworkSection() {
  return (
    <section className="border-t border-[#ebe6dc] bg-white pb-10 pt-16 sm:pb-12 sm:pt-20 lg:pb-14 lg:pt-24">
      <div className={`${home.container} max-w-5xl`}>
        <div className="flex flex-col items-center gap-4 text-center">
          <div className={`${creamPanel} w-full max-w-md px-8 py-3.5 sm:max-w-lg sm:px-10 sm:py-4`}>
            <p className="text-base font-bold text-[#2c2c2c] sm:text-lg">Applications</p>
          </div>
          <p className={`max-w-2xl ${home.body} font-medium text-[#2c2c2c]`}>
            Re:Weave enables circular systems across:
          </p>
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border border-[#2c2c2c]/20 bg-[#1a1a1a]">
          <div className="grid grid-cols-1 divide-y divide-white/15 sm:grid-cols-2 lg:grid-cols-5 lg:divide-x lg:divide-y-0">
            {categories.map((label) => (
              <div
                key={label}
                className="flex min-h-[3.5rem] items-center justify-center px-3 py-3.5 text-center sm:min-h-[4rem] sm:px-2"
              >
                <span className="text-xs font-medium leading-snug text-white sm:text-[13px]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid items-center gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-10">
          <h2 className="text-balance text-2xl font-bold leading-tight text-[#2c2c2c] sm:text-3xl">
            A System Shift:
          </h2>
          <div className={`${creamPanel} px-6 py-6 sm:px-8 sm:py-7`}>
            <p className={`${home.body} font-medium text-[#2c2c2c]`}>
              Re:Weave reframes textiles from products into infrastructure.
            </p>
            <p className={`mt-4 ${home.body} text-[#4a443c]`}>
              From: <span aria-hidden>→</span> Disposable Materials &nbsp; To:{' '}
              <span aria-hidden>→</span> Regenerative Systems
            </p>
          </div>
        </div>

        <div className={`mt-8 ${creamPanel} px-6 py-6 sm:mt-10 sm:px-8 sm:py-8`}>
          <p className={`${home.body} leading-relaxed text-[#2c2c2c]`}>
            Re:Weave is not a single solution it is a framework for building circular systems across
            industries and environments. It provides a pathway from linear production to circular
            infrastructure, allowing companies to transition at their own pace while maintaining
            performance, compliance, and economic viability.{' '}
            <Link href="/system" className={`font-semibold ${home.accent} hover:underline`}>
              Explore Sense-Tex
            </Link>{' '}
            or{' '}
            <Link href="/contact" className={`font-semibold ${home.accent} hover:underline`}>
              contact TTAB
            </Link>{' '}
            to begin integration.
          </p>
        </div>
      </div>
    </section>
  );
}
