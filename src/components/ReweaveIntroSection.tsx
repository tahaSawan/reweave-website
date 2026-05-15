import Image from 'next/image';
import { home } from '@/lib/homePageStyle';

export default function ReweaveIntroSection() {
  return (
    <section className={`border-t border-[#ebe6dc] bg-white ${home.section}`}>
      <div className={`${home.container} max-w-5xl`}>
        <div className="grid items-center gap-8 md:grid-cols-[1.1fr_0.9fr] md:gap-10 lg:gap-12">
          <div>
            <p className={home.displayBrand}>Re:Weave</p>
            <h2 className={`mt-3 ${home.h2}`}>
              Circular Material Infrastructure for Earth and Space
            </h2>

            <div className={`mt-5 space-y-4 ${home.body}`}>
              <p>
                Re:Weave™ is a system for turning waste into resources, continuously. It transforms
                textile waste, biological residues, and mineral inputs into new materials through a
                closed-loop infrastructure that integrates textiles, biology, robotics, and data.
              </p>
              <p>
                Designed for both industrial systems and space environments, Re:Weave enables
                low-energy, chemical-free material recovery, where nothing is lost, only transformed.
              </p>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-[300px] sm:max-w-[340px]">
              <Image
                src="/reweave-cycle-diagram.png"
                alt="Re:Weave closed-loop system: Hybrid Smart Textiles, AI-Assisted Soil Regeneration, Modular Circular Systems, and Circular Robotics & Automation"
                width={560}
                height={560}
                className="h-auto w-full"
                sizes="(max-width: 768px) 90vw, 340px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
