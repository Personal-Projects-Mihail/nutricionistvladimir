import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingForm from '@/components/BookingForm';
import { generateMetadata } from '@/lib/metadata';
import { generateBreadcrumbSchema, safeJsonLd } from '@/lib/structured-data';

export const metadata: Metadata = generateMetadata('mk', {
  title: 'Закажи консултација | Нутриционист Владимир',
  description:
    'Закажете вашата прва консултација за исхрана со регистриран нутриционист Владимир. Онлајн и лично достапно низ Северна Македонија.',
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
                Закажи консултација
              </h1>
              <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
                Првиот чекор кон подобро здравје започнува тука
              </p>
            </div>
          </div>
        </section>

        {/* Booking Form Section */}
        <section className="section">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <div className="card">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-text mb-4">
                    Пополнете го формуларот
                  </h2>
                  <p className="text-text-secondary">
                    Ве молиме пополнете го формуларот подолу и ќе ве контактираме во
                    рок од 24 часа за да го потврдиме вашиот термин.
                  </p>
                </div>

                <BookingForm lang="mk" />
              </div>
            </div>
          </div>
        </section>

        {/* What Happens Next */}
        <section className="section bg-background-secondary">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-text text-center mb-12">
                Што се случува потоа?
              </h2>

              <div className="space-y-6">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text mb-2">
                      Потврда на термин
                    </h3>
                    <p className="text-text-secondary">
                      Ќе ве контактираме во рок од 24 часа за да го потврдиме вашиот
                      преферирани датум и време, или да предложиме алтернативни
                      термини.
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
                      Прашалник за здравје
                    </h3>
                    <p className="text-text-secondary">
                      Ќе добиете детален прашалник за да можеме подобро да се
                      подготвиме за вашата консултација и да ги разбереме вашите
                      потреби.
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
                      Првична консултација
                    </h3>
                    <p className="text-text-secondary">
                      Средба од 60-90 минути каде што ќе разговараме за вашата
                      исхрана, здравствени цели и ќе креираме персонализиран план.
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
                      Вашиот персонализиран план
                    </h3>
                    <p className="text-text-secondary">
                      По консултацијата, ќе добиете детален план за исхрана со
                      конкретни препораки, рецепти и насоки.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Consultation Options */}
        <section className="section">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-text text-center mb-12">
                Опции за консултации
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Online Consultation */}
                <div className="card border-primary/20">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
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
                      className="text-primary"
                      aria-hidden="true"
                    >
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-text mb-3">
                    Онлајн консултација
                  </h3>
                  <p className="text-text-secondary mb-4">
                    Удобна видео консултација од вашиот дом. Достапно за клиенти низ
                    цела Северна Македонија.
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
                      Флексибилно време
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
                      Без патување
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
                      Иста квалитет на грижа
                    </li>
                  </ul>
                </div>

                {/* In-Person Consultation */}
                <div className="card">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
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
                      className="text-primary"
                      aria-hidden="true"
                    >
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-text mb-3">
                    Лична консултација
                  </h3>
                  <p className="text-text-secondary mb-4">
                    Лице-в-лице консултација во удобна и професионална средина.
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
                      Персонална интеракција
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
                      Детални мерења (опционално)
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
                      Традиционален пристап
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section bg-background-secondary">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-text text-center mb-12">
                Често поставувани прашања
              </h2>

              <div className="space-y-6">
                <div className="card">
                  <h3 className="text-lg font-semibold text-text mb-2">
                    Колку трае првичната консултација?
                  </h3>
                  <p className="text-text-secondary">
                    Првичната консултација обично трае 60-90 минути. Ова ни дава
                    доволно време за детален преглед на вашата исхрана, здравствена
                    историја и креирање на персонализиран план.
                  </p>
                </div>

                <div className="card">
                  <h3 className="text-lg font-semibold text-text mb-2">
                    Дали консултациите се покриени со осигурување?
                  </h3>
                  <p className="text-text-secondary">
                    Тоа зависи од вашиот осигурувач. Ве молиме консултирајте се со
                    вашата осигурителна компанија за детали. Можеме да обезбедиме
                    потврда за услугата.
                  </p>
                </div>

                <div className="card">
                  <h3 className="text-lg font-semibold text-text mb-2">
                    Што треба да подготвам за првата консултација?
                  </h3>
                  <p className="text-text-secondary">
                    Ќе ви испратиме прашалник за пополнување пред консултацијата.
                    Добро е да имате список на лекови кои ги земате и резултати од
                    скорешни анализи (ако имате).
                  </p>
                </div>

                <div className="card">
                  <h3 className="text-lg font-semibold text-text mb-2">
                    Колку често треба да имам follow-up консултации?
                  </h3>
                  <p className="text-text-secondary">
                    Обично препорачувам follow-up на секои 2-4 недели, зависно од
                    вашите цели и напредок. Ова можеме да го прилагодиме според
                    вашите потреби.
                  </p>
                </div>

                <div className="card">
                  <h3 className="text-lg font-semibold text-text mb-2">
                    Можам ли да откажам или преместам термин?
                  </h3>
                  <p className="text-text-secondary">
                    Да, ве молиме известете нè најмалку 24 часа однапред за да
                    можеме да го преместиме вашиот термин без дополнителни трошоци.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="section">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <div className="card bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                <h2 className="text-2xl font-bold text-text mb-4">
                  Имате прашања?
                </h2>
                <p className="text-text-secondary mb-6">
                  Ако имате прашања пред да закажете, слободно контактирајте нè
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:nutricionistvladimir@gmail.com"
                    className="btn-primary inline-flex items-center justify-center gap-2"
                  >
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
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    Испрати емаил
                  </a>
                  <a
                    href="tel:+389XXXXXXXX"
                    className="btn-secondary inline-flex items-center justify-center gap-2"
                  >
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
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    Јавете се
                  </a>
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
