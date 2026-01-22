import {
  AboutHero,
  OurStory,
  TeamSection,
  ValuesSection,
  JoinSection,
} from '@/components';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Tecurity - our mission to revolutionize credit and lending. Meet our team and discover our values driving fintech innovation.',
  openGraph: {
    title: 'About Us | Tecurity',
    description:
      'Learn about Tecurity - our mission, team, and values driving fintech innovation.',
    url: 'https://tecurity.tech/about',
  },
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <OurStory />
      <TeamSection />
      <ValuesSection />
      <JoinSection />
    </main>
  );
}
