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
        {/* VIBRANT HERO SECTION */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-primary/10 to-background pt-4 pb-16">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-glow"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-4">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight m-0">
                  Вашиот пат кон{' '}
                  <span className="text-primary relative inline-block">
                    здрава исхрана
                    <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                      <path d="M2 10 Q150 2, 298 10" stroke="#A8DF8E" strokeWidth="3" strokeLinecap="round" fill="none"/>
                    </svg>
                  </span>{' '}
                  почнува тука
                </h1>
                
                <p className="text-xl text-text-secondary leading-relaxed">
                  Професионални консултации базирани на докази. Персонализиран пристап за долгорочни резултати.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link href="/booking" className="group relative overflow-hidden bg-primary hover:bg-primary-600 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2">
                    <span>Закажи консултација</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                  <Link href="/about" className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2">
                    Запознај ме
                  </Link>
                </div>
              </div>

              {/* Right Illustration */}
              <div className="relative w-full max-w-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full blur-2xl -z-10"></div>
                <div className="overflow-hidden rounded-3xl">
                  <Image
                    src="/front-page/vladimir.png"
                    alt="Владимир - Регистриран нутриционист"
                    width={600}
                    height={600}
                    className="object-cover w-full h-auto object-top block mt-0 md:-mt-32 lg:-mt-36"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS BAR - No cards! */}
        <section className="py-12 bg-gradient-to-r from-primary via-primary-500 to-primary-600 text-white">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">100+</div>
                <div className="text-white/90">Клиенти</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">2+</div>
                <div className="text-white/90">Години искуство</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
                <div className="text-white/90">Персонализирана програма</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
                <div className="text-white/90">Поддршка</div>
              </div>
            </div>
          </div>
        </section>

        {/* SPECIALTY AREAS - Split Layout, No Cards! */}
        <section className="section">
          <div className="container-custom">
            <div className="text-center mb-8">
              <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                Моја експертиза
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-text mb-4">
                Области на специјализација
              </h2>
            </div>

            <div className="space-y-0">
              {/* Weight Loss - Image Right */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
                <div className="space-y-6">
                  <h3 className="text-3xl md:text-4xl font-bold text-text">
                    Намалување на телесната тежина
                  </h3>
                  <p className="text-lg text-text-secondary leading-relaxed">
                    Намалување на тежина без екстремни диети или гладување. Фокус на долгорочни навики и здрав однос со исхраната.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-text-secondary">Персонализиран план за исхрана</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-text-secondary">Соодветен калориски дефицит</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-text-secondary">Одржување на мускулна маса</span>
                    </li>
                  </ul>
                  <Link href="/services" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                    Дознај повеќе
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
                <div className="relative h-[300px] md:h-[400px] lg:h-[600px] bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl overflow-hidden flex items-center justify-center">
                  <Image
                    src="/front-page/weight_loss_illustration.svg"
                    alt="Илустрација за одржливо намалување на тежина - човечко тело со балансирана исхрана и метаболизам"
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
                    alt="Илустрација за исхрана за инсулинска резистенција - балансирана исхрана и здрави навики"
                    width={600}
                    height={600}
                    className="object-contain w-full h-full p-6"
                  />
                </div>
                <div className="space-y-6 order-1 lg:order-2">
                  <h3 className="text-3xl md:text-4xl font-bold text-text">
                    Исхрана за инсулинска резистенција
                  </h3>
                  <p className="text-lg text-text-secondary leading-relaxed">
                    Персонализирана исхрана без гладувања и целосно отфрлање на шеќерите. Создавање на здрави навики и подобрување на здравјето.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-text-secondary">Персонализиран план за исхрана</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-text-secondary">Совети за навиките во исхраната</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-text-secondary">Решавање на проблемот со инсулинска резистенција</span>
                    </li>
                  </ul>
                  <Link href="/services" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                    Дознај повеќе
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
                    Исхрана при метаболички состојби
                  </h3>
                  <p className="text-lg text-text-secondary leading-relaxed">
                    Дијабетичари, покачен холестерол, покачени триглицериди и замастен џигер. При вакви метаболички состојби исхраната е клучот. Исхрана базирана на научни факти и стратешки решавање на проблемот.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-text-secondary">Континуирано следење на метаболичката состојба</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-text-secondary">Персонализирана исхрана според потребите на клиентот</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-text-secondary">Подобрување на метаболичката состојба</span>
                    </li>
                  </ul>
                  <Link href="/services" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                    Дознај повеќе
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
                <div className="relative h-[300px] md:h-[400px] lg:h-[600px] bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl overflow-hidden flex items-center justify-center">
                  <Image
                    src="/front-page/sports_nutrition_illustration.svg"
                    alt="Илустрација за исхрана при метаболички состојби - здрава исхрана за дијабетес, холестерол и триглицериди"
                    width={600}
                    height={600}
                    className="object-contain w-full h-full p-6"
                  />
                </div>
              </div>
            </div>

            {/* View All Services */}
            <div className="text-center mt-8">
              <Link href="/services" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
                Види ги сите услуги
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* SOCIAL MEDIA LINKS */}
        <SocialMediaLinks lang="mk" />

        {/* PROCESS ROADMAP - Scroll-based highlighting */}
        <ScrollProcess />

        {/* CTA SECTION - Full Width Vibrant */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-500 to-primary-700 py-16">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold">
                Подготвени да ги постигнете вашите цели?
              </h2>
              <p className="text-xl text-white/90">
                Закажете вашата прва консултација и започнете го патувањето кон подобро здравје денес.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link href="/booking" className="bg-white text-primary hover:bg-gray-50 font-semibold text-lg px-10 py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center gap-2">
                  Закажи консултација
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold text-lg px-10 py-4 rounded-xl transition-all duration-300 inline-flex items-center justify-center">
                  Контактирај нè
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
