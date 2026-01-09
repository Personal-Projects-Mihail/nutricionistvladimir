import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateMetadata } from '@/lib/metadata';
import { generateBreadcrumbSchema, safeJsonLd } from '@/lib/structured-data';

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

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }}
      />

      <Header lang="mk" />

      <main id="main-content">
        {/* Hero Section */}
        <section className="section bg-gradient-to-b from-background to-background-secondary">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text leading-tight">
                Услуги
              </h1>
              <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
                Професионални консултации за исхрана прилагодени на вашите уникатни
                потреби
              </p>
            </div>
          </div>
        </section>

        {/* Main Service */}
        <section className="section">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="card border-primary/20">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                      aria-hidden="true"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <line x1="20" y1="8" x2="20" y2="14" />
                      <line x1="23" y1="11" x2="17" y2="11" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-text mb-2">
                      1-на-1 Консултација за Исхрана
                    </h2>
                    <p className="text-lg text-text-secondary">
                      Персонализирана грижа за постигнување на вашите здравствени цели
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-text mb-3">
                      Што е вклучено:
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary flex-shrink-0 mt-1"
                          aria-hidden="true"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <div>
                          <p className="font-medium text-text">
                            Детална анализа на исхрана
                          </p>
                          <p className="text-sm text-text-secondary">
                            Комплетен преглед на вашата моментална исхрана, животен
                            стил и здравствена историја
                          </p>
                        </div>
                      </li>

                      <li className="flex items-start gap-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary flex-shrink-0 mt-1"
                          aria-hidden="true"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <div>
                          <p className="font-medium text-text">
                            Персонализиран план за исхрана
                          </p>
                          <p className="text-sm text-text-secondary">
                            Приспособен на вашите цели, преференции, алергии и
                            животен стил
                          </p>
                        </div>
                      </li>

                      <li className="flex items-start gap-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary flex-shrink-0 mt-1"
                          aria-hidden="true"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <div>
                          <p className="font-medium text-text">
                            Препораки за суплементација
                          </p>
                          <p className="text-sm text-text-secondary">
                            Базирани на докази препораки за витамини и минерали (кога
                            е потребно)
                          </p>
                        </div>
                      </li>

                      <li className="flex items-start gap-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary flex-shrink-0 mt-1"
                          aria-hidden="true"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <div>
                          <p className="font-medium text-text">
                            Редовни follow-up консултации
                          </p>
                          <p className="text-sm text-text-secondary">
                            Континуирана поддршка и приспособување на планот по
                            потреба
                          </p>
                        </div>
                      </li>

                      <li className="flex items-start gap-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary flex-shrink-0 mt-1"
                          aria-hidden="true"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <div>
                          <p className="font-medium text-text">Email поддршка</p>
                          <p className="text-sm text-text-secondary">
                            Одговор на прашања меѓу консултациите
                          </p>
                        </div>
                      </li>

                      <li className="flex items-start gap-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary flex-shrink-0 mt-1"
                          aria-hidden="true"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <div>
                          <p className="font-medium text-text">
                            Едукативни ресурси
                          </p>
                          <p className="text-sm text-text-secondary">
                            Материјали за подобро разбирање на исхраната и здравјето
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specialization Areas */}
        <section className="section bg-background-secondary">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-text text-center mb-12">
                Специјализирани Услуги
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Weight Loss */}
                <div className="card">
                  <h3 className="text-xl font-semibold text-text mb-3">
                    Намалување на Тежина
                  </h3>
                  <p className="text-text-secondary mb-4">
                    Науката засновани на докази стратегии за одржливо намалување на
                    тежина без екстремни диети.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-text-secondary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Калоричен дефицит со задоволување
                    </li>
                    <li className="flex items-start gap-2 text-sm text-text-secondary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Управување со метаболизам
                    </li>
                    <li className="flex items-start gap-2 text-sm text-text-secondary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Одржување на мускулна маса
                    </li>
                  </ul>
                </div>

                {/* Gut Health */}
                <div className="card">
                  <h3 className="text-xl font-semibold text-text mb-3">
                    Здравје на Цревата
                  </h3>
                  <p className="text-text-secondary mb-4">
                    Подобрете го здравјето на дигестивниот систем и решете проблеми
                    со надување, ИБС и други состојби.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-text-secondary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Оптимизација на микробиом
                    </li>
                    <li className="flex items-start gap-2 text-sm text-text-secondary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Управување со ИБС
                    </li>
                    <li className="flex items-start gap-2 text-sm text-text-secondary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Идентификација на триггери
                    </li>
                  </ul>
                </div>

                {/* Hormonal Balance */}
                <div className="card">
                  <h3 className="text-xl font-semibold text-text mb-3">
                    Хормонален Баланс
                  </h3>
                  <p className="text-text-secondary mb-4">
                    Природна поддршка за хормонално здравје преку правилна исхрана и
                    промени во животниот стил.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-text-secondary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      ПЦОС поддршка
                    </li>
                    <li className="flex items-start gap-2 text-sm text-text-secondary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Менопаузална исхрана
                    </li>
                    <li className="flex items-start gap-2 text-sm text-text-secondary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Балансирање на шеќер во крвта
                    </li>
                  </ul>
                </div>

                {/* Sports Nutrition */}
                <div className="card">
                  <h3 className="text-xl font-semibold text-text mb-3">
                    Спортска Исхрана
                  </h3>
                  <p className="text-text-secondary mb-4">
                    Оптимизирајте ги перформансите, опоравувањето и градењето на
                    мускули со прецизна спортска исхрана.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-text-secondary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Макро и микро нутриенти
                    </li>
                    <li className="flex items-start gap-2 text-sm text-text-secondary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Исхрана околу тренинг
                    </li>
                    <li className="flex items-start gap-2 text-sm text-text-secondary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Стратегии за опоравување
                    </li>
                  </ul>
                </div>

                {/* Family Nutrition */}
                <div className="card">
                  <h3 className="text-xl font-semibold text-text mb-3">
                    Семејна Исхрана
                  </h3>
                  <p className="text-text-secondary mb-4">
                    Здрави навики за исхрана за целото семејство, вклучувајќи деца и
                    адолесценти.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-text-secondary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Педијатриска исхрана
                    </li>
                    <li className="flex items-start gap-2 text-sm text-text-secondary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Планирање на оброци
                    </li>
                    <li className="flex items-start gap-2 text-sm text-text-secondary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Здрави навики за деца
                    </li>
                  </ul>
                </div>

                {/* Chronic Conditions */}
                <div className="card">
                  <h3 className="text-xl font-semibold text-text mb-3">
                    Хронични Состојби
                  </h3>
                  <p className="text-text-secondary mb-4">
                    Нутритивна поддршка за управување со дијабетес,
                    кардиоваскуларни заболувања и други хронични состојби.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-text-secondary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Дијабетес тип 2
                    </li>
                    <li className="flex items-start gap-2 text-sm text-text-secondary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Кардиоваскуларно здравје
                    </li>
                    <li className="flex items-start gap-2 text-sm text-text-secondary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Автоимуни состојби
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="section">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-text text-center mb-12">
                За кого е ова?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4 p-6 bg-background-secondary rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary flex-shrink-0"
                    aria-hidden="true"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-text mb-2">
                      Луѓе кои сакаат да изгубат тежина
                    </h3>
                    <p className="text-sm text-text-secondary">
                      Одржливи стратегии за намалување на тежина без екстремни диети
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-background-secondary rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary flex-shrink-0"
                    aria-hidden="true"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-text mb-2">
                      Оние со дигестивни проблеми
                    </h3>
                    <p className="text-sm text-text-secondary">
                      Решавање на ИБС, надување и други проблеми со цревата
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-background-secondary rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary flex-shrink-0"
                    aria-hidden="true"
                  >
                    <path d="M6.5 6.5l11 11M21 21l-1-1M3 3l1 1M18 22l4-4M2 6l4-4M12 12l1 1" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-text mb-2">
                      Атлети и активни луѓе
                    </h3>
                    <p className="text-sm text-text-secondary">
                      Оптимизација на перформанси и опоравување
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-background-secondary rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary flex-shrink-0"
                    aria-hidden="true"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-text mb-2">
                      Семејства
                    </h3>
                    <p className="text-sm text-text-secondary">
                      Градење здрави навики за цело семејство
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-background-secondary rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary flex-shrink-0"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-text mb-2">
                      Жени со хормонални проблеми
                    </h3>
                    <p className="text-sm text-text-secondary">
                      ПЦОС, менопауза и други хормонални нарушувања
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-background-secondary rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary flex-shrink-0"
                    aria-hidden="true"
                  >
                    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-text mb-2">
                      Луѓе со хронични состојби
                    </h3>
                    <p className="text-sm text-text-secondary">
                      Нутритивна поддршка за дијабетес, срцеви заболувања и др.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="section bg-background-secondary">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-text text-center mb-12">
                Што да очекувате
              </h2>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text mb-2">
                      Првична Консултација
                    </h3>
                    <p className="text-text-secondary">
                      Детален преглед на вашата исхрана, здравствена историја, животен
                      стил и цели. Траење: 60-90 минути.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text mb-2">
                      Персонализиран План
                    </h3>
                    <p className="text-text-secondary">
                      Добивате детален план за исхрана прилагоден на вашите потреби,
                      со конкретни препораки и рецепти.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text mb-2">
                      Редовни Follow-ups
                    </h3>
                    <p className="text-text-secondary">
                      Следење на напредокот, приспособување на планот и решавање на
                      предизвици. Обично на секои 2-4 недели.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                      4
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text mb-2">
                      Континуирана Поддршка
                    </h3>
                    <p className="text-text-secondary">
                      Email поддршка меѓу консултациите за прашања и мотивација во
                      текот на целиот процес.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center space-y-6 card bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <h2 className="text-3xl md:text-4xl font-bold text-text">
                Подготвени да започнете?
              </h2>
              <p className="text-lg text-text-secondary">
                Закажете вашата прва консултација и направете го првиот чекор кон
                подобро здравје
              </p>
              <Link href="/booking" className="btn-primary text-lg px-8 py-4 inline-flex">
                Закажи консултација
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer lang="mk" />
    </>
  );
}
