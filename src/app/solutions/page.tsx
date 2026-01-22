import SolutionsHero from '@/components/UI/SolutionsHero';
import SolutionsGrid from '@/components/UI/SolutionsGrid';
import HowItWorksSection from '@/components/UI/HowItWorksSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solutions',
  description:
    'Explore Tecurity credit and lending solutions. Smart loans, digital banking, and innovative financial products tailored to your needs.',
  openGraph: {
    title: 'Solutions | Tecurity',
    description:
      'Explore our credit solutions - smart loans, digital banking, and innovative financial products.',
    url: 'https://tecurity.tech/solutions',
  },
};

export default function SolutionsPage() {
  return (
    <main>
      <SolutionsHero />
      <SolutionsGrid />
      <HowItWorksSection />
    </main>
  );
}
