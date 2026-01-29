import type { Metadata } from 'next';
import { generateMetadata, siteConfig } from '@/lib/metadata';

export const metadata: Metadata = generateMetadata('en', {
  title: 'Vladimir Nutritionist | Registered Nutritionist in North Macedonia',
  description: siteConfig.description.en,
  path: '',
  keywords: [
    'nutritionist',
    'dietitian',
    'nutrition',
    'weight loss',
    'digestive health',
    'hormonal balance',
    'sports nutrition',
    'family nutrition',
    'North Macedonia',
    'Macedonia',
  ],
});

export default function EnglishLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
