import Image from 'next/image';

const imageAlt =
  'Resource Sovereignty in an Unstable World. We are closing the loop. Global resource crisis statistics and the RE:WEAVE systemic response for Earth and Space.';

type ResourceSovereigntySectionProps = {
  variant?: 'default' | 'split';
};

export default function ResourceSovereigntySection({
  variant = 'default',
}: ResourceSovereigntySectionProps) {
  if (variant === 'split') {
    return (
      <div className="flex h-full min-h-0 items-center justify-center bg-[#06080c]">
        <h2 className="sr-only">
          Resource Sovereignty in an Unstable World — We are closing the loop
        </h2>
        <Image
          src="/resource-sovereignty.png"
          alt={imageAlt}
          width={1080}
          height={692}
          className="block h-auto max-h-full w-full object-contain"
          sizes="(max-width: 1024px) 100vw, 50vw"
          quality={90}
        />
      </div>
    );
  }

  return (
    <section className="border-t border-[#1a1f28] bg-[#06080c]">
      <h2 className="sr-only">
        Resource Sovereignty in an Unstable World — We are closing the loop
      </h2>
      <div className="mx-auto w-full max-w-[1400px]">
        <Image
          src="/resource-sovereignty.png"
          alt={imageAlt}
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
