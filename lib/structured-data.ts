/**
 * Structured Data (JSON-LD) generators for SEO
 * All data is rendered server-side for optimal indexing
 */

import { siteConfig } from './metadata';

// Person Schema for the nutritionist
export function generatePersonSchema(lang: 'mk' | 'en') {
  const name = lang === 'mk' ? 'Владимир' : 'Vladimir';
  const jobTitle = lang === 'mk' ? 'Регистриран нутриционист' : 'Registered Nutritionist';
  const description =
    lang === 'mk'
      ? 'Лиценциран нутриционист со специјализација во намалување на тежина, здравје на цревата, хормонален баланс и спортска исхрана.'
      : 'Licensed nutritionist specializing in weight loss, gut health, hormonal balance, and sports nutrition.';

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: name,
    jobTitle: jobTitle,
    description: description,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'MK',
      addressRegion: 'North Macedonia',
    },
    knowsAbout: [
      'Nutrition',
      'Dietetics',
      'Weight Loss',
      'Gut Health',
      'Hormonal Balance',
      'Sports Nutrition',
      'Family Nutrition',
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'University Name', // Replace with actual university
    },
  };
}

// Medical Business Schema
export function generateMedicalBusinessSchema(lang: 'mk' | 'en') {
  const name =
    lang === 'mk'
      ? 'Нутриционист Владимир - Консултации за исхрана'
      : 'Vladimir Nutritionist - Nutrition Consultations';
  const description = lang === 'mk' ? siteConfig.description.mk : siteConfig.description.en;

  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: name,
    description: description,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    areaServed: {
      '@type': 'Country',
      name: 'North Macedonia',
    },
    medicalSpecialty: 'Nutrition',
    availableService: [
      {
        '@type': 'MedicalProcedure',
        name: lang === 'mk' ? 'Консултација за исхрана' : 'Nutrition Consultation',
        description:
          lang === 'mk'
            ? '1-на-1 консултација за исхрана со лиценциран нутриционист'
            : '1-on-1 nutrition consultation with licensed nutritionist',
      },
    ],
  };
}

// Website Schema
export function generateWebsiteSchema(lang: 'mk' | 'en') {
  const name = lang === 'mk' ? 'Нутриционист Владимир' : 'Vladimir Nutritionist';
  const description = lang === 'mk' ? siteConfig.description.mk : siteConfig.description.en;
  const basePath = lang === 'mk' ? '' : '/en';

  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: name,
    description: description,
    url: lang === 'mk' ? siteConfig.url : `${siteConfig.url}/en`,
    inLanguage: lang === 'mk' ? 'mk' : 'en',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteConfig.url}${basePath}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

// Breadcrumb Schema Generator
export function generateBreadcrumbSchema(
  lang: 'mk' | 'en',
  items: Array<{ name: string; path: string }>
) {
  const basePath = lang === 'mk' ? '' : '/en';
  const homeLabel = lang === 'mk' ? 'Почетна' : 'Home';

  const breadcrumbItems = [
    {
      '@type': 'ListItem',
      position: 1,
      name: homeLabel,
      item: `${siteConfig.url}${basePath}`,
    },
    ...items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 2,
      name: item.name,
      item: `${siteConfig.url}${basePath}${item.path}`,
    })),
  ];

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems,
  };
}

// FAQ Schema Generator
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// Utility: Safely stringify JSON-LD (escapes </ to prevent script injection)
export function safeJsonLd(data: object): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}
