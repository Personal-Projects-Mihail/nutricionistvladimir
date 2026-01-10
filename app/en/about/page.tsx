import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateMetadata } from '@/lib/metadata';
import {
  generatePersonSchema,
  generateBreadcrumbSchema,
  safeJsonLd,
} from '@/lib/structured-data';
import HeartHealthIcon from '@/components/icons/HeartHealthIcon';
import BrainIcon from '@/components/icons/BrainIcon';
import EnergyIcon from '@/components/icons/EnergyIcon';
import BalanceIcon from '@/components/icons/BalanceIcon';
import AppleIcon from '@/components/icons/AppleIcon';
import HealthJourneyIllustration from '@/components/illustrations/HealthJourneyIllustration';

export const metadata: Metadata = generateMetadata('en', {
  title: 'About Me | Vladimir Nutritionist',
  description:
    'Meet Vladimir, a registered nutritionist specializing in evidence-based nutrition. Education, experience, and nutrition philosophy.',
  path: '/about',
  keywords: [
    'nutritionist biography',
    'qualifications',
    'education',
    'experience',
    'registered nutritionist',
  ],
});

export default function AboutPageEN() {
  const personSchema = generatePersonSchema('en');
  const breadcrumbSchema = generateBreadcrumbSchema('en', [
    { name: 'About', path: '/about' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }}
      />

      <Header lang="en" />

      <main id="main-content">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-emerald-50/50 to-background pt-20 pb-32">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-glow"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-primary/20 text-primary-800 dark:text-primary-200 px-4 py-2 rounded-full text-sm font-medium">
                  <HeartHealthIcon className="w-5 h-5 text-primary" />
                  Your Health Partner
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  About <span className="text-primary">Me</span>
                </h1>

                <p className="text-xl text-text-secondary leading-relaxed">
                  Learn more about my journey, education, and passion for helping people achieve optimal health
                </p>
              </div>

              <div className="relative">
                <HealthJourneyIllustration className="w-full h-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* Personal Story Section */}
        <section className="section bg-gradient-to-br from-primary/5 via-green-50/50 to-background">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative h-96 bg-gradient-to-br from-primary/20 to-emerald-100/30 rounded-3xl overflow-hidden p-12 flex items-center justify-center">
                  <div className="relative z-10 text-center space-y-4">
                    <div className="inline-block p-6 bg-white rounded-2xl shadow-xl">
                      <AppleIcon className="w-20 h-20 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary">Passion for Nutrition</h3>
                  </div>
                </div>

                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-text">My Story</h2>
                  <div className="space-y-4 text-text-secondary">
                    <p className="text-lg">
                      Welcome! I'm Vladimir, a registered nutritionist with a passion
                      for helping people achieve optimal health through nutrition science.
                    </p>
                    <p className="text-lg">
                      My journey into nutrition began from personal experience with the
                      power of proper nutrition to transform health. This passion
                      motivated me to dedicate my life to studying nutrition science and
                      helping others achieve their health goals.
                    </p>
                    <p className="text-lg">
                      Today I work with clients across North Macedonia, providing
                      evidence-based consultations tailored to their unique needs,
                      lifestyle, and health goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="section bg-gradient-to-br from-primary/20 to-primary/5">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-block mb-4">
                  <span className="bg-gradient-to-br from-emerald-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Professional Credentials
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-text">
                  Education & Qualifications
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group relative overflow-hidden bg-gradient-to-br from-primary/10 to-emerald-50 border-2 border-primary/20 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-600 rounded-2xl shadow-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                        aria-hidden="true"
                      >
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                        <path d="M6 12v5c3 3 9 3 12 0v-5" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-text mb-2">
                        Registered Nutritionist
                      </h3>
                      <p className="text-text-secondary mb-2">
                        [University Name]
                      </p>
                      <p className="text-sm text-text-tertiary">
                        Specialization in clinical nutrition, nutritional biochemistry,
                        and weight management
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group relative overflow-hidden bg-gradient-to-br from-emerald-50 to-green-100 border-2 border-emerald-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl shadow-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                        aria-hidden="true"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <path d="M9 12l2 2 4-4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-text mb-2">
                        Registration & License
                      </h3>
                      <p className="text-text-secondary mb-2">
                        Registered nutritionist in North Macedonia
                      </p>
                      <p className="text-sm text-text-tertiary">
                        Active membership in professional nutrition associations
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-gradient-to-br from-primary/5 via-green-50/50 to-background">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto relative overflow-hidden rounded-3xl p-12 bg-gradient-to-br from-primary via-primary-500 to-primary-700 text-white shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>
              
              <div className="relative z-10 text-center space-y-6">
                <BrainIcon className="w-16 h-16 text-white mx-auto" />
                <h2 className="text-3xl md:text-4xl font-bold">
                  Ready to Work Together?
                </h2>
                <p className="text-lg text-white/90">
                  Book a consultation and start your journey to better health
                </p>
                <Link 
                  href="/en/booking" 
                  className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Book Consultation
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer lang="en" />
    </>
  );
}
