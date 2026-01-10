import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateMetadata } from '@/lib/metadata';
import { generateBreadcrumbSchema, safeJsonLd } from '@/lib/structured-data';
import HeartHealthIcon from '@/components/icons/HeartHealthIcon';
import EnergyIcon from '@/components/icons/EnergyIcon';
import BalanceIcon from '@/components/icons/BalanceIcon';
import BrainIcon from '@/components/icons/BrainIcon';

export const metadata: Metadata = generateMetadata('mk', {
  title: 'Сведоштва | Нутриционист Владимир',
  description:
    'Прочитајте реални приказни на клиенти кои постигнале успех со професионални консултации за исхрана од нутриционист Владимир.',
  path: '/testimonials',
  keywords: [
    'сведоштва',
    'клиенти',
    'успех',
    'приказни',
    'резултати',
    'трансформација',
  ],
});

export default function TestimonialsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema('mk', [
    { name: 'Сведоштва', path: '/testimonials' },
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
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-emerald-50/50 to-background">
          {/* Decorative blur circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl -ml-40 -mb-40"></div>
          
          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6 section">
              <div className="inline-block mb-4">
                <div className="flex items-center justify-center gap-2 bg-gradient-to-br from-primary/10 to-emerald-50 px-6 py-2 rounded-full border-2 border-primary/20">
                  <HeartHealthIcon className="w-5 h-5 text-primary" />
                  <span className="text-primary font-semibold">Задоволни клиенти</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text leading-tight">
                Сведоштва од клиенти
              </h1>
              <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
                Реални приказни на луѓе кои ги постигнаа своите здравствени цели
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="section bg-gradient-to-br from-primary/5 via-green-50/50 to-background">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Testimonial 1 */}
              <div className="group relative overflow-hidden bg-gradient-to-br from-primary/10 to-emerald-50 border-2 border-primary/20 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
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
                      className="text-white"
                      aria-hidden="true"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text">Марија С.</h3>
                    <p className="text-sm text-text-tertiary">
                      Намалување на тежина | 3 месеци
                    </p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-primary"
                      aria-hidden="true"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-text-secondary italic mb-4">
                  "Владимир ми помогна да изгубам 12 килограми на здрав и одржлив
                  начин. Најважно, научив како да се хранам правилно и да не се
                  враќам на старите навики. Персонализираниот пристап беше клучен за
                  мојот успех."
                </p>
                <div className="pt-4 border-t border-primary/30">
                  <p className="text-sm text-primary font-medium">
                    ✓ Изгубени 12 кг | ✓ Подобрена енергија | ✓ Здрави навики
                  </p>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="group relative overflow-hidden bg-gradient-to-br from-emerald-50 to-green-100 border-2 border-emerald-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
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
                      className="text-white"
                      aria-hidden="true"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text">Александар М.</h3>
                    <p className="text-sm text-text-tertiary">
                      Спортска исхрана | 4 месеци
                    </p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-emerald-600"
                      aria-hidden="true"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-text-secondary italic mb-4">
                  "Како активен атлет, барав некој кој разбира спортска исхрана.
                  Владимир ми креираше прецизен план кој ми помогна да ги подобрам
                  перформансите и опоравувањето. Резултатите се видливи и на
                  теренот и во теретаната."
                </p>
                <div className="pt-4 border-t border-emerald-300">
                  <p className="text-sm text-emerald-700 font-medium">
                    ✓ Подобрени перформанси | ✓ Побрзо опоравување | ✓ +3кг мускулна
                    маса
                  </p>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="group relative overflow-hidden bg-gradient-to-br from-primary/10 to-emerald-50 border-2 border-primary/20 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
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
                      className="text-white"
                      aria-hidden="true"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text">Елена Т.</h3>
                    <p className="text-sm text-text-tertiary">
                      Здравје на цревата | 2 месеци
                    </p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-green-600"
                      aria-hidden="true"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-text-secondary italic mb-4">
                  "Години наназад се борев со проблеми со надување и ИБС. По само 2
                  месеци работа со Владимир, симптомите значително се намалија.
                  Конечно знам кои храни ми одговараат и се чувствувам многу подобро."
                </p>
                <div className="pt-4 border-t border-primary/30">
                  <p className="text-sm text-green-700 font-medium">
                    ✓ Намалено надување | ✓ Подобра дигестија | ✓ Повеќе енергија
                  </p>
                </div>
              </div>

              {/* Testimonial 4 */}
              <div className="group relative overflow-hidden bg-gradient-to-br from-emerald-50 to-green-100 border-2 border-emerald-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
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
                      className="text-white"
                      aria-hidden="true"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text">Јована П.</h3>
                    <p className="text-sm text-text-tertiary">
                      Хормонален баланс | 5 месеци
                    </p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-teal-600"
                      aria-hidden="true"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-text-secondary italic mb-4">
                  "Со ПЦОС, знаев дека исхраната е важна, но не знаев од каде да
                  започнам. Владимир ми даде јасна насока и поддршка. Мојот циклус се
                  нормализираше и изгубив тежина која не можев да ја изгубам со
                  години."
                </p>
                <div className="pt-4 border-t border-emerald-300">
                  <p className="text-sm text-teal-700 font-medium">
                    ✓ Подобрен хормонален баланс | ✓ Редовен циклус | ✓ -8кг
                  </p>
                </div>
              </div>

              {/* Testimonial 5 */}
              <div className="group relative overflow-hidden bg-gradient-to-br from-primary/10 to-emerald-50 border-2 border-primary/20 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
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
                      className="text-white"
                      aria-hidden="true"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text">Стефан Д.</h3>
                    <p className="text-sm text-text-tertiary">
                      Дијабетес тип 2 | 6 месеци
                    </p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-primary"
                      aria-hidden="true"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-text-secondary italic mb-4">
                  "По дијагнозата со дијабетес тип 2, барав стручна помош за
                  управување со моето здравје. Владимир ми креираше план кој ми
                  помогна да го стабилизирам шеќерот во крвта без да чувствувам дека
                  сум на строга диета."
                </p>
                <div className="pt-4 border-t border-primary/30">
                  <p className="text-sm text-primary font-medium">
                    ✓ Стабилен шеќер во крвта | ✓ Намален HbA1c | ✓ Подобрено здравје
                  </p>
                </div>
              </div>

              {/* Testimonial 6 */}
              <div className="group relative overflow-hidden bg-gradient-to-br from-emerald-50 to-green-100 border-2 border-emerald-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 via-teal-500 to-cyan-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
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
                      className="text-white"
                      aria-hidden="true"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text">Семејство Петровски</h3>
                    <p className="text-sm text-text-tertiary">
                      Семејна исхрана | 4 месеци
                    </p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-green-600"
                      aria-hidden="true"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-text-secondary italic mb-4">
                  "Работата со Владимир ја трансформираше начинот на кој нашето
                  семејство се храни. Децата сега јадат повеќе зеленчук и ние сите
                  имаме повеќе енергија. Тој ни помогна да креираме здрави навики кои
                  функционираат за сите."
                </p>
                <div className="pt-4 border-t border-emerald-300">
                  <p className="text-sm text-green-700 font-medium">
                    ✓ Подобра семејна исхрана | ✓ Децата јадат здравo | ✓ Повеќе
                    енергија
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stats */}
        <section className="section bg-gradient-to-br from-primary/20 to-primary/5">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-block mb-4">
                  <div className="flex items-center justify-center gap-2 bg-gradient-to-br from-primary to-primary-600 px-6 py-2 rounded-full shadow-lg">
                    <EnergyIcon className="w-5 h-5 text-white" />
                    <span className="text-white font-semibold">Докажани резултати</span>
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-text">
                  Резултати кои зборуваат
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="group relative overflow-hidden bg-gradient-to-br from-primary via-primary-500 to-primary-600 rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                  <div className="relative z-10 text-center">
                    <div className="text-4xl md:text-5xl font-bold mb-2">
                      95%
                    </div>
                    <p className="text-white/90">
                      Клиенти постигнаа ги своите цели
                    </p>
                  </div>
                </div>

                <div className="group relative overflow-hidden bg-gradient-to-br from-emerald-400 via-emerald-500 to-green-600 rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                  <div className="relative z-10 text-center">
                    <div className="text-4xl md:text-5xl font-bold mb-2">
                      4.9/5
                    </div>
                    <p className="text-white/90">Просечна оценка од клиенти</p>
                  </div>
                </div>

                <div className="group relative overflow-hidden bg-gradient-to-br from-green-400 via-green-500 to-emerald-600 rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                  <div className="relative z-10 text-center">
                    <div className="text-4xl md:text-5xl font-bold mb-2">
                      200+
                    </div>
                    <p className="text-white/90">Задоволни клиенти</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Clients Say */}
        <section className="section bg-gradient-to-br from-primary/5 via-green-50/50 to-background">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-block mb-4">
                  <div className="flex items-center justify-center gap-2 bg-gradient-to-br from-primary/10 to-emerald-50 px-6 py-2 rounded-full border-2 border-primary/20">
                    <BalanceIcon className="w-5 h-5 text-primary" />
                    <span className="text-primary font-semibold">Вредности кои се цениле</span>
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-text">
                  Што цениле клиентите најмногу
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group flex items-start gap-4 p-6 bg-gradient-to-br from-primary/10 to-emerald-50 border-2 border-primary/20 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-600 rounded-2xl shadow-lg flex items-center justify-center flex-shrink-0">
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
                      className="text-white"
                      aria-hidden="true"
                    >
                      <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text mb-2">
                      Персонализиран пристап
                    </h3>
                    <p className="text-sm text-text-secondary">
                      Планови креирани специјално за нивните потреби и животен стил
                    </p>
                  </div>
                </div>

                <div className="group flex items-start gap-4 p-6 bg-gradient-to-br from-emerald-50 to-green-100 border-2 border-emerald-200 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl shadow-lg flex items-center justify-center flex-shrink-0">
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
                      className="text-white"
                      aria-hidden="true"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text mb-2">
                      Научен пристап
                    </h3>
                    <p className="text-sm text-text-secondary">
                      Препораки базирани на најнови истражувања и докази
                    </p>
                  </div>
                </div>

                <div className="group flex items-start gap-4 p-6 bg-gradient-to-br from-primary/10 to-emerald-50 border-2 border-primary/20 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-lg flex items-center justify-center flex-shrink-0">
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
                      className="text-white"
                      aria-hidden="true"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text mb-2">
                      Одлична комуникација
                    </h3>
                    <p className="text-sm text-text-secondary">
                      Секогаш достапен за прашања и редовно следење
                    </p>
                  </div>
                </div>

                <div className="group flex items-start gap-4 p-6 bg-gradient-to-br from-emerald-50 to-green-100 border-2 border-emerald-200 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-emerald-600 rounded-2xl shadow-lg flex items-center justify-center flex-shrink-0">
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
                      className="text-white"
                      aria-hidden="true"
                    >
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text mb-2">
                      Одржливи резултати
                    </h3>
                    <p className="text-sm text-text-secondary">
                      Долгорочни промени, не само краткорочни решенија
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ethical Note */}
        <section className="section">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <div className="bg-gradient-to-br from-primary/10 to-emerald-50 border-2 border-primary/20 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-600 rounded-2xl shadow-lg flex items-center justify-center flex-shrink-0">
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
                      className="text-white"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="16" x2="12" y2="12" />
                      <line x1="12" y1="8" x2="12.01" y2="8" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text mb-2">
                      Важна напомена
                    </h3>
                    <p className="text-sm text-text-secondary">
                      Сите сведоштва се од реални клиенти со нивна изречна согласност.
                      Резултатите варираат од личност до личност и зависат од
                      индивидуалните околности, почетна состојба и посветеност кон
                      планот. Овие приказни се претставени за едукативни цели и не
                      гарантираат специфични резултати.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-gradient-to-br from-primary/20 to-primary/5">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto relative overflow-hidden rounded-3xl p-12 bg-gradient-to-br from-primary via-primary-500 to-primary-700 text-white shadow-2xl">
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>
              
              <div className="relative z-10 text-center space-y-6">
                <BrainIcon className="w-16 h-16 text-white mx-auto" />
                <h2 className="text-3xl md:text-4xl font-bold">
                  Подготвени за вашата приказна на успех?
                </h2>
                <p className="text-lg text-white/90">
                  Закажете консултација и започнете го вашиот пат кон подобро здравје
                </p>
                <Link 
                  href="/booking" 
                  className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Закажи консултација
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
                    aria-hidden="true"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
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
