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
        <section className="section bg-gradient-to-b from-background to-background-secondary">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text leading-tight">
                About Me
              </h1>
              <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
                Learn more about my journey, education, and approach to nutrition
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="card">
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-3xl font-bold text-text mb-6">My Story</h2>
                  <div className="space-y-4 text-text-secondary">
                    <p>
                      Welcome! I'm Vladimir, a registered nutritionist with a passion
                      for helping people achieve optimal health through nutrition science.
                    </p>
                    <p>
                      My journey into nutrition began from personal experience with the
                      power of proper nutrition to transform health. This passion
                      motivated me to dedicate my life to studying nutrition science and
                      helping others achieve their health goals.
                    </p>
                    <p>
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

        <section className="section bg-background-secondary">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-text text-center mb-12">
                Education & Qualifications
              </h2>

              <div className="space-y-6">
                <div className="card">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
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

                <div className="card">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
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

        <section className="section">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center space-y-6 card bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <h2 className="text-3xl md:text-4xl font-bold text-text">
                Ready to Work Together?
              </h2>
              <p className="text-lg text-text-secondary">
                Book a consultation and start your journey to better health
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
