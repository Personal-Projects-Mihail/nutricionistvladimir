import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateMetadata } from '@/lib/metadata';
import { generateBreadcrumbSchema, safeJsonLd } from '@/lib/structured-data';
import ServicesHeroIllustration from '@/components/illustrations/ServicesHeroIllustration';
import WeightLossIcon from '@/components/icons/WeightLossIcon';
import GutHealthIcon from '@/components/icons/GutHealthIcon';
import DumbbellIcon from '@/components/icons/DumbbellIcon';

export const metadata: Metadata = generateMetadata('en', {
  title: 'Services | Vladimir Nutritionist',
  description:
    '1-on-1 nutrition consultations with a registered nutritionist. Specialized services for weight loss, gut health, hormonal balance, and sports nutrition.',
  path: '/services',
  keywords: [
    'nutrition consultations',
    'nutrition services',
    'meal plan',
    'weight loss',
    'sports nutrition',
  ],
});

export default function ServicesPageEN() {
  const breadcrumbSchema = generateBreadcrumbSchema('en', [
    { name: 'Services', path: '/services' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }}
      />

      <Header lang="en" />

      <main id="main-content">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-emerald-50/50 to-background">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl -ml-40 -mb-40"></div>
          
          <div className="container-custom relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center section">
              <div className="space-y-6">
                <div className="inline-block">
                  <span className="bg-gradient-to-br from-primary to-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Professional Nutrition Services
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text leading-tight">
                  Services
                </h1>
                <p className="text-lg md:text-xl text-text-secondary">
                  Professional nutrition consultations tailored to your unique needs
                </p>
              </div>
              
              <div className="relative">
                <ServicesHeroIllustration className="w-full h-auto animate-float" />
              </div>
            </div>
          </div>
        </section>

        {/* Main Service Section */}
        <section className="section bg-gradient-to-br from-primary/5 via-green-50/50 to-background">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-500 to-primary-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>
                
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold mb-4">
                    1-on-1 Nutrition Consultation
                  </h2>
                  <p className="text-lg text-white/90 mb-8">
                    Personalized care to achieve your health goals
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">
                        What's Included:
                      </h3>
                      <ul className="space-y-4">
                        <li className="flex items-start gap-3">
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
                            className="text-white flex-shrink-0 mt-1"
                            aria-hidden="true"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <div>
                            <p className="font-semibold text-white">
                              Detailed Nutrition Analysis
                            </p>
                            <p className="text-sm text-white/80">
                              Complete review of your current diet, lifestyle, and health history
                            </p>
                          </div>
                        </li>

                        <li className="flex items-start gap-3">
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
                            className="text-white flex-shrink-0 mt-1"
                            aria-hidden="true"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <div>
                            <p className="font-semibold text-white">
                              Personalized Nutrition Plan
                            </p>
                            <p className="text-sm text-white/80">
                              Adapted to your goals, preferences, allergies, and lifestyle
                            </p>
                          </div>
                        </li>

                        <li className="flex items-start gap-3">
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
                            className="text-white flex-shrink-0 mt-1"
                            aria-hidden="true"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <div>
                            <p className="font-semibold text-white">
                              Ongoing Support
                            </p>
                            <p className="text-sm text-white/80">
                              Regular follow-ups and email support between sessions
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specialized Services Section */}
        <section className="section bg-gradient-to-br from-primary/20 to-primary/5">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-block mb-4">
                  <span className="bg-gradient-to-br from-emerald-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Specialized Areas
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-text">
                  Areas of Expertise
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="group relative overflow-hidden bg-gradient-to-br from-primary/10 to-emerald-50 border-2 border-primary/20 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-600 rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4">
                    <WeightLossIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-text mb-2">
                    Weight Loss
                  </h3>
                  <p className="text-sm text-text-secondary">
                    Sustainable weight management strategies
                  </p>
                </div>

                <div className="group relative overflow-hidden bg-gradient-to-br from-emerald-50 to-green-100 border-2 border-emerald-200 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4">
                    <GutHealthIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-text mb-2">
                    Gut Health
                  </h3>
                  <p className="text-sm text-text-secondary">
                    Digestive health and IBS management
                  </p>
                </div>

                <div className="group relative overflow-hidden bg-gradient-to-br from-primary/10 to-emerald-50 border-2 border-primary/20 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4">
                    <DumbbellIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-text mb-2">
                    Sports Nutrition
                  </h3>
                  <p className="text-sm text-text-secondary">
                    Performance optimization for athletes
                  </p>
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
                <h2 className="text-3xl md:text-4xl font-bold">
                  Ready to Get Started?
                </h2>
                <p className="text-lg text-white/90">
                  Book your first consultation and take the first step toward better health
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
