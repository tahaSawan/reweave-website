import Image from 'next/image';

export default function ResourceSovereigntySection() {
  return (
    <section className="border-t border-[#1a1f28] bg-[#06080c]">
      <h2 className="sr-only">
        Resource Sovereignty in an Unstable World — We are closing the loop
      </h2>
      <div className="mx-auto w-full max-w-[1400px]">
        <Image
          src="/resource-sovereignty.png"
          alt="Resource Sovereignty in an Unstable World. We are closing the loop. Global resource crisis statistics and the RE:WEAVE systemic response for Earth and Space."
          width={1080}
          height={692}
          className="h-auto w-full"
          sizes="(max-width: 1400px) 100vw, 1400px"
          quality={90}
        />
      </div>
    </section>
  );
}
