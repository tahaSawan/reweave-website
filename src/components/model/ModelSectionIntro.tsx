import type { ReactNode } from 'react';
import { home } from '@/lib/homePageStyle';

type ModelSectionIntroProps = {
  index: string;
  title: ReactNode;
  lead?: string;
};

export default function ModelSectionIntro({ index, title, lead }: ModelSectionIntroProps) {
  return (
    <div className="mb-10 text-center sm:mb-12">
      <p className={home.eyebrow}>{index}</p>
      <h2 className={`mx-auto mt-3 max-w-3xl ${home.h2}`}>{title}</h2>
      <div className={`mx-auto mt-5 w-14 ${home.ruleBar}`} />
      {lead ? <p className={`mx-auto mt-5 max-w-3xl ${home.lead}`}>{lead}</p> : null}
    </div>
  );
}
