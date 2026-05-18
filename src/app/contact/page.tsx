import PageHeroSection from '@/components/PageHeroSection';
import ContactFormSection from '@/components/contact/ContactFormSection';
import { home } from '@/lib/homePageStyle';

export default function ContactPage() {
  return (
    <>
      <PageHeroSection
        eyebrow="Contact"
        title={
          <>
            Get in <span className={`font-semibold ${home.accentGold}`}>Touch</span>
          </>
        }
        subtitle="Let's explore how sovereign textile infrastructure can support your mission"
        lead="Whether you're planning a pilot, partnership, or strategic engagement — share your goals and our team will respond with clarity on next steps."
      />

      <ContactFormSection />
    </>
  );
}
