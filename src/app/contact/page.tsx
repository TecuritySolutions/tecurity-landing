import ContactSection from '@/components/UI/ContactSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Tecurity. Contact us for inquiries about our credit solutions, lending services, or partnership opportunities.',
  openGraph: {
    title: 'Contact Us | Tecurity',
    description:
      'Get in touch with Tecurity for credit solutions and fintech services.',
    url: 'https://tecurity.tech/contact',
  },
};

export default function ContactPage() {
  return (
    <main>
      <ContactSection />
    </main>
  );
}
