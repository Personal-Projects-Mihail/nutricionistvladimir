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
        {/* VIBRANT HERO SECTION */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-emerald-50/50 to-background pt-12 pb-16">
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

        {/* PERSONAL STORY WITH GRADIENT */}
        <section className="section">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative h-96 bg-gradient-to-br from-primary/20 to-emerald-100/30 dark:from-primary/20 dark:to-emerald-900/20 rounded-3xl overflow-hidden p-12 flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <svg className="w-64 h-64" viewBox="0 0 100 100" fill="none">
                      <circle cx="50" cy="50" r="40" fill="currentColor" className="text-primary" />
                      <circle cx="40" cy="43" r="5" fill="white" />
                      <circle cx="60" cy="43" r="5" fill="white" />
                      <path d="M35 60 Q50 70, 65 60" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none" />
                    </svg>
                  </div>
                  <div className="relative z-10 text-center space-y-4">
                    <div className="inline-block p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl">
                      <AppleIcon className="w-20 h-20 text-primary" />
                    </div>
                    <p className="text-lg font-semibold text-primary">Passion for Nutrition</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-text">My Story</h2>
                  <div className="space-y-4 text-text-secondary leading-relaxed">
                    <p>
                      Welcome! I'm <span className="font-semibold text-primary">Vladimir</span>, a registered nutritionist with a passion for helping people achieve optimal health through the science of nutrition.
                    </p>
                    <p>
                      My journey into nutrition began from personal experience with the power of proper nutrition to transform health. This passion motivated me to dedicate my life to studying the science of nutrition and helping others achieve their health goals.
                    </p>
                    <p>
                      Today, I work with clients throughout Macedonia, providing evidence-based consultations that are tailored to their unique needs, lifestyle, and health goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION WITH COLORFUL CARDS */}
        <section className="section bg-gradient-to-b from-primary/5 via-emerald-50/30 to-background">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                  Qualifications
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
                  Education and Certifications
                </h2>
                <p className="text-lg text-text-secondary">
                  Continuous learning and professional development
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group relative overflow-hidden bg-gradient-to-br from-primary/10 to-emerald-50 dark:from-primary/20 dark:to-emerald-900/20 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-text mb-2">Masters in Nutrition</h3>
                    <p className="text-text-secondary mb-2">Ss. Cyril and Methodius University</p>
                    <p className="text-sm text-text-tertiary">Specialization in clinical nutrition, nutritional biochemistry, and weight management</p>
                  </div>
                </div>

                <div className="group relative overflow-hidden bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full -mr-16 -mt-16"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-teal-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-text mb-2">Doctorate</h3>
                    <p className="text-text-secondary mb-2">Currently pursuing Doctorate</p>
                    <p className="text-sm text-text-tertiary">Advanced research and academic development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PHILOSOPHY WITH ICONS - COMPACT */}
        <section className="section">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-8">
                <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                  My Approach
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
                  Nutrition Philosophy
                </h2>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3 text-text-secondary">
                  <BrainIcon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-text">Evidence-Based: </span>
                    Every recommendation is based on the latest scientific research and clinical evidence. I don't follow trends - I stick to what is scientifically proven.
                  </div>
                </div>

                <div className="flex items-start gap-3 text-text-secondary">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                  </svg>
                  <div>
                    <span className="font-semibold text-text">Individual Approach: </span>
                    There's no one-size-fits-all solution. Each plan is tailored to your unique needs, preferences, lifestyle, and health goals.
                  </div>
                </div>

                <div className="flex items-start gap-3 text-text-secondary">
                  <EnergyIcon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-text">Sustainability: </span>
                    I focus on creating sustainable habits, not quick fixes. The goal is long-term health, not short-term results.
                  </div>
                </div>

                <div className="flex items-start gap-3 text-text-secondary">
                  <HeartHealthIcon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-text">Non-Judgmental: </span>
                    I create a safe space where you can be open about your challenges without fear of judgment. We work together toward your goals.
                  </div>
                </div>

                <div className="flex items-start gap-3 text-text-secondary">
                  <BalanceIcon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-text">Holistic Approach: </span>
                    Health is more than just food. I take into account all aspects of your life - sleep, stress, physical activity, and emotional well-being.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AREAS OF EXPERTISE - COMPACT */}
        <section className="section bg-gradient-to-br from-primary/5 via-background to-emerald-50/20">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-8">
                <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                  Specializations
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
                  Areas of Expertise
                </h2>
              </div>

              <div className="flex flex-wrap gap-2 justify-center">
                {[
                  'Weight Loss',
                  'Gut Health',
                  'Hormonal Balance',
                  'Sports Nutrition',
                  'Family Nutrition',
                  'Chronic Conditions',
                  'Nutritional Biochemistry',
                  'Lifestyle Changes',
                ].map((name, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 bg-white dark:bg-gray-800 text-text border border-primary/20 px-4 py-2 rounded-full text-sm font-medium hover:bg-primary/5 hover:border-primary/40 transition-colors"
                  >
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION - VIBRANT */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-500 to-primary-700 py-16">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold">
                Ready to Work Together?
              </h2>
              <p className="text-xl text-white/90">
                Book a consultation and start your journey to better health
              </p>
              <Link href="/en/booking" className="inline-flex items-center gap-2 bg-white text-primary hover:bg-gray-50 font-semibold text-lg px-10 py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                Book Consultation
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer lang="en" />
    </>
  );
}
