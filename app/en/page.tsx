import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollProcessEN from '@/components/ScrollProcessEN';
import HeroSectionEN from '@/components/home/HeroSectionEN';
import StatsSectionEN from '@/components/home/StatsSectionEN';
import SpecialtyAreasEN from '@/components/home/SpecialtyAreasEN';
import CTASectionEN from '@/components/home/CTASectionEN';
import { generateMetadata } from '@/lib/metadata';
import {
  generatePersonSchema,
  generateWebsiteSchema,
  safeJsonLd,
} from '@/lib/structured-data';

export const metadata: Metadata = generateMetadata('en', {
  title: 'Vladimir Nutritionist | Registered Nutritionist in Macedonia',
  description:
    'Professional nutrition consultations with a registered nutritionist. Specializing in weight loss, gut health, hormonal balance, and sports nutrition.',
  path: '',
  keywords: [
    'nutritionist',
    'dietitian',
    'nutrition',
    'weight loss',
    'gut health',
    'hormonal balance',
    'sports nutrition',
  ],
});

export default function HomePageEN() {
  const personSchema = generatePersonSchema('en');
  const websiteSchema = generateWebsiteSchema('en');

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

      <Header lang="en" />

      <main id="main-content">
        <HeroSectionEN />
        <StatsSectionEN />
        <SpecialtyAreasEN />
        <ScrollProcessEN />
        <CTASectionEN />
      </main>

      <Footer lang="en" />
    </>
  );
}
