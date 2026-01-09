import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateMetadata } from '@/lib/metadata';
import { generateBreadcrumbSchema, safeJsonLd } from '@/lib/structured-data';

export const metadata: Metadata = generateMetadata('en', {
  title: 'Testimonials | Vladimir Nutritionist',
  description:
    'Read real success stories from clients who achieved their goals with professional nutrition consultations from nutritionist Vladimir.',
  path: '/testimonials',
  keywords: [
    'testimonials',
    'clients',
    'success',
    'stories',
    'results',
    'transformation',
  ],
});

export default function TestimonialsPageEN() {
  const breadcrumbSchema = generateBreadcrumbSchema('en', [
    { name: 'Testimonials', path: '/testimonials' },
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
                Client Testimonials
              </h1>
              <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
                Real stories from people who achieved their health goals
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Testimonial 1 */}
              <div className="card">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
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
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text">Maria S.</h3>
                    <p className="text-sm text-text-tertiary">
                      Weight Loss | 3 months
                    </p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-primary"
                      aria-hidden="true"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-text-secondary italic mb-4">
                  "Vladimir helped me lose 12kg in a healthy and sustainable way. Most
                  importantly, I learned how to eat properly and not return to old
                  habits. The personalized approach was key to my success."
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-primary font-medium">
                    ✓ Lost 12kg | ✓ Improved energy | ✓ Healthy habits
                  </p>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="card">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
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
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text">Alexander M.</h3>
                    <p className="text-sm text-text-tertiary">
                      Sports Nutrition | 4 months
                    </p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-primary"
                      aria-hidden="true"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-text-secondary italic mb-4">
                  "As an active athlete, I needed someone who understands sports
                  nutrition. Vladimir created a precise plan that helped me improve my
                  performance and recovery. Results are visible both on the field and in
                  the gym."
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-primary font-medium">
                    ✓ Improved performance | ✓ Faster recovery | ✓ +3kg muscle mass
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center space-y-6 card bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <h2 className="text-3xl md:text-4xl font-bold text-text">
                Ready for Your Success Story?
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
