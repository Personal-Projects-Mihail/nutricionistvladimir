import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateMetadata } from '@/lib/metadata';
import { generateBreadcrumbSchema, safeJsonLd } from '@/lib/structured-data';
import WeightLossIcon from '@/components/icons/WeightLossIcon';
import GutHealthIcon from '@/components/icons/GutHealthIcon';
import HormoneIcon from '@/components/icons/HormoneIcon';
import DumbbellIcon from '@/components/icons/DumbbellIcon';
import FamilyIcon from '@/components/icons/FamilyIcon';
import HeartHealthIcon from '@/components/icons/HeartHealthIcon';
import ServicesHeroIllustration from '@/components/illustrations/ServicesHeroIllustration';

export const metadata: Metadata = generateMetadata('mk', {
  title: 'Услуги | Нутриционист Владимир',
  description:
    '1-на-1 консултации за исхрана со регистриран нутриционист. Специјализирани услуги за намалување на тежина, здравје на цревата, хормонален баланс и спортска исхрана.',
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
      icon: WeightLossIcon,
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
      title: 'Здравје на Цревата',
      icon: GutHealthIcon,
      description: 'Подобрете го здравјето на дигестивниот систем и решете проблеми со надување и ИБС.',
      gradient: 'from-emerald-400 via-emerald-500 to-green-600',
      bgGradient: 'from-emerald-50 to-green-50',
      features: [
        'Оптимизација на микробиом',
        'Управување со ИБС',
        'Идентификација на триггери',
        'FODMAP протокол'
      ]
    },
    {
      title: 'Хормонален Баланс',
      icon: HormoneIcon,
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
      icon: DumbbellIcon,
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
      icon: FamilyIcon,
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
      icon: HeartHealthIcon,
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
                  Персонализирани услуги
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Нашите <span className="text-primary">Услуги</span>
                </h1>

                <p className="text-xl text-text-secondary leading-relaxed">
                  Професионални консултации за исхрана прилагодени на вашите уникатни потреби, цели и животен стил
                </p>

                <Link href="/booking" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-600 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                  Закажи консултација
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
                        1-на-1 Консултација за Исхрана
                      </h2>
                      <p className="text-lg text-text-secondary">
                        Персонализирана грижа прилагодена на вашите здравствени цели
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {[
                      { title: 'Детална анализа на исхрана', desc: 'Комплетен преглед на моменталната исхрана и здравствена историја' },
                      { title: 'Персонализиран план', desc: 'Приспособен на вашите цели, преференции и алергии' },
                      { title: 'Редовни follow-ups', desc: 'Континуирана поддршка и приспособување на планот' },
                      { title: 'Email поддршка', desc: 'Одговор на прашања меѓу консултациите' }
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
                  Специјализации
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
                  Специјализирани Услуги
                </h2>
                <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                  Секоја услуга е прилагодена според вашите специфични здравствени потреби
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, idx) => (
                  <div key={idx} className="group relative overflow-hidden bg-white dark:bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-50 dark:opacity-20`}></div>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>

                    <div className="relative z-10 p-8">
                      <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>

                      <h3 className="text-2xl font-bold text-text mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-text-secondary mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      <ul className="space-y-3 mb-6">
                        {service.features.map((feature, featureIdx) => (
                          <li key={featureIdx} className="flex items-center gap-2 text-sm text-text-secondary">
                            <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center flex-shrink-0`}>
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <Link href="/booking" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                        Закажи консултација
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WHO IT'S FOR - COLORFUL GRID */}
        <section className="section">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                  За кого
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
                  За кого е ова?
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: 'Луѓе кои сакаат да изгубат тежина', desc: 'Одржливи стратегии без екстремни диети', gradient: 'from-primary to-primary-600' },
                  { title: 'Оние со дигестивни проблеми', desc: 'Решавање на ИБС, надување и други проблеми', gradient: 'from-emerald-400 to-green-600' },
                  { title: 'Атлети и активни луѓе', desc: 'Оптимизација на перформанси и опоравување', gradient: 'from-teal-400 to-teal-600' },
                  { title: 'Семејства', desc: 'Градење здрави навики за цело семејство', gradient: 'from-green-400 to-emerald-600' },
                  { title: 'Жени со хормонални проблеми', desc: 'ПЦОС, менопауза и други нарушувања', gradient: 'from-emerald-500 to-teal-600' },
                  { title: 'Луѓе со хронични состојби', desc: 'Нутритивна поддршка за дијабетес, срцеви заболувања', gradient: 'from-green-500 to-cyan-600' }
                ].map((item, idx) => (
                  <div key={idx} className="group relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                    <div className="relative z-10 flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-text mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                        <p className="text-sm text-text-secondary">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS TIMELINE */}
        <section className="section bg-gradient-to-br from-primary/5 via-background to-emerald-50/20">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                  Процес
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
                  Што да очекувате
                </h2>
              </div>

              <div className="space-y-8">
                {[
                  { num: '01', title: 'Првична Консултација', desc: 'Детален преглед на вашата исхрана, здравствена историја, животен стил и цели. Траење: 60-90 минути.', color: 'from-primary to-primary-600' },
                  { num: '02', title: 'Персонализиран План', desc: 'Добивате детален план за исхрана прилагоден на вашите потреби, со конкретни препораки и рецепти.', color: 'from-emerald-400 to-emerald-600' },
                  { num: '03', title: 'Редовни Follow-ups', desc: 'Следење на напредокот, приспособување на планот и решавање на предизвици. Обично на секои 2-4 недели.', color: 'from-green-400 to-green-600' },
                  { num: '04', title: 'Континуирана Поддршка', desc: 'Email поддршка меѓу консултациите за прашања и мотивација во текот на целиот процес.', color: 'from-teal-400 to-teal-600' }
                ].map((step, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-xl`}>
                      {step.num}
                    </div>
                    <div className="flex-1 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                      <h3 className="text-xl font-bold text-text mb-2">{step.title}</h3>
                      <p className="text-text-secondary">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
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
                Подготвени да започнете?
              </h2>
              <p className="text-xl text-white/90">
                Закажете вашата прва консултација и направете го првиот чекор кон подобро здравје
              </p>
              <Link href="/booking" className="inline-flex items-center gap-2 bg-white text-primary hover:bg-gray-50 font-semibold text-lg px-10 py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
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
