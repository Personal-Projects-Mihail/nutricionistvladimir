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

export const metadata: Metadata = generateMetadata('mk', {
  title: 'За мене | Нутриционист Владимир',
  description:
    'Запознајте го Владимир, регистриран нутриционист со специјализација во исхрана базирана на докази. Образование, искуство и филозофија за исхрана.',
  path: '/about',
  keywords: [
    'нутриционист биографија',
    'квалификации',
    'образование',
    'искуство',
    'регистриран нутриционист',
  ],
});

export default function AboutPage() {
  const personSchema = generatePersonSchema('mk');
  const breadcrumbSchema = generateBreadcrumbSchema('mk', [
    { name: 'За мене', path: '/about' },
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

      <Header lang="mk" />

      <main id="main-content">
        {/* HERO SECTION - Compact & Atmospheric */}
        <section className="relative overflow-hidden bg-atmosphere-depth pt-8 pb-12">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="blur-circle blur-circle-green w-[350px] h-[350px] absolute top-10 -right-20 animate-float-organic"></div>
            <div className="blur-circle blur-circle-accent w-[280px] h-[280px] absolute bottom-10 -left-20 animate-float-gentle delay-300"></div>
            <div className="absolute inset-0 bg-pattern-dots opacity-20"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-6 animate-reveal-up">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary-800 dark:text-primary-300 text-sm font-semibold">
                  <HeartHealthIcon className="w-4 h-4 text-primary" />
                  Вашиот партнер за здравје
                </div>

                <h1 className="font-serif">
                  За <span className="text-gradient">мене</span>
                </h1>

                <p className="lead">
                  Дознајте повеќе за мојот пат, образование и страст за помагање на луѓето да постигнат оптимално здравје
                </p>
              </div>

              <div className="relative animate-scale-in delay-200">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/10 rounded-[2rem] blur-2xl"></div>
                <div className="relative">
                  <HealthJourneyIllustration className="w-full h-auto animate-float-gentle" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PERSONAL STORY */}
        <section className="section bg-atmosphere-warm">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative order-2 lg:order-1">
                  <div className="relative aspect-square bg-gradient-to-br from-primary-100 via-accent/10 to-primary-50 dark:from-primary-900 dark:via-accent/5 dark:to-primary-800 rounded-[2.5rem] overflow-hidden p-8 shadow-lg flex items-center justify-center">
                    <div className="absolute inset-0 bg-pattern-dots opacity-30"></div>
                    <div className="relative z-10 text-center space-y-4">
                      <div className="inline-block p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl animate-float-gentle">
                        <AppleIcon className="w-20 h-20 text-primary" />
                      </div>
                      <p className="text-lg font-semibold text-primary-700 dark:text-primary-300">Страст за исхраната</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 order-1 lg:order-2">
                  <h2 className="font-serif text-text">Добредојде!</h2>
                  <div className="space-y-4 text-text-secondary leading-relaxed">
                    <p>
                      Јас сум <span className="font-semibold text-primary-700 dark:text-primary-400">Владимир</span>, дипломиран нутриционист, кој верува дека здравата исхрана не мора да биде комплицирана. Работам со индивидуален пристап, реални менија и јасни насоки што можеш да ги примениш во секојдневието.
                    </p>
                    <p>
                      Моја цел е не само резултати, туку и навики што траат.
                    </p>
                    <p>
                      Денес работам со клиенти низ цела Македонија, а воедно и надвор од Македонија. Закажи консултација и ајде да направиме план што навистина функционира.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION - Enhanced with Green */}
        <section className="section bg-atmosphere-green">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary-800 dark:text-primary-300 text-sm font-semibold mb-4">
                  Квалификации
                </span>
                <h2 className="font-serif text-text mb-4">
                  Образование и Сертификати
                </h2>
                <p className="lead">
                  Постојано учење и професионален развој
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Education Card 1 */}
                <div className="card group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full -mr-12 -mt-12"></div>
                  <div className="relative z-10 space-y-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-text">Дипломиран нутриционист</h3>
                    <p className="text-text-secondary font-medium">„Св. Кирил и Методиј"</p>
                    <p className="text-sm text-text-tertiary">Природно-математички факултет, Институт биологија - Скопје</p>
                  </div>
                </div>

                {/* Education Card 2 */}
                <div className="card group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary-600/20 to-primary-600/5 rounded-full -mr-12 -mt-12"></div>
                  <div className="relative z-10 space-y-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-text">Магистер по Биохемија и физиологија</h3>
                    <p className="text-text-secondary font-medium">„Св. Кирил и Методиј"</p>
                    <p className="text-sm text-text-tertiary">Природно-математички факултет, Институт биологија - Скопје</p>
                  </div>
                </div>

                {/* Education Card 3 */}
                <div className="card group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-accent/20 to-accent/5 rounded-full -mr-12 -mt-12"></div>
                  <div className="relative z-10 space-y-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-700 to-primary-800 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-text">Докторски студии по Биохемија и физиологија</h3>
                    <p className="text-text-secondary font-medium">„Св. Кирил и Методиј"</p>
                    <p className="text-sm text-text-tertiary">Природно-математички факултет, Институт биологија - Скопје</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PHILOSOPHY */}
        <section className="section">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary-800 dark:text-primary-300 text-sm font-semibold mb-4">
                  Мој пристап
                </span>
                <h2 className="font-serif text-text mb-4">
                  Филозофија за исхрана
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: <BrainIcon className="w-6 h-6 text-primary" />,
                    title: 'Базирано на наука',
                    description: 'Секоја препорака е заснована на најновите научни истражувања и клинички докази. Не следам трендови - се држам до она што е научно докажано.'
                  },
                  {
                    icon: <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" /></svg>,
                    title: 'Индивидуален пристап',
                    description: 'Нема универзално решение. Секој план е прилагоден на вашите уникатни потреби, преференции, животен стил и здравствени цели.'
                  },
                  {
                    icon: <EnergyIcon className="w-6 h-6 text-primary" />,
                    title: 'Одржливост',
                    description: 'Фокусиран сум на создавање одржливи навики, не брзи решенија. Целта е долгорочно здравје, не краткорочни резултати.'
                  },
                  {
                    icon: <HeartHealthIcon className="w-6 h-6 text-primary" />,
                    title: 'Без осудување',
                    description: 'Создавам безбеден простор каде што можете да бидете отворени за вашите предизвици без страв од осудување. Заедно работиме кон вашите цели.'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="card group flex items-start gap-4 hover:border-primary/30">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      {item.icon}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-text">{item.title}</h3>
                      <p className="text-text-secondary text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* AREAS OF EXPERTISE */}
        <section className="section bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary-800 dark:text-primary-300 text-sm font-semibold mb-4">
                  Специјализации
                </span>
                <h2 className="font-serif text-text mb-4">
                  Области на Експертиза
                </h2>
              </div>

              <div className="flex flex-wrap gap-3 justify-center">
                {[
                  'Намалување на тежина',
                  'дигестивно здравје',
                  'Хормонален баланс',
                  'Спортска исхрана',
                  'Семејна исхрана',
                  'Хронични состојби',
                  'Нутритивна биохемија',
                  'Промени во животниот стил',
                ].map((name, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 text-text border border-primary/20 px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-primary/10 hover:border-primary transition-all hover:scale-105 shadow-sm"
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

        {/* CTA SECTION */}
        <section className="relative overflow-hidden py-20 bg-gradient-to-br from-primary via-primary-600 to-primary-700 animate-gradient-xy">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full -mr-32 -mt-32 animate-pulse-glow"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full -ml-24 -mb-24 animate-pulse-glow delay-300"></div>
            <div className="absolute inset-0 bg-pattern-dots opacity-10"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white space-y-8">
              <h2 className="font-serif text-white">
                Подготвени да работиме заедно?
              </h2>
              <p className="text-xl text-white/90 leading-relaxed">
                Закажете консултација и почнете го вашиот пат кон подобро здравје
              </p>
              <Link href="/booking" className="inline-flex items-center gap-2 bg-white text-primary-700 hover:bg-background-secondary font-semibold text-lg px-10 py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                Закажи консултација
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer lang="mk" />
    </>
  );
}
