import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollProcess from '@/components/ScrollProcess';
import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import SpecialtyAreas from '@/components/home/SpecialtyAreas';
import CTASection from '@/components/home/CTASection';
import { generateMetadata } from '@/lib/metadata';
import {
  generatePersonSchema,
  generateWebsiteSchema,
  safeJsonLd,
} from '@/lib/structured-data';

export const metadata: Metadata = generateMetadata('mk', {
  title: 'Нутриционист Владимир | Регистриран Нутриционист во Северна Македонија',
  description:
    'Професионални консултации за исхрана со регистриран нутриционист. Специјализиран за намалување на тежина, здравје на цревата, хормонален баланс и спортска исхрана.',
  path: '',
  keywords: [
    'нутриционист',
    'диететичар',
    'исхрана',
    'намалување на тежина',
    'здравје на цревата',
    'хормонален баланс',
    'спортска исхрана',
  ],
});

export default function HomePage() {
  const personSchema = generatePersonSchema('mk');
  const websiteSchema = generateWebsiteSchema('mk');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(websiteSchema) }}
      />

      <Header lang="mk" />

      <main id="main-content">
        <HeroSection />
        <StatsSection />
        <SpecialtyAreas />
        <ScrollProcess />
        <CTASection />
      </main>

      <Footer lang="mk" />
    </>
  );
}
