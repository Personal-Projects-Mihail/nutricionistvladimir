import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nutricionistvladimir.com';
  
  const routes = [
    '',
    '/about',
    '/services',
    '/testimonials',
    '/pricing',
    '/booking',
    '/contact',
    '/privacy',
    '/terms',
  ];

  const macedonianRoutes = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
    alternates: {
      languages: {
        mk: `${baseUrl}${route}`,
        en: `${baseUrl}/en${route}`,
      },
    },
  }));

  const englishRoutes = routes.map((route) => ({
    url: `${baseUrl}/en${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
    alternates: {
      languages: {
        mk: `${baseUrl}${route}`,
        en: `${baseUrl}/en${route}`,
      },
    },
  }));

  return [...macedonianRoutes, ...englishRoutes];
}
