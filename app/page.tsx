import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollProcess from '@/components/ScrollProcess';
import SocialMediaLinks from '@/components/SocialMediaLinks';
import { generateMetadata } from '@/lib/metadata';
import {
  generatePersonSchema,
  generateWebsiteSchema,
  safeJsonLd,
} from '@/lib/structured-data';

export const metadata: Metadata = generateMetadata('mk', {
  title: 'Нутриционист Владимир | Регистриран Нутриционист во Северна Македонија',
  description:
    'Професионални консултации за исхрана со регистриран нутриционист. Специјализиран за намалување на тежина, здравје на цревата, хормонален баланс и спортска исхрана.',
  path: '',
  keywords: [
    'нутриционист',
    'диететичар',
    'исхрана',
    'намалување на тежина',
    'здравје на цревата',
    'хормонален баланс',
    'спортска исхрана',
  ],
});

export default function HomePage() {
  const personSchema = generatePersonSchema('mk');
  const websiteSchema = generateWebsiteSchema('mk');

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

      <Header lang="mk" />

      <main id="main-content">
        {/* HERO SECTION - Atmospheric & Elegant */}
        <section className="relative min-h-screen flex items-center overflow-hidden bg-atmosphere-depth">
          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="blur-circle blur-circle-green w-[500px] h-[500px] absolute top-20 -right-32 animate-float-organic"></div>
            <div className="blur-circle blur-circle-accent w-[400px] h-[400px] absolute -bottom-20 -left-32 animate-float-gentle delay-300"></div>
            <div className="absolute top-0 right-0 w-full h-full bg-pattern-dots opacity-30"></div>
          </div>

          <div className="container-custom relative z-10 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Content - Staggered Reveal */}
              <div className="space-y-8">
                <div className="inline-block animate-reveal-down">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary-800 dark:text-primary-300 text-sm font-semibold">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Регистриран Нутриционист
                  </span>
                </div>

                <h1 className="font-serif animate-reveal-up delay-100">
                  Вашиот пат кон{' '}
                  <span className="text-gradient relative">
                    здрава исхрана
                    <svg className="absolute -bottom-3 left-0 w-full opacity-60" viewBox="0 0 400 20" fill="none" preserveAspectRatio="none">
                      <path d="M2 15 Q 200 5, 398 15" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-primary-500"/>
                    </svg>
                  </span>{' '}
                  почнува тука
                </h1>

                <p className="lead animate-reveal-up delay-200">
                  Професионални консултации базирани на докази. Персонализиран пристап за долгорочни резултати и трајна промена на навиките.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 animate-reveal-up delay-300">
                  <Link 
                    href="/booking" 
                    className="btn-primary group"
                  >
                    <span>Закажи консултација</span>
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                  <Link 
                    href="/about" 
                    className="btn-secondary group"
                  >
                    <span>Запознај ме</span>
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
                    <span className="text-sm font-medium">100+ Клиенти</span>
                  </div>
                  <div className="flex items-center gap-2 text-text-secondary">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">2+ Години искуство</span>
                  </div>
                  <div className="flex items-center gap-2 text-text-secondary">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                    </svg>
                    <span className="text-sm font-medium">100% Персонализирано</span>
                  </div>
                </div>
              </div>

              {/* Right Image - Elegant Float */}
              <div className="relative animate-scale-in delay-200">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-600/10 rounded-[3rem] blur-3xl -z-10 animate-pulse-glow"></div>
                <div className="relative overflow-hidden rounded-[3rem] border border-primary/20 shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5 pointer-events-none"></div>
                  <Image
                    src="/front-page/vladimir.png"
                    alt="Владимир - Регистриран нутриционист"
                    width={700}
                    height={700}
                    className="object-cover w-full h-auto object-top block"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-text-tertiary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        {/* SPECIALTY AREAS - Creative Split Layout */}
        <section className="section bg-atmosphere-warm">
          <div className="container-custom">
            {/* Section Header */}
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary-800 dark:text-primary-300 text-sm font-semibold mb-4">
                Моја експертиза
              </span>
              <h2 className="font-serif mb-6">
                Области на специјализација
              </h2>
              <p className="lead">
                Персонализирани решенија за исхрана базирани на научни докази и индивидуални потреби
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
                    Популарна услуга
                  </div>
                  
                  <h3 className="font-serif text-text">
                    Намалување на телесната тежина
                  </h3>
                  
                  <p className="text-text-secondary text-lg leading-relaxed">
                    Намалување на тежина без екстремни диети или гладување. Фокус на долгорочни навики и здрав однос со исхраната.
                  </p>
                  
                  <ul className="space-y-4">
                    {[
                      'Персонализиран план за исхрана',
                      'Соодветен калориски дефицит',
                      'Одржување на мускулна маса',
                      'Психолошка поддршка'
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
                    href="/services" 
                    className="inline-flex items-center gap-2 text-primary-700 font-semibold hover:gap-3 transition-all group"
                  >
                    <span>Дознај повеќе</span>
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
                      alt="Одржливо намалување на тежина"
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
                      alt="Исхрана за инсулинска резистенција"
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
                    Специјализација
                  </div>
                  
                  <h3 className="font-serif text-text">
                    Исхрана за инсулинска резистенција
                  </h3>
                  
                  <p className="text-text-secondary text-lg leading-relaxed">
                    Персонализирана исхрана без гладувања и целосно отфрлање на шеќерите. Создавање на здрави навики и подобрување на здравјето.
                  </p>
                  
                  <ul className="space-y-4">
                    {[
                      'Персонализиран план за исхрана',
                      'Совети за навиките во исхраната',
                      'Решавање на проблемот со инсулинска резистенција',
                      'Континуирано следење'
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
                    href="/services" 
                    className="inline-flex items-center gap-2 text-primary-700 font-semibold hover:gap-3 transition-all group"
                  >
                    <span>Дознај повеќе</span>
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
                    Комплексна грижа
                  </div>
                  
                  <h3 className="font-serif text-text">
                    Исхрана при метаболички состојби
                  </h3>
                  
                  <p className="text-text-secondary text-lg leading-relaxed">
                    Дијабетес, покачен холестерол, покачени триглицериди и замастен џигер. При вакви метаболички состојби исхраната е клучна.
                  </p>
                  
                  <ul className="space-y-4">
                    {[
                      'Континуирано следење на метаболичката состојба',
                      'Персонализирана исхрана според потребите',
                      'Подобрување на метаболичката состојба',
                      'Координација со лекарот'
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
                    href="/services" 
                    className="inline-flex items-center gap-2 text-primary-700 font-semibold hover:gap-3 transition-all group"
                  >
                    <span>Дознај повеќе</span>
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
                      alt="Исхрана при метаболички состојби"
                      width={600}
                      height={600}
                      className="object-contain w-full h-full animate-float-gentle delay-200"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* View All Services CTA */}
            <div className="text-center mt-20">
              <Link href="/services" className="btn-primary inline-flex">
                <span>Види ги сите услуги</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* SOCIAL MEDIA LINKS */}
        <SocialMediaLinks lang="mk" />

        {/* PROCESS ROADMAP */}
        <ScrollProcess />

        {/* FINAL CTA - Atmospheric */}
        <section className="relative overflow-hidden py-24 bg-gradient-to-br from-primary via-primary-600 to-primary-700 animate-gradient-xy">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full -mr-48 -mt-48 animate-pulse-glow"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full -ml-32 -mb-32 animate-pulse-glow delay-300"></div>
            <div className="absolute inset-0 bg-pattern-dots opacity-10"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white space-y-8">
              <h2 className="font-serif text-white">
                Подготвени да ги постигнете вашите цели?
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                Закажете вашата прва консултација и започнете го патувањето кон подобро здравје денес.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Link 
                  href="/booking" 
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary-700 hover:bg-background-secondary font-semibold text-lg px-10 py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  <span>Закажи консултација</span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-primary-700 font-semibold text-lg px-10 py-4 rounded-xl transition-all duration-300"
                >
                  <span>Контактирај нè</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer lang="mk" />
    </>
  );
}
