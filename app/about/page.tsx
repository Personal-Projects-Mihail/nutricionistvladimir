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
      {/* JSON-LD Structured Data */}
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
        {/* Hero Section */}
        <section className="section bg-gradient-to-b from-background to-background-secondary">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text leading-tight">
                За мене
              </h1>
              <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
                Дознајте повеќе за мојот пат, образование и пристап кон исхраната
              </p>
            </div>
          </div>
        </section>

        {/* Personal Story */}
        <section className="section">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="card">
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-3xl font-bold text-text mb-6">Моја приказна</h2>
                  <div className="space-y-4 text-text-secondary">
                    <p>
                      Добредојдовте! Јас сум Владимир, регистриран нутриционист со
                      страст кон помагање на луѓето да го постигнат оптималното
                      здравје преку науката за исхраната.
                    </p>
                    <p>
                      Мојот пат во нутриционизмот започна од личното искуство со
                      моќта на правилната исхрана за трансформирање на здравјето.
                      Оваа страст ме мотивираше да го посветам мојот живот на
                      проучување на науката за исхраната и помагање на другите да ги
                      постигнат нивните здравствени цели.
                    </p>
                    <p>
                      Денес работам со клиенти низ цела Северна Македонија,
                      обезбедувајќи консултации базирани на докази кои се
                      прилагодени на нивните уникатни потреби, животен стил и
                      здравствени цели.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education & Credentials */}
        <section className="section bg-background-secondary">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-text text-center mb-12">
                Образование и Квалификации
              </h2>

              <div className="space-y-6">
                {/* Degree */}
                <div className="card">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
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
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                        <path d="M6 12v5c3 3 9 3 12 0v-5" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-text mb-2">
                        Дипломиран Нутриционист
                      </h3>
                      <p className="text-text-secondary mb-2">
                        Универзитет [Име на Универзитетот]
                      </p>
                      <p className="text-sm text-text-tertiary">
                        Специјализација во клиничка нутриција, нутритивна биохемија
                        и управување со тежината
                      </p>
                    </div>
                  </div>
                </div>

                {/* License */}
                <div className="card">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
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
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <path d="M9 12l2 2 4-4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-text mb-2">
                        Регистрација и Лиценца
                      </h3>
                      <p className="text-text-secondary mb-2">
                        Регистриран нутриционист во Северна Македонија
                      </p>
                      <p className="text-sm text-text-tertiary">
                        Активна членство во професионални здруженија за нутриција
                      </p>
                    </div>
                  </div>
                </div>

                {/* Continuing Education */}
                <div className="card">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
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
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-text mb-2">
                        Континуирано Образование
                      </h3>
                      <p className="text-text-secondary mb-2">
                        Редовно следење на најнови истражувања и развој
                      </p>
                      <p className="text-sm text-text-tertiary">
                        Посветен на останување во тек со најновите научни сознанија
                        во нутриционизмот
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nutrition Philosophy */}
        <section className="section">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="card">
                <h2 className="text-3xl font-bold text-text mb-6">
                  Моја Филозофија за Исхрана
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-text mb-3 flex items-center gap-2">
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
                        className="text-primary"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Базирано на наука
                    </h3>
                    <p className="text-text-secondary">
                      Секоја препорака е заснована на најновите научни истражувања и
                      клинички докази. Не следам трендови - се држам до она што е
                      научно докажано.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-text mb-3 flex items-center gap-2">
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
                        className="text-primary"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Индивидуален пристап
                    </h3>
                    <p className="text-text-secondary">
                      Нема универзално решение. Секој план е прилагоден на вашите
                      уникатни потреби, преференции, животен стил и здравствени цели.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-text mb-3 flex items-center gap-2">
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
                        className="text-primary"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Одржливост
                    </h3>
                    <p className="text-text-secondary">
                      Фокусиран сум на создавање одржливи навики, не брзи решенија.
                      Целта е долгорочно здравје, не краткорочни резултати.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-text mb-3 flex items-center gap-2">
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
                        className="text-primary"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Без осудување
                    </h3>
                    <p className="text-text-secondary">
                      Создавам безбеден простор каде што можете да бидете отворени за
                      вашите предизвици без страв од осудување. Заедно работиме кон
                      вашите цели.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-text mb-3 flex items-center gap-2">
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
                        className="text-primary"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Холистички пристап
                    </h3>
                    <p className="text-text-secondary">
                      Здравјето е повеќе од само храна. Ги земам предвид сите аспекти
                      на вашиот живот - сон, стрес, физичка активност и емоционално
                      благосостојба.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Areas of Expertise */}
        <section className="section bg-background-secondary">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-text text-center mb-12">
                Области на Експертиза
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-background rounded-lg border border-border">
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
                    className="text-primary flex-shrink-0"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-text-secondary">Намалување на тежина</span>
                </div>

                <div className="flex items-center gap-3 p-4 bg-background rounded-lg border border-border">
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
                    className="text-primary flex-shrink-0"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-text-secondary">Здравје на цревата</span>
                </div>

                <div className="flex items-center gap-3 p-4 bg-background rounded-lg border border-border">
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
                    className="text-primary flex-shrink-0"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-text-secondary">Хормонален баланс</span>
                </div>

                <div className="flex items-center gap-3 p-4 bg-background rounded-lg border border-border">
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
                    className="text-primary flex-shrink-0"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-text-secondary">Спортска исхрана</span>
                </div>

                <div className="flex items-center gap-3 p-4 bg-background rounded-lg border border-border">
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
                    className="text-primary flex-shrink-0"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-text-secondary">Семејна исхрана</span>
                </div>

                <div className="flex items-center gap-3 p-4 bg-background rounded-lg border border-border">
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
                    className="text-primary flex-shrink-0"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-text-secondary">Хронични состојби</span>
                </div>

                <div className="flex items-center gap-3 p-4 bg-background rounded-lg border border-border">
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
                    className="text-primary flex-shrink-0"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-text-secondary">
                    Нутритивна биохемија
                  </span>
                </div>

                <div className="flex items-center gap-3 p-4 bg-background rounded-lg border border-border">
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
                    className="text-primary flex-shrink-0"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-text-secondary">
                    Промени во животниот стил
                  </span>
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
                Подготвени да работиме заедно?
              </h2>
              <p className="text-lg text-text-secondary">
                Закажете консултација и почнете го вашиот пат кон подобро здравје
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
