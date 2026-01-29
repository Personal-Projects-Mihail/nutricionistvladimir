import { Metadata } from 'next';

const siteConfig = {
  name: 'Нутриционист Владимир | Vladimir Nutritionist',
  domain: 'nutricionistvladimir.com',
  url: 'https://nutricionistvladimir.com',
  email: 'nutricionistvladimir@gmail.com',
  phone: '+389 75 453 434',
  description: {
    mk: 'Регистриран нутриционист во Северна Македонија. Консултации за намалување на тежина, Дигестивно здравје, хормонален баланс, спортска исхрана и семејна исхрана.',
    en: 'Registered nutritionist in North Macedonia. Consultations for weight loss, digestive health, hormonal balance, sports nutrition, and family nutrition.',
  },
  author: 'Владимир | Vladimir',
  location: 'North Macedonia',
};

export function generateMetadata(
  lang: 'mk' | 'en',
  page: {
    title: string;
    description: string;
    path: string;
    keywords?: string[];
  }
): Metadata {
  const baseUrl = siteConfig.url;
  const fullPath = lang === 'mk' ? page.path : `/en${page.path}`;
  const canonicalUrl = `${baseUrl}${fullPath}`;
  const alternateUrl = lang === 'mk' ? `${baseUrl}/en${page.path}` : `${baseUrl}${page.path}`;

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords || [],
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.author,
    publisher: siteConfig.author,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        mk: lang === 'mk' ? canonicalUrl : `${baseUrl}${page.path}`,
        en: lang === 'en' ? canonicalUrl : `${baseUrl}/en${page.path}`,
        'x-default': `${baseUrl}${page.path}`,
      },
    },
    openGraph: {
      type: 'website',
      locale: lang === 'mk' ? 'mk_MK' : 'en_US',
      url: canonicalUrl,
      title: page.title,
      description: page.description,
      siteName: siteConfig.name,
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: page.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
      images: [`${baseUrl}/og-image.jpg`],
      creator: '@nutricionistvladimir',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
    },
  };
}

export { siteConfig };
