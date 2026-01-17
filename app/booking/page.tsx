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
                
                <div className="flex items-start gap-3 p-4 bg-primary/10 dark:bg-primary/20 rounded-xl border border-primary/20">
                  <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  <div>
                    <p className="font-semibold text-text mb-1">Онлајн консултации по ваша преференца</p>
                    <p className="text-sm text-text-secondary">Консултациите се одржуваат онлајн преку Google Meet, Viber, WhatsApp или друга платформа според вашата преференца.</p>
                  </div>
                </div>
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
                    <p className="text-text-secondary mb-4">
                      Ќе ве контактираме во рок од 24 часа за да го потврдиме вашиот термин
                    </p>
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-lg text-sm font-medium">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                      Онлајн консултации по ваша преференца (Google Meet, Viber, WhatsApp, итн.)
                    </div>
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
            <div className="text-center mb-16">
              <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                Процес
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
                Што се случува потоа?
              </h2>
            </div>

            <div className="flex flex-col md:flex-row items-stretch gap-4 md:gap-6">
              {[
                { num: '01', title: 'Потврда на термин', desc: 'Ќе ве контактираме во рок од 24 часа за да го потврдиме вашиот преферирани датум и време, или да предложиме алтернативни термини.', color: 'from-primary to-primary-600' },
                { num: '02', title: 'Првична консултација', desc: 'Онлајн средба од 45 минути (Google Meet, Viber, WhatsApp или друга платформа по ваша преференца) каде што ќе разговараме за вашата исхрана, здравствени цели и ќе креираме персонализиран план.', color: 'from-green-400 to-green-600' },
                { num: '03', title: 'Вашиот персонализиран план', desc: 'По консултацијата, ќе добиете детален план за исхрана со конкретни препораки, рецепти и насоки.', color: 'from-teal-400 to-teal-600' }
              ].map((step, idx) => (
                <div key={idx} className="flex flex-col md:flex-row items-center flex-1">
                  <div className="flex flex-col items-center text-center w-full py-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-xl mb-4`}>
                      {step.num}
                    </div>
                    <h3 className="text-xl font-bold text-text mb-3">{step.title}</h3>
                    <p className="text-text-secondary">{step.desc}</p>
                  </div>
                  {idx < 2 && (
                    <div className="hidden md:flex items-center justify-center mx-4 flex-shrink-0">
                      <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
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
                  { q: 'Што треба да подготвам за првата консултација?', a: 'Добро е да имате список на лекови кои ги земате и резултати од скорешни крвни анализи (ако имате).' },
                  { q: 'Колку често треба да имам follow-up консултации?', a: 'Обично препорачувам follow-up на секои 14-15 дена, зависно од вашите цели и напредок. Ова можеме да го прилагодиме според вашите потреби.' },
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
                    <Link href="https://wa.me/38975453434" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-text border-2 border-primary/20 font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      +389 75 453 434
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
