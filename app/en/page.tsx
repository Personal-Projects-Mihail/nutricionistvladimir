import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollProcessEN from '@/components/ScrollProcessEN';
import SocialMediaLinks from '@/components/SocialMediaLinks';
import { generateMetadata } from '@/lib/metadata';
import {
  generatePersonSchema,
  generateWebsiteSchema,
  safeJsonLd,
} from '@/lib/structured-data';

export const metadata: Metadata = generateMetadata('en', {
  title: 'Vladimir Nutritionist | Registered Nutritionist in Macedonia',
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
        {/* HERO SECTION - Atmospheric & Elegant */}
        <section className="relative overflow-hidden bg-atmosphere-depth pt-8 pb-16">
          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="blur-circle blur-circle-green w-[400px] h-[400px] absolute top-10 -right-24 animate-float-organic"></div>
            <div className="blur-circle blur-circle-accent w-[300px] h-[300px] absolute bottom-10 -left-24 animate-float-gentle delay-300"></div>
            <div className="absolute top-0 right-0 w-full h-full bg-pattern-dots opacity-30"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content - Staggered Reveal */}
              <div className="space-y-8">
                <div className="inline-block animate-reveal-down">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary-800 dark:text-primary-300 text-sm font-semibold">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Registered Nutritionist
                  </span>
                </div>

                <h1 className="font-serif animate-reveal-up delay-100">
                  Your journey to{' '}
                  <span className="text-gradient relative">
                    healthy nutrition
                    <svg className="absolute -bottom-3 left-0 w-full opacity-60" viewBox="0 0 400 20" fill="none" preserveAspectRatio="none">
                      <path d="M2 15 Q 200 5, 398 15" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-primary-500"/>
                    </svg>
                  </span>{' '}
                  starts here
                </h1>

                <p className="lead animate-reveal-up delay-200">
                  Professional consultations based on evidence. Personalized approach for long-term results and lasting habit change.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 animate-reveal-up delay-300">
                  <Link 
                    href="/en/booking" 
                    className="btn-primary group"
                  >
                    <span>Book Consultation</span>
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                  <Link 
                    href="/en/about" 
                    className="btn-secondary group"
                  >
                    <span>Get to Know Me</span>
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap items-center gap-6 pt-4 animate-reveal-up delay-400">
                  <div className="flex items-center gap-2 text-text-secondary">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">100+ Clients</span>
                  </div>
                  <div className="flex items-center gap-2 text-text-secondary">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">2+ Years Experience</span>
                  </div>
                  <div className="flex items-center gap-2 text-text-secondary">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                    </svg>
                    <span className="text-sm font-medium">100% Personalized</span>
                  </div>
                </div>
              </div>

              {/* Right Image - Elegant Float */}
              <div className="relative animate-scale-in delay-200 max-w-md mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-600/10 rounded-[2rem] blur-2xl -z-10 animate-pulse-glow"></div>
                <div className="relative overflow-hidden rounded-[2rem] border border-primary/20 shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5 pointer-events-none"></div>
                  <Image
                    src="/front-page/vladimir.png"
                    alt="Vladimir - Registered Nutritionist"
                    width={500}
                    height={500}
                    className="object-cover w-full h-auto object-top block"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SPECIALTY AREAS - Creative Split Layout */}
        <section className="section bg-gradient-subtle">
          <div className="container-custom">
            <div className="text-center mb-16 animate-reveal-up">
              <span className="inline-block bg-gradient-to-r from-primary/10 to-green-400/10 text-primary-800 dark:text-primary-300 px-5 py-2 rounded-full text-sm font-semibold mb-6 border border-primary/10">
                My Expertise
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
                Areas of Specialization
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Evidence-based nutrition approaches tailored to your unique needs
              </p>
            </div>

            <div className="space-y-0">
              {/* Weight Loss - Image Right */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
                <div className="space-y-6">
                  <h3 className="text-3xl md:text-4xl font-bold text-text">
                    Body Weight Loss
                  </h3>
                  <p className="text-lg text-text-secondary leading-relaxed">
                    Weight loss without extreme diets or starvation. Focus on long-term habits and a healthy relationship with nutrition.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-text-secondary">Personalized nutrition plan</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-text-secondary">Appropriate caloric deficit</span>
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
                <div className="relative h-[300px] md:h-[400px] lg:h-[600px] bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl overflow-hidden flex items-center justify-center">
                  <Image
                    src="/front-page/weight_loss_illustration.svg"
                    alt="Illustration for sustainable weight loss - human body with balanced nutrition and metabolism"
                    width={600}
                    height={600}
                    className="object-contain w-full h-full p-6"
                  />
                </div>
              </div>

              {/* Insulin Resistance - Image Left */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
                <div className="relative h-[300px] md:h-[400px] lg:h-[600px] bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl overflow-hidden flex items-center justify-center order-2 lg:order-1">
                  <Image
                    src="/front-page/gut_health_illustration.svg"
                    alt="Illustration for insulin resistance nutrition - balanced diet and healthy habits"
                    width={600}
                    height={600}
                    className="object-contain w-full h-full p-6"
                  />
                </div>
                <div className="space-y-6 order-1 lg:order-2">
                  <h3 className="text-3xl md:text-4xl font-bold text-text">
                    Nutrition for Insulin Resistance
                  </h3>
                  <p className="text-lg text-text-secondary leading-relaxed">
                    Personalized nutrition without starvation and complete elimination of sugars. Building healthy habits and improving health.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-text-secondary">Personalized nutrition plan</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-text-secondary">Nutritional habit advice</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-text-secondary">Addressing insulin resistance</span>
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

              {/* Metabolic Conditions - Image Right */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
                <div className="space-y-6">
                  <h3 className="text-3xl md:text-4xl font-bold text-text">
                    Nutrition for Metabolic Conditions
                  </h3>
                  <p className="text-lg text-text-secondary leading-relaxed">
                    Diabetes, high cholesterol, elevated triglycerides, and fatty liver. For such metabolic conditions, nutrition is key. Evidence-based nutrition and strategic problem solving.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-text-secondary">Continuous monitoring of metabolic status</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-text-secondary">Personalized nutrition based on client needs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-text-secondary">Improving metabolic health</span>
                    </li>
                  </ul>
                  <Link href="/en/services" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                    Learn More
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
                <div className="relative h-[300px] md:h-[400px] lg:h-[600px] bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl overflow-hidden flex items-center justify-center">
                  <Image
                    src="/front-page/sports_nutrition_illustration.svg"
                    alt="Illustration for nutrition for metabolic conditions - healthy diet for diabetes, cholesterol, and triglycerides"
                    width={600}
                    height={600}
                    className="object-contain w-full h-full p-6"
                  />
                </div>
              </div>
            </div>

            {/* View All Services */}
            <div className="text-center mt-8">
              <Link href="/en/services" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
                View All Services
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* SOCIAL MEDIA LINKS */}
        <SocialMediaLinks lang="en" />

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
