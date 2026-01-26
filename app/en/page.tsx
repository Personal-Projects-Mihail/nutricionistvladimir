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
        <section className="section bg-atmosphere-warm">
          <div className="container-custom">
            {/* Section Header */}
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary-800 dark:text-primary-300 text-sm font-semibold mb-4">
                My Expertise
              </span>
              <h2 className="font-serif mb-6">
                Areas of Specialization
              </h2>
              <p className="lead">
                Personalized nutrition solutions based on scientific evidence and individual needs
              </p>
            </div>

            <div className="space-y-32">
              {/* Specialty 1 - Weight Loss */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-800 text-xs font-semibold">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="3"/>
                    </svg>
                    Popular Service
                  </div>
                  
                  <h3 className="font-serif text-text">
                    Body Weight Loss
                  </h3>
                  
                  <p className="text-text-secondary text-lg leading-relaxed">
                    Weight loss without extreme diets or starvation. Focus on long-term habits and a healthy relationship with nutrition.
                  </p>
                  
                  <ul className="space-y-4">
                    {[
                      'Personalized nutrition plan',
                      'Appropriate caloric deficit',
                      'Muscle mass maintenance',
                      'Psychological support'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3 group">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                          <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-text-secondary">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    href="/en/services" 
                    className="inline-flex items-center gap-2 text-primary-700 font-semibold hover:gap-3 transition-all group"
                  >
                    <span>Learn More</span>
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
                
                <div className="relative lg:order-last">
                  <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-primary-600/5 rounded-[3rem] blur-2xl"></div>
                  <div className="relative aspect-square rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900 dark:to-primary-800 p-8 shadow-lg">
                    <Image
                      src="/front-page/weight_loss_illustration.svg"
                      alt="Sustainable weight loss"
                      width={600}
                      height={600}
                      className="object-contain w-full h-full animate-float-gentle"
                    />
                  </div>
                </div>
              </div>

              {/* Specialty 2 - Insulin Resistance */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-accent/15 to-primary/10 rounded-[3rem] blur-2xl"></div>
                  <div className="relative aspect-square rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-accent/10 to-primary-100 dark:from-accent/5 dark:to-primary-900 p-8 shadow-lg">
                    <Image
                      src="/front-page/gut_health_illustration.svg"
                      alt="Nutrition for insulin resistance"
                      width={600}
                      height={600}
                      className="object-contain w-full h-full animate-float-organic"
                    />
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent-dark text-xs font-semibold">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                    </svg>
                    Specialization
                  </div>
                  
                  <h3 className="font-serif text-text">
                    Nutrition for insulin resistance
                  </h3>
                  
                  <p className="text-text-secondary text-lg leading-relaxed">
                    Personalized nutrition without starvation and complete elimination of sugars. Building healthy habits and improving health.
                  </p>
                  
                  <ul className="space-y-4">
                    {[
                      'Personalized nutrition plan',
                      'Nutrition habit coaching',
                      'Addressing insulin resistance',
                      'Continuous monitoring'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3 group">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                          <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-text-secondary">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    href="/en/services" 
                    className="inline-flex items-center gap-2 text-primary-700 font-semibold hover:gap-3 transition-all group"
                  >
                    <span>Learn More</span>
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Specialty 3 - Metabolic Conditions */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-800 text-xs font-semibold">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z" clipRule="evenodd" />
                    </svg>
                    Comprehensive Care
                  </div>
                  
                  <h3 className="font-serif text-text">
                    Nutrition for metabolic conditions
                  </h3>
                  
                  <p className="text-text-secondary text-lg leading-relaxed">
                    Diabetes, high cholesterol, elevated triglycerides, and fatty liver. Nutrition is key for these metabolic conditions.
                  </p>
                  
                  <ul className="space-y-4">
                    {[
                      'Continuous monitoring на метаболичката состојба',
                      'Personalized nutrition based on needs',
                      'Improving metabolic health',
                      'Coordination with physician'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3 group">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                          <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-text-secondary">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    href="/en/services" 
                    className="inline-flex items-center gap-2 text-primary-700 font-semibold hover:gap-3 transition-all group"
                  >
                    <span>Learn More</span>
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
                
                <div className="relative lg:order-last">
                  <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/10 rounded-[3rem] blur-2xl"></div>
                  <div className="relative aspect-square rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-primary-50 to-accent/10 dark:from-primary-900 dark:to-accent/5 p-8 shadow-lg">
                    <Image
                      src="/front-page/sports_nutrition_illustration.svg"
                      alt="Nutrition for metabolic conditions"
                      width={600}
                      height={600}
                      className="object-contain w-full h-full animate-float-gentle delay-200"
                    />
                  </div>
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
