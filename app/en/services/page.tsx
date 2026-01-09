import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateMetadata } from '@/lib/metadata';
import { generateBreadcrumbSchema, safeJsonLd } from '@/lib/structured-data';

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
        <section className="section bg-gradient-to-b from-background to-background-secondary">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text leading-tight">
                Services
              </h1>
              <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
                Professional nutrition consultations tailored to your unique needs
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="card border-primary/20">
                <h2 className="text-3xl font-bold text-text mb-4">
                  1-on-1 Nutrition Consultation
                </h2>
                <p className="text-lg text-text-secondary mb-6">
                  Personalized care to achieve your health goals
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-text mb-3">
                      What's Included:
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
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
                          className="text-primary flex-shrink-0 mt-1"
                          aria-hidden="true"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <div>
                          <p className="font-medium text-text">
                            Detailed Nutrition Analysis
                          </p>
                          <p className="text-sm text-text-secondary">
                            Complete review of your current diet, lifestyle, and health history
                          </p>
                        </div>
                      </li>

                      <li className="flex items-start gap-3">
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
                          className="text-primary flex-shrink-0 mt-1"
                          aria-hidden="true"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <div>
                          <p className="font-medium text-text">
                            Personalized Nutrition Plan
                          </p>
                          <p className="text-sm text-text-secondary">
                            Adapted to your goals, preferences, allergies, and lifestyle
                          </p>
                        </div>
                      </li>

                      <li className="flex items-start gap-3">
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
                          className="text-primary flex-shrink-0 mt-1"
                          aria-hidden="true"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <div>
                          <p className="font-medium text-text">
                            Ongoing Support
                          </p>
                          <p className="text-sm text-text-secondary">
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
        </section>

        <section className="section">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center space-y-6 card bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <h2 className="text-3xl md:text-4xl font-bold text-text">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-text-secondary">
                Book your first consultation and take the first step toward better health
              </p>
              <Link href="/en/booking" className="btn-primary text-lg px-8 py-4 inline-flex">
                Book Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer lang="en" />
    </>
  );
}
