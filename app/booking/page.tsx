import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import IntakeForm from '@/components/IntakeForm';
import { generateMetadata } from '@/lib/metadata';
import { generateBreadcrumbSchema, safeJsonLd } from '@/lib/structured-data';
import BookingIllustration from '@/components/illustrations/BookingIllustration';
import ConsultationIllustration from '@/components/illustrations/ConsultationIllustration';

export const metadata: Metadata = generateMetadata('mk', {
  title: 'Закажи консултација | Нутриционист Владимир',
  description:
    'Закажете вашата прва консултација за исхрана со регистриран нутриционист Владимир. Онлајн и лично достапно во Скопје.',
  path: '/booking',
  keywords: [
    'закажи консултација',
    'термин',
    'резервација',
    'онлајн консултација',
    'нутриционист термин',
  ],
});

export default function BookingPage() {
  const breadcrumbSchema = generateBreadcrumbSchema('mk', [
    { name: 'Закажи консултација', path: '/booking' },
  ]);

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
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  Лесно закажување
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Закажи <span className="text-primary">консултација</span>
                </h1>

                <p className="text-xl text-text-secondary leading-relaxed">
                  Првиот чекор кон подобро здравје започнува тука. Изберете термин кој ви одговара
                </p>
              </div>

              <div className="relative">
                <BookingIllustration className="w-full h-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* BOOKING FORM SECTION */}
        <section className="section">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <div className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-10 shadow-2xl border border-primary/10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>

                <div className="relative z-10">
                  <div className="mb-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-text mb-3">
                      Пополнете го формуларот
                    </h2>
                    <p className="text-text-secondary">
                      Ќе ве контактираме во рок од 24 часа за да го потврдиме вашиот термин
                    </p>
                  </div>

                  <IntakeForm lang="mk" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT HAPPENS NEXT - TIMELINE */}
        <section className="section bg-gradient-to-b from-primary/5 via-emerald-50/30 to-background">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                  Процес
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
                  Што се случува потоа?
                </h2>
              </div>

              <div className="space-y-8">
                {[
                  { num: '01', title: 'Потврда на термин', desc: 'Ќе ве контактираме во рок од 24 часа за да го потврдиме вашиот преферирани датум и време, или да предложиме алтернативни термини.', color: 'from-primary to-primary-600' },
                  { num: '02', title: 'Прашалник за здравје', desc: 'Ќе добиете детален прашалник за да можеме подобро да се подготвиме за вашата консултација и да ги разбереме вашите потреби.', color: 'from-emerald-400 to-emerald-600' },
                  { num: '03', title: 'Првична консултација', desc: 'Средба од 45 минути каде што ќе разговараме за вашата исхрана, здравствени цели и ќе креираме персонализиран план.', color: 'from-green-400 to-green-600' },
                  { num: '04', title: 'Вашиот персонализиран план', desc: 'По консултацијата, ќе добиете детален план за исхрана со конкретни препораки, рецепти и насоки.', color: 'from-teal-400 to-teal-600' }
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

        {/* CONSULTATION OPTIONS */}
        <section className="section">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                  Опции
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
                  Изберете го типот на консултација
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group relative overflow-hidden bg-gradient-to-br from-primary/10 to-emerald-50 dark:from-primary/20 dark:to-emerald-900/10 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-primary/20">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" strokeWidth="2" />
                        <line x1="8" y1="21" x2="16" y2="21" strokeWidth="2" />
                        <line x1="12" y1="17" x2="12" y2="21" strokeWidth="2" />
                      </svg>
                    </div>

                    <h3 className="text-2xl font-bold text-text mb-3 group-hover:text-primary transition-colors">
                      Онлајн консултација
                    </h3>

                    <p className="text-text-secondary mb-6">
                      Удобна видео консултација од вашиот дом. Достапно за клиенти низ цела Македонија.
                    </p>

                    <ul className="space-y-3">
                      {['Флексибилно време', 'Без патување', 'Иста квалитет на грижа', 'Безбедно и приватно'].map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-text-secondary">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="group relative overflow-hidden bg-gradient-to-br from-emerald-50 to-green-100 dark:from-emerald-900/10 dark:to-green-900/10 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-emerald-200 dark:border-emerald-800">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                      </svg>
                    </div>

                    <h3 className="text-2xl font-bold text-text mb-3 group-hover:text-emerald-600 transition-colors">
                      Лична консултација
                    </h3>

                    <p className="text-text-secondary mb-6">
                      Лице-в-лице консултација во удобна и професионална средина.
                    </p>

                    <ul className="space-y-3">
                      {['Персонална интеракција', 'Детални мерења', 'Традиционален пристап', 'Дискретна локација'].map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-text-secondary">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ WITH VISUAL APPEAL */}
        <section className="section bg-gradient-to-b from-background via-emerald-50/20 to-background">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16">
                <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                  Прашања
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
                  Често поставувани прашања
                </h2>
              </div>

              <div className="space-y-4">
                {[
                  { q: 'Колку трае првичната консултација?', a: 'Првичната консултација обично трае 45 минути. Ова ни дава доволно време за детален преглед на вашата исхрана, здравствена историја и креирање на персонализиран план.' },
                  { q: 'Дали консултациите се покриени со осигурување?', a: 'Тоа зависи од вашиот осигурувач. Ве молиме консултирајте се со вашата осигурителна компанија за детали. Можеме да обезбедиме потврда за услугата.' },
                  { q: 'Што треба да подготвам за првата консултација?', a: 'Ќе ви испратиме прашалник за пополнување пред консултацијата. Добро е да имате список на лекови кои ги земате и резултати од скорешни анализи (ако имате).' },
                  { q: 'Колку често треба да имам follow-up консултации?', a: 'Обично препорачувам follow-up на секои 2-4 недели, зависно од вашите цели и напредок. Ова можеме да го прилагодиме според вашите потреби.' },
                  { q: 'Можам ли да откажам или преместам термин?', a: 'Да, ве молиме известете нè најмалку 24 часа однапред за да можеме да го преместиме вашиот термин без дополнителни трошоци.' }
                ].map((faq, idx) => (
                  <div key={idx} className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-primary/20 transition-colors">
                        <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-text mb-2">{faq.q}</h3>
                        <p className="text-text-secondary leading-relaxed">{faq.a}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT CTA */}
        <section className="section">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-emerald-50/50 dark:from-primary/20 dark:to-emerald-900/10 rounded-3xl p-10 md:p-12 text-center shadow-2xl border-2 border-primary/20">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>

                <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
                    Имате прашања?
                  </h2>
                  <p className="text-lg text-text-secondary mb-8">
                    Ако имате прашања пред да закажете, слободно контактирајте нè
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="mailto:nutricionistvladimir@gmail.com" className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                      Испрати емаил
                    </Link>
                    <Link href="tel:+389XXXXXXXX" className="inline-flex items-center justify-center gap-2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-text border-2 border-primary/20 font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      Јавете се
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer lang="mk" />
    </>
  );
}
