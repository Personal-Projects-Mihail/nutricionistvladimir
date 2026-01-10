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
        {/* VIBRANT HERO SECTION */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-emerald-50/50 to-background pt-20 pb-32">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-glow"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-primary/20 text-primary-800 dark:text-primary-200 px-4 py-2 rounded-full text-sm font-medium">
                  <HeartHealthIcon className="w-5 h-5 text-primary" />
                  Вашиот партнер за здравје
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  За <span className="text-primary">мене</span>
                </h1>

                <p className="text-xl text-text-secondary leading-relaxed">
                  Дознајте повеќе за мојот пат, образование и страст за помагање на луѓето да постигнат оптимално здравје
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
                    <p className="text-lg font-semibold text-primary">Страст за исхраната</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-text">Моја приказна</h2>
                  <div className="space-y-4 text-text-secondary leading-relaxed">
                    <p>
                      Добредојдовте! Јас сум <span className="font-semibold text-primary">Владимир</span>, регистриран нутриционист со страст кон помагање на луѓето да го постигнат оптималното здравје преку науката за исхраната.
                    </p>
                    <p>
                      Мојот пат во нутриционизмот започна од личното искуство со моќта на правилната исхрана за трансформирање на здравјето. Оваа страст ме мотивираше да го посветам мојот живот на проучување на науката за исхраната и помагање на другите да ги постигнат нивните здравствени цели.
                    </p>
                    <p>
                      Денес работам со клиенти низ цела Северна Македонија, обезбедувајќи консултации базирани на докази кои се прилагодени на нивните уникатни потреби, животен стил и здравствени цели.
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
                  Квалификации
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
                  Образование и Сертификати
                </h2>
                <p className="text-lg text-text-secondary">
                  Постојано учење и професионален развој
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="group relative overflow-hidden bg-gradient-to-br from-primary/10 to-emerald-50 dark:from-primary/20 dark:to-emerald-900/20 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-text mb-2">Дипломиран Нутриционист</h3>
                    <p className="text-text-secondary mb-2">Универзитет [Име на Универзитетот]</p>
                    <p className="text-sm text-text-tertiary">Специјализација во клиничка нутриција, нутритивна биохемија и управување со тежината</p>
                  </div>
                </div>

                <div className="group relative overflow-hidden bg-gradient-to-br from-emerald-50 to-green-100 dark:from-emerald-900/20 dark:to-green-900/20 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full -mr-16 -mt-16"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-text mb-2">Регистрација</h3>
                    <p className="text-text-secondary mb-2">Регистриран нутриционист во Северна Македонија</p>
                    <p className="text-sm text-text-tertiary">Активна членство во професионални здруженија за нутриција</p>
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
                    <h3 className="text-xl font-bold text-text mb-2">Континуирано Образование</h3>
                    <p className="text-text-secondary mb-2">Редовно следење на најнови истражувања</p>
                    <p className="text-sm text-text-tertiary">Посветен на останување во тек со најновите научни сознанија</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PHILOSOPHY WITH ICONS */}
        <section className="section">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                  Мој пристап
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
                  Филозофија за исхрана
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <BrainIcon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-text mt-2">Базирано на наука</h3>
                    </div>
                    <p className="text-text-secondary leading-relaxed">
                      Секоја препорака е заснована на најновите научни истражувања и клинички докази. Не следам трендови - се држам до она што е научно докажано.
                    </p>
                  </div>
                </div>

                <div className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-text mt-2">Індивидуален пристап</h3>
                    </div>
                    <p className="text-text-secondary leading-relaxed">
                      Нема универзално решение. Секој план е прилагоден на вашите уникатни потреби, преференции, животен стил и здравствени цели.
                    </p>
                  </div>
                </div>

                <div className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <EnergyIcon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-text mt-2">Одржливост</h3>
                    </div>
                    <p className="text-text-secondary leading-relaxed">
                      Фокусиран сум на создавање одржливи навики, не брзи решенија. Целта е долгорочно здравје, не краткорочни резултати.
                    </p>
                  </div>
                </div>

                <div className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <HeartHealthIcon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-text mt-2">Без осудување</h3>
                    </div>
                    <p className="text-text-secondary leading-relaxed">
                      Создавам безбеден простор каде што можете да бидете отворени за вашите предизвици без страв од осудување. Заедно работиме кон вашите цели.
                    </p>
                  </div>
                </div>

                <div className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group md:col-span-2">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <BalanceIcon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-text mt-2">Холистички пристап</h3>
                    </div>
                    <p className="text-text-secondary leading-relaxed">
                      Здравјето е повеќе од само храна. Ги земам предвид сите аспекти на вашиот живот - сон, стрес, физичка активност и емоционално благосостојба.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AREAS OF EXPERTISE - VIBRANT GRID */}
        <section className="section bg-gradient-to-br from-primary/5 via-background to-emerald-50/20">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                  Специјализации
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
                  Области на Експертиза
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: 'Намалување на тежина', color: 'from-primary to-primary-600' },
                  { name: 'Здравје на цревата', color: 'from-emerald-400 to-emerald-600' },
                  { name: 'Хормонален баланс', color: 'from-green-400 to-green-600' },
                  { name: 'Спортска исхрана', color: 'from-teal-400 to-teal-600' },
                  { name: 'Семејна исхрана', color: 'from-primary-400 to-emerald-500' },
                  { name: 'Хронични состојби', color: 'from-green-500 to-teal-500' },
                  { name: 'Нутритивна биохемија', color: 'from-emerald-500 to-green-600' },
                  { name: 'Промени во животниот стил', color: 'from-teal-500 to-emerald-600' },
                ].map((item, idx) => (
                  <div key={idx} className="group relative overflow-hidden bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    <div className="relative z-10">
                      <div className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm font-semibold text-text group-hover:text-primary transition-colors">{item.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION - VIBRANT */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-500 to-primary-700 py-24">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold">
                Подготвени да работиме заедно?
              </h2>
              <p className="text-xl text-white/90">
                Закажете консултација и почнете го вашиот пат кон подобро здравје
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
