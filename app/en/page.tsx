import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollProcessEN from '@/components/ScrollProcessEN';
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
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-primary/10 to-background pt-4 pb-16">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-glow"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          </div>

          <div className="container-custom relative z-10 py-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6 pt-4">
                <div className="inline-flex items-center gap-2 bg-primary/20 text-primary-800 dark:text-primary-200 px-4 py-2 rounded-full text-sm font-medium">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Registered Nutritionist
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  Your journey to{' '}
                  <span className="text-primary relative inline-block">
                    healthy nutrition
                    <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                      <path d="M2 10 Q150 2, 298 10" stroke="#A8DF8E" strokeWidth="3" strokeLinecap="round" fill="none"/>
                    </svg>
                  </span>{' '}
                  starts here
                </h1>
                
                <p className="text-xl text-text-secondary leading-relaxed">
                  Professional consultations based on evidence. Personalized approach for long-term results.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link href="/en/booking" className="group relative overflow-hidden bg-primary hover:bg-primary-600 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2">
                    <span>Book Consultation</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                  <Link href="/en/about" className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2">
                    Get to Know Me
                  </Link>
                </div>

                <div className="flex flex-wrap items-center gap-6 pt-8">
                  <div className="flex items-center gap-2">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                    <span className="text-sm font-medium text-text-secondary">200+ Satisfied Clients</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-medium text-text-secondary">4.9/5 Average Rating</span>
                  </div>
                </div>
              </div>

              {/* Right Illustration */}
              <div className="relative">
                <div className="relative z-10">
                  <div className="max-w-lg mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full blur-2xl"></div>
                    <div className="relative rounded-3xl overflow-hidden">
                      <Image
                        src="/front-page/vladimir.png"
                        alt="Vladimir - Registered Nutritionist"
                        width={600}
                        height={600}
                        className="object-cover w-full h-auto"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS BAR */}
        <section className="py-12 bg-gradient-to-r from-primary via-primary-500 to-primary-600 text-white">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">200+</div>
                <div className="text-white/90">Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">95%</div>
                <div className="text-white/90">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">5+</div>
                <div className="text-white/90">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">4.9</div>
                <div className="text-white/90">Average Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* SPECIALTY AREAS - Split Layout */}
        <section className="section">
          <div className="container-custom">
            <div className="text-center mb-16">
              <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                My Expertise
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-text mb-4">
                Areas of Specialization
              </h2>
            </div>

            <div className="space-y-12">
              {/* Weight Loss - Image Right */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h3 className="text-3xl md:text-4xl font-bold text-text">
                    Weight Loss
                  </h3>
                  <p className="text-lg text-text-secondary leading-relaxed">
                    Evidence-based science for sustainable weight loss without extreme diets or starvation. Focus on long-term habits and a healthy relationship with food.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-text-secondary">Caloric deficit with satisfaction</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-text-secondary">Metabolism management</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-text-secondary">Muscle mass maintenance</span>
                    </li>
                  </ul>
                  <Link href="/en/services" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                    Learn More
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
                <div className="relative h-[600px] bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl overflow-hidden flex items-center justify-center">
                  <Image
                    src="/front-page/weight_loss_illustration.svg"
                    alt="Illustration for sustainable weight loss - human body with balanced nutrition and metabolism"
                    width={600}
                    height={600}
                    className="object-contain w-full h-full p-6"
                  />
                </div>
              </div>

              {/* Gut Health - Image Left */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative h-[600px] bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl overflow-hidden flex items-center justify-center lg:order-1">
                  <Image
                    src="/front-page/gut_health_illustration.svg"
                    alt="Illustration for gut health - digestive system with probiotics and balanced microbiome"
                    width={600}
                    height={600}
                    className="object-contain w-full h-full p-6"
                  />
                </div>
                <div className="space-y-6 lg:order-2">
                  <h3 className="text-3xl md:text-4xl font-bold text-text">
                    Gut Health
                  </h3>
                  <p className="text-lg text-text-secondary leading-relaxed">
                    Improve your digestive system health and resolve issues with bloating, IBS, and other disorders. Natural approach to balanced microbiome.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-text-secondary">Microbiome optimization</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-text-secondary">IBS management</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-text-secondary">Trigger identification</span>
                    </li>
                  </ul>
                  <Link href="/en/services" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                    Learn More
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Sports Nutrition - Image Right */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h3 className="text-3xl md:text-4xl font-bold text-text">
                    Sports Nutrition
                  </h3>
                  <p className="text-lg text-text-secondary leading-relaxed">
                    Optimize your performance, recovery, and muscle building with precise sports nutrition. Ideal for athletes and active people.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-text-secondary">Macro and micro nutrients</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-text-secondary">Nutrition around training</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-text-secondary">Recovery strategies</span>
                    </li>
                  </ul>
                  <Link href="/en/services" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                    Learn More
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
                <div className="relative h-[600px] bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl overflow-hidden flex items-center justify-center">
                  <Image
                    src="/front-page/sports_nutrition_illustration.svg"
                    alt="Illustration for sports nutrition - athlete with optimal nutrition and performance"
                    width={600}
                    height={600}
                    className="object-contain w-full h-full p-6"
                  />
                </div>
              </div>
            </div>

            {/* View All Services */}
            <div className="text-center mt-16">
              <Link href="/en/services" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
                View All Services
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* PROCESS ROADMAP - Scroll-based highlighting */}
        <ScrollProcessEN />

        {/* CTA SECTION - Full Width Vibrant */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-500 to-primary-700 py-16">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold">
                Ready to Achieve Your Goals?
              </h2>
              <p className="text-xl text-white/90">
                Book your first consultation and start your journey to better health today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link href="/en/booking" className="bg-white text-primary hover:bg-gray-50 font-semibold text-lg px-10 py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center gap-2">
                  Book Consultation
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link href="/en/contact" className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold text-lg px-10 py-4 rounded-xl transition-all duration-300 inline-flex items-center justify-center">
                  Contact Us
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
