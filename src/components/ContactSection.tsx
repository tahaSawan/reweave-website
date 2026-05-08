import Link from 'next/link';

export default function ContactSection() {
  return (
    <section className="bg-[#1a1a1a] text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-wide">
          Have a Project or Collaboration in Mind?<br/>
          <span className="text-[#d4c7b8]">Let's Connect!</span>
        </h2>
        <p className="text-lg text-white/80 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
          Ready to explore how our innovative textile technologies can transform your industry? 
          Get in touch with our team today.
        </p>
        <Link 
          href="/contact" 
          className="bg-white text-[#1a1a1a] px-8 py-4 rounded-full font-light tracking-wide hover:bg-[#d4c7b8] transition-colors inline-block text-lg"
        >
          Contact Now
        </Link>
      </div>
    </section>
  );
}