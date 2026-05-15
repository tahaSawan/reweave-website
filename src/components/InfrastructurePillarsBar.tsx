import Image from 'next/image';
import type { ReactNode } from 'react';
import { home } from '@/lib/homePageStyle';

function SystemIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-11 w-11 text-[#C8A882]" aria-hidden>
      <rect x="7" y="9" width="34" height="24" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M17 37h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <rect x="13" y="26" width="6" height="7" rx="0.5" stroke="currentColor" strokeWidth="1.75" />
      <rect x="21" y="22" width="6" height="11" rx="0.5" stroke="currentColor" strokeWidth="1.75" />
      <rect x="29" y="18" width="6" height="15" rx="0.5" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

const pillars: {
  label: string;
  icon: ReactNode;
}[] = [
  {
    label: 'Material',
    icon: (
      <Image
        src="/pillar-material.png"
        alt=""
        width={48}
        height={48}
        className="h-11 w-11 object-contain"
      />
    ),
  },
  {
    label: 'System',
    icon: <SystemIcon />,
  },
  {
    label: 'Lifecycle',
    icon: (
      <Image
        src="/pillar-lifecycle.png"
        alt=""
        width={48}
        height={48}
        className="h-11 w-11 object-contain"
      />
    ),
  },
  {
    label: 'Robotics',
    icon: (
      <Image
        src="/pillar-robotics.png"
        alt=""
        width={48}
        height={48}
        className="h-11 w-11 object-contain"
      />
    ),
  },
  {
    label: 'Data',
    icon: (
      <Image
        src="/pillar-data.png"
        alt=""
        width={48}
        height={48}
        className="h-11 w-11 object-contain"
      />
    ),
  },
];

function PillarItem({
  label,
  icon,
  showDivider,
}: {
  label: string;
  icon: ReactNode;
  showDivider?: boolean;
}) {
  return (
    <div
      className={`flex flex-1 flex-col items-center justify-center px-3 py-8 sm:px-4 sm:py-10 ${
        showDivider ? 'border-t border-[#C8A882]/25 sm:border-t-0 sm:border-l' : ''
      }`}
    >
      <div className="mb-4 flex h-12 items-center justify-center">{icon}</div>
      <p className={`text-center ${home.pillarBarLabel}`}>
        {label}
      </p>
    </div>
  );
}

export default function InfrastructurePillarsBar() {
  return (
    <section className="border-b border-[#C8A882]/22 bg-[#1a1715]">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-stretch">
          {pillars.map((pillar, index) => (
            <PillarItem
              key={pillar.label}
              label={pillar.label}
              icon={pillar.icon}
              showDivider={index > 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
