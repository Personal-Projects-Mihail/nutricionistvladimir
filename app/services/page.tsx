import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateMetadata } from '@/lib/metadata';
import { generateBreadcrumbSchema, safeJsonLd } from '@/lib/structured-data';
import ServicesHeroIllustration from '@/components/illustrations/ServicesHeroIllustration';
import ExpandableServiceCards from '@/components/ExpandableServiceCards';

export const metadata: Metadata = generateMetadata('mk', {
  title: 'Услуги | Нутриционист Владимир',
  description:
    '1-на-1 консултации за исхрана со регистриран нутриционист. Специјализирани услуги за намалување на тежина, Дигестивно здравје, хормонален баланс и спортска исхрана.',
  path: '/services',
  keywords: [
    'консултации за исхрана',
    'нутритивни услуги',
    'план за исхрана',
    'намалување на тежина',
    'спортска исхрана',
  ],
});

export default function ServicesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema('mk', [
    { name: 'Услуги', path: '/services' },
  ]);

  const services = [
    {
      title: 'Намалување на Тежина',
      iconName: 'WeightLossIcon',
      description: 'Одржливи стратегии засновани на докази за намалување на тежина без екстремни диети.',
      gradient: 'from-primary via-primary-500 to-primary-600',
      bgGradient: 'from-primary/10 to-emerald-50',
      features: [
        'Калоричен дефицит со задоволување',
        'Управување со метаболизам',
        'Одржување на мускулна маса',
        'Долгорочни навики'
      ]
    },
    {
      title: 'Хормонален Баланс',
      iconName: 'HormoneIcon',
      description: 'Природна поддршка за хормонално здравје преку правилна исхрана и промени во животниот стил.',
      gradient: 'from-green-400 via-green-500 to-emerald-600',
      bgGradient: 'from-green-50 to-emerald-50',
      features: [
        'ПЦОС поддршка',
        'Менопаузална исхрана',
        'Балансирање на шеќер',
        'Хормонски тестови'
      ]
    },
    {
      title: 'Спортска Исхрана',
      iconName: 'DumbbellIcon',
      description: 'Оптимизирајте ги перформансите, опоравувањето и градењето на мускули со прецизна исхрана.',
      gradient: 'from-teal-400 via-teal-500 to-emerald-600',
      bgGradient: 'from-teal-50 to-emerald-50',
      features: [
        'Макро и микро нутриенти',
        'Исхрана околу тренинг',
        'Стратегии за опоравување',
        'Градење на маса'
      ]
    },
    {
      title: 'Семејна Исхрана',
      iconName: 'FamilyIcon',
      description: 'Здрави навики за исхрана за целото семејство, вклучувајќи деца и адолесценти.',
      gradient: 'from-primary-400 via-emerald-500 to-green-600',
      bgGradient: 'from-primary-50 to-emerald-50',
      features: [
        'Педијатриска исхрана',
        'Планирање на оброци',
        'Здрави навики за деца',
        'Семејни рецепти'
      ]
    },
    {
      title: 'Хронични Состојби',
      iconName: 'HeartHealthIcon',
      description: 'Нутритивна поддршка за управување со дијабетес, кардиоваскуларни заболувања и други состојби.',
      gradient: 'from-green-500 via-teal-500 to-cyan-600',
      bgGradient: 'from-green-50 to-teal-50',
      features: [
        'Дијабетес тип 2',
        'Кардиоваскуларно здравје',
        'Автоимуни состојби',
        'Хронична инфламација'
      ]
    }
  ];

  return (
    <>
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
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                  Персонализирани услуги
                </div>

                <h1 className="font-serif">
                  Нашите <span className="text-gradient">Услуги</span>
                </h1>

                <p className="lead">
                  Професионални консултации за исхрана прилагодени на вашите уникатни потреби, цели и животен стил
                </p>

                <Link href="/booking" className="btn-primary">
                  Закажи консултација
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>

              <div className="relative animate-scale-in delay-200">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/10 rounded-[2rem] blur-2xl"></div>
                <div className="relative">
                  <ServicesHeroIllustration className="w-full h-auto animate-float-gentle" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MAIN SERVICE CARD */}
        <section className="section bg-atmosphere-warm">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <div className="card p-8 md:p-12 bg-gradient-to-br from-primary/5 via-primary/10 to-accent/5">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>

                <div className="relative z-10">
                  <div className="flex items-start gap-6 mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="font-serif text-text mb-3">
                        1-на-1 Консултација за Исхрана
                      </h2>
                      <p className="text-lg text-text-secondary">
                        Персонализирана грижа прилагодена на вашите здравствени цели
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { title: 'Детална анализа на исхрана', desc: 'Комплетен преглед на моменталната исхрана и здравствена историја' },
                      { title: 'Персонализиран план', desc: 'Приспособен на вашите цели, преференции и алергии' },
                      { title: 'Редовни follow-ups', desc: 'Континуирана поддршка и приспособување на планот' },
                      { title: 'Email поддршка', desc: 'Одговор на прашања меѓу консултациите' }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-4 bg-white/80 dark:bg-gray-800/80 rounded-xl backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 transition-colors">
                        <div className="w-6 h-6 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-semibold text-text mb-1">{item.title}</p>
                          <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SPECIALIZED SERVICES */}
        <section className="section bg-atmosphere-green">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary-800 dark:text-primary-300 text-sm font-semibold mb-4">
                  Специјализации
                </span>
                <h2 className="font-serif text-text mb-4">
                  Специјализирани Услуги
                </h2>
                <p className="lead max-w-2xl mx-auto">
                  Секоја услуга е прилагодена според вашите специфични здравствени потреби
                </p>
              </div>

              <ExpandableServiceCards services={services} lang="mk" />
            </div>
          </div>
        </section>

        {/* WHO IT'S FOR */}
        <section className="section">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary-800 dark:text-primary-300 text-sm font-semibold mb-4">
                  За кого
                </span>
                <h2 className="font-serif text-text mb-4">
                  За кого е ова?
                </h2>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                {[
                  'Луѓе кои сакаат да изгубат тежина',
                  'Оние со дигестивни проблеми',
                  'Атлети и активни луѓе',
                  'Семејства',
                  'Жени со хормонални проблеми',
                  'Луѓе со хронични состојби'
                ].map((title, idx) => (
                  <span key={idx} className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 text-text border border-primary/20 px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-primary/10 hover:border-primary transition-all hover:scale-105 shadow-sm">
                    {title}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS TIMELINE */}
        <section className="section bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container-custom">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary-800 dark:text-primary-300 text-sm font-semibold mb-4">
                Процес
              </span>
              <h2 className="font-serif text-text mb-4">
                Што да очекувате
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                { num: '01', title: 'Првична Консултација', desc: 'Детален преглед на вашата исхрана, здравствена историја, животен стил и цели. Траење: 45 минути.', color: 'from-primary to-primary-600' },
                { num: '02', title: 'Персонализиран План', desc: 'Добивате детален план за исхрана прилагоден на вашите потреби, со конкретни препораки и рецепти.', color: 'from-primary-600 to-primary-700' },
                { num: '03', title: 'Редовни Follow-ups', desc: 'Следење на напредокот, приспособување на планот и решавање на предизвици. Следење напредок на 2 недели.', color: 'from-primary-700 to-primary-800' },
                { num: '04', title: 'Континуирана Поддршка', desc: 'Email/Viber поддршка меѓу консултациите за прашања и мотивација во текот на целиот процес.', color: 'from-primary-800 to-primary-900' }
              ].map((step, idx) => (
                <div key={idx} className="card flex items-start gap-6 hover:border-primary/30">
                  <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                    {step.num}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-text mb-2">{step.title}</h3>
                    <p className="text-text-secondary leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
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
                Подготвени да започнете?
              </h2>
              <p className="text-xl text-white/90 leading-relaxed">
                Закажете вашата прва консултација и направете го првиот чекор кон подобро здравје
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
