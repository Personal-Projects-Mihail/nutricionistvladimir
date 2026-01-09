import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateMetadata } from '@/lib/metadata';
import {
  generatePersonSchema,
  generateWebsiteSchema,
  safeJsonLd,
} from '@/lib/structured-data';

export const metadata: Metadata = generateMetadata('en', {
  title: 'Vladimir Nutritionist | Registered Nutritionist in North Macedonia',
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
        {/* Hero Section */}
        <section className="section bg-gradient-to-b from-background to-background-secondary">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text leading-tight">
                Your journey to{' '}
                <span className="text-primary">healthy nutrition</span> starts here
              </h1>
              <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
                Registered nutritionist specializing in evidence-based nutrition science.
                Professional consultations to improve your health.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link href="/en/booking" className="btn-primary text-lg px-8 py-4">
                  Book Consultation
                </Link>
                <Link href="/en/about" className="btn-secondary text-lg px-8 py-4">
                  Get to Know Me
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Specialization Areas */}
        <section className="section">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
                Areas of Specialization
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Professional help tailored to your unique needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Weight Loss */}
              <div className="card">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
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
                    className="text-primary"
                    aria-hidden="true"
                  >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-text mb-2">
                  Weight Loss
                </h3>
                <p className="text-text-secondary">
                  Evidence-based strategies for sustainable weight loss without
                  extreme diets or starvation.
                </p>
              </div>

              {/* Gut Health */}
              <div className="card">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
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
                    className="text-primary"
                    aria-hidden="true"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-text mb-2">
                  Gut Health
                </h3>
                <p className="text-text-secondary">
                  Improve your digestive health and address bloating, IBS, and
                  other disorders.
                </p>
              </div>

              {/* Hormonal Balance */}
              <div className="card">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
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
                    className="text-primary"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-text mb-2">
                  Hormonal Balance
                </h3>
                <p className="text-text-secondary">
                  Natural support for hormonal balance through proper nutrition
                  and lifestyle changes.
                </p>
              </div>

              {/* Chronic Conditions */}
              <div className="card">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
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
                    className="text-primary"
                    aria-hidden="true"
                  >
                    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-text mb-2">
                  Chronic Conditions
                </h3>
                <p className="text-text-secondary">
                  Nutritional support for diabetes, cardiovascular disease, and
                  other chronic conditions.
                </p>
              </div>

              {/* Sports Nutrition */}
              <div className="card">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
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
                    className="text-primary"
                    aria-hidden="true"
                  >
                    <path d="M6.5 6.5l11 11M21 21l-1-1M3 3l1 1M18 22l4-4M2 6l4-4M12 12l1 1" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-text mb-2">
                  Sports Nutrition
                </h3>
                <p className="text-text-secondary">
                  Optimize your performance, recovery, and muscle building with
                  precise sports nutrition.
                </p>
              </div>

              {/* Family Nutrition */}
              <div className="card">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
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
                    className="text-primary"
                    aria-hidden="true"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-text mb-2">
                  Family Nutrition
                </h3>
                <p className="text-text-secondary">
                  Healthy eating habits for the whole family, including children
                  and adolescents.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Me */}
        <section className="section bg-background-secondary">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-text">
                Why Choose Me?
              </h2>
              <p className="text-lg text-text-secondary">
                Evidence-based professional care with a personalized approach
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                      aria-hidden="true"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <polyline points="10 9 9 9 8 9" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-text">Science-Based</h3>
                  <p className="text-sm text-text-secondary">
                    Latest research and scientifically proven methods
                  </p>
                </div>

                <div className="text-center space-y-2">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                      aria-hidden="true"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <line x1="20" y1="8" x2="20" y2="14" />
                      <line x1="23" y1="11" x2="17" y2="11" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-text">Personalized Approach</h3>
                  <p className="text-sm text-text-secondary">
                    Customized plans tailored to your needs
                  </p>
                </div>

                <div className="text-center space-y-2">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                      aria-hidden="true"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-text">Long-Term Results</h3>
                  <p className="text-sm text-text-secondary">
                    Sustainable changes, not quick fixes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
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
