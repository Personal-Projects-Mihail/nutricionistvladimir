import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateMetadata } from '@/lib/metadata';
import { generateBreadcrumbSchema, safeJsonLd } from '@/lib/structured-data';
import ServicesHeroIllustration from '@/components/illustrations/ServicesHeroIllustration';
import ExpandableServiceCards from '@/components/ExpandableServiceCards';

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

  const services = [
    {
      title: 'Weight Loss',
      iconName: 'WeightLossIcon',
      description: 'Sustainable evidence-based strategies for weight loss without extreme diets.',
      gradient: 'from-primary via-primary-500 to-primary-600',
      bgGradient: 'from-primary/10 to-emerald-50',
      features: [
        'Caloric deficit with satisfaction',
        'Metabolism management',
        'Muscle mass maintenance',
        'Long-term habits'
      ]
    },
    {
      title: 'Hormonal Balance',
      iconName: 'HormoneIcon',
      description: 'Natural support for hormonal health through proper nutrition and lifestyle changes.',
      gradient: 'from-green-400 via-green-500 to-emerald-600',
      bgGradient: 'from-green-50 to-emerald-50',
      features: [
        'PCOS support',
        'Menopausal nutrition',
        'Blood sugar balancing',
        'Hormonal testing'
      ]
    },
    {
      title: 'Sports Nutrition',
      iconName: 'DumbbellIcon',
      description: 'Optimize performance, recovery, and muscle building with precise nutrition.',
      gradient: 'from-teal-400 via-teal-500 to-emerald-600',
      bgGradient: 'from-teal-50 to-emerald-50',
      features: [
        'Macro and micro nutrients',
        'Nutrition around training',
        'Recovery strategies',
        'Mass building'
      ]
    },
    {
      title: 'Family Nutrition',
      iconName: 'FamilyIcon',
      description: 'Healthy eating habits for the whole family, including children and adolescents.',
      gradient: 'from-primary-400 via-emerald-500 to-green-600',
      bgGradient: 'from-primary-50 to-emerald-50',
      features: [
        'Pediatric nutrition',
        'Meal planning',
        'Healthy habits for kids',
        'Family recipes'
      ]
    },
    {
      title: 'Chronic Conditions',
      iconName: 'HeartHealthIcon',
      description: 'Nutritional support for managing diabetes, cardiovascular disease, and other conditions.',
      gradient: 'from-green-500 via-teal-500 to-cyan-600',
      bgGradient: 'from-green-50 to-teal-50',
      features: [
        'Type 2 diabetes',
        'Cardiovascular health',
        'Autoimmune conditions',
        'Chronic inflammation'
      ]
    }
  ];

  return (
    <>
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
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                  Personalized Services
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Our <span className="text-primary">Services</span>
                </h1>

                <p className="text-xl text-text-secondary leading-relaxed">
                  Professional nutrition consultations tailored to your unique needs, goals, and lifestyle
                </p>

                <Link href="/en/booking" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-600 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                  Book Consultation
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>

              <div className="relative">
                <ServicesHeroIllustration className="w-full h-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* MAIN SERVICE CARD */}
        <section className="section">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-emerald-50/50 dark:from-primary/20 dark:to-emerald-900/10 rounded-3xl p-10 md:p-12 border-2 border-primary/20 shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>

                <div className="relative z-10">
                  <div className="flex items-start gap-6 mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-text mb-3">
                        1-on-1 Nutrition Consultation
                      </h2>
                      <p className="text-lg text-text-secondary">
                        Personalized care tailored to your health goals
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {[
                      { title: 'Detailed Nutrition Analysis', desc: 'Complete review of current diet and health history' },
                      { title: 'Personalized Plan', desc: 'Adapted to your goals, preferences, and allergies' },
                      { title: 'Regular Follow-ups', desc: 'Ongoing support and plan adjustments' },
                      { title: 'Email Support', desc: 'Answers to questions between consultations' }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-4 bg-white/60 dark:bg-gray-800/60 rounded-xl backdrop-blur-sm">
                        <div className="w-6 h-6 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-semibold text-text mb-1">{item.title}</p>
                          <p className="text-sm text-text-secondary">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COLORFUL SPECIALIZED SERVICES */}
        <section className="section bg-gradient-to-b from-background via-emerald-50/20 to-background">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                  Specializations
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
                  Specialized Services
                </h2>
                <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                  Each service is tailored to your specific health needs
                </p>
              </div>

              <ExpandableServiceCards services={services} lang="en" />
            </div>
          </div>
        </section>

        {/* WHO IT'S FOR - COLORFUL GRID */}
        <section className="section">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                  For Whom
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
                  Who Is This For?
                </h2>
              </div>

              <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                {[
                  'People wanting to lose weight',
                  'Those with digestive issues',
                  'Athletes and active people',
                  'Families',
                  'Women with hormonal issues',
                  'People with chronic conditions'
                ].map((title, idx) => (
                  <span key={idx} className="text-base md:text-lg text-text-secondary font-medium">
                    {title}
                    {idx < 5 && <span className="mx-2 text-primary">•</span>}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS TIMELINE */}
        <section className="section bg-gradient-to-br from-primary/5 via-background to-emerald-50/20">
          <div className="container-custom">
            <div className="text-center mb-12 md:mb-16">
              <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                Process
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
                What to Expect
              </h2>
            </div>

            <div className="relative w-full min-h-[600px] md:min-h-[700px] py-8">
              {/* Connecting diagonal lines */}
              <svg className="hidden md:block absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                {[0, 1, 2].map((idx) => {
                  const startX = idx === 0 ? '8%' : idx === 1 ? '30%' : '52%';
                  const startY = idx === 0 ? '80px' : idx === 1 ? '230px' : '380px';
                  const endX = idx === 0 ? '28%' : idx === 1 ? '50%' : '72%';
                  const endY = idx === 0 ? '230px' : idx === 1 ? '380px' : '530px';
                  return (
                    <line
                      key={idx}
                      x1={startX}
                      y1={startY}
                      x2={endX}
                      y2={endY}
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      className="text-primary/20"
                    />
                  );
                })}
              </svg>

              {[
                { num: '01', title: 'Initial Consultation', desc: 'Detailed review of your nutrition, health history, lifestyle, and goals. Duration: 45 minutes.', color: 'from-primary to-primary-600', left: '0', top: '0' },
                { num: '02', title: 'Personalized Plan', desc: 'You receive a detailed nutrition plan tailored to your needs, with specific recommendations and recipes.', color: 'from-emerald-400 to-emerald-600', left: '20%', top: '150px' },
                { num: '03', title: 'Regular Follow-ups', desc: 'Progress monitoring, plan adjustments, and addressing challenges. Usually every 2-4 weeks.', color: 'from-green-400 to-green-600', left: '40%', top: '300px' },
                { num: '04', title: 'Ongoing Support', desc: 'Email support between consultations for questions and motivation throughout the process.', color: 'from-teal-400 to-teal-600', left: '60%', top: '450px' }
              ].map((step, idx) => (
                <div
                  key={idx}
                  className="absolute flex gap-4 md:gap-6 w-full md:w-auto max-w-sm md:max-w-md z-10"
                  style={{
                    left: step.left,
                    top: step.top,
                  }}
                >
                  <div className={`flex-shrink-0 w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-xl relative z-10`}>
                    {step.num}
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow relative z-10">
                    <h3 className="text-base md:text-lg lg:text-xl font-bold text-text mb-2">{step.title}</h3>
                    <p className="text-sm md:text-base text-text-secondary leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-500 to-primary-700 py-16">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/90">
                Book your first consultation and take the first step toward better health
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
