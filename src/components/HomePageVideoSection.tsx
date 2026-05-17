export default function HomePageVideoSection() {
  return (
    <section className="w-full bg-black" aria-label="RE:WEAVE infrastructure overview">
      <video
        className="block w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      >
        <source src="/home-page-video.mp4" type="video/mp4" />
      </video>
    </section>
  );
}
