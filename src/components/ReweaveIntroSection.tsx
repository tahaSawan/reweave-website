import Image from 'next/image';

export default function ReweaveIntroSection() {
  return (
    <section className="border-t border-[#ebe6dc] bg-white py-10 sm:py-12">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <div className="grid items-center gap-8 md:grid-cols-[1.1fr_0.9fr] md:gap-10 lg:gap-12">
          <div>
            <p className="text-3xl font-light tracking-tight text-[#b5a48a] sm:text-[2.125rem]">
              Re:Weave
            </p>
            <h2 className="mt-3 text-lg font-bold leading-snug text-[#2c2c2c] sm:text-xl">
              Circular Material Infrastructure for Earth and Space
            </h2>

            <div className="mt-5 space-y-4 text-sm leading-relaxed text-[#4a443c] sm:text-[0.9375rem] sm:leading-[1.7]">
              <p>
                Re:Weave™ is a system for turning waste into resources, continuously. It transforms
                textile waste, biological residues, and mineral inputs into new materials through a
                closed-loop infrastructure that integrates textiles, biology, robotics, and data.
              </p>
              <p>
                Designed for both industrial systems and space environments, Re:Weave enables
                low-energy, chemical-free material recovery, where nothing is lost, only
                transformed.
              </p>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-[300px] overflow-hidden rounded-xl border border-[#e8dcc6] bg-[#f5f2ed] p-2.5 shadow-[0_4px_20px_rgba(44,38,30,0.06)] sm:max-w-[340px] sm:p-3">
              <div className="overflow-hidden rounded-lg bg-white">
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
      </div>
    </section>
  );
}
