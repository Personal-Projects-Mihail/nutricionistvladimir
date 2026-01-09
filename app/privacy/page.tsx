import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateMetadata('mk', {
  title: 'Политика за приватност | Нутриционист Владимир',
  description: 'Политика за приватност и заштита на лични податоци за нутриционист Владимир.',
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <>
      <Header lang="mk" />

      <main id="main-content">
        <section className="section bg-gradient-to-b from-background to-background-secondary">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-text leading-tight">
                Политика за приватност
              </h1>
              <p className="text-text-secondary">
                Последна измена: {new Date().toLocaleDateString('mk-MK')}
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto card">
              <div className="prose prose-lg max-w-none">
                <p className="text-text-secondary">
                  Оваа Политика за приватност опишува како се собираат, користат и
                  заштитуваат вашите лични податоци кога ги користите нашите услуги.
                </p>

                <h2 className="text-2xl font-bold text-text mt-8 mb-4">
                  1. Податоци што ги собираме
                </h2>
                <p className="text-text-secondary">
                  Собираме информации што ни ги давате директно, вклучувајќи:
                </p>
                <ul className="text-text-secondary space-y-2">
                  <li>Име и контакт информации (емаил, телефон)</li>
                  <li>Здравствени информации релевантни за нутритивната консултација</li>
                  <li>Информации за исхрана и животен стил</li>
                  <li>Информации обезбедени преку формуларите на веб-страницата</li>
                </ul>

                <h2 className="text-2xl font-bold text-text mt-8 mb-4">
                  2. Како ги користиме вашите податоци
                </h2>
                <p className="text-text-secondary">
                  Вашите податоци ги користиме за:
                </p>
                <ul className="text-text-secondary space-y-2">
                  <li>Обезбедување на професионални нутритивни консултации</li>
                  <li>Креирање на персонализирани планови за исхрана</li>
                  <li>Комуникација во врска со вашите термини и услуги</li>
                  <li>Подобрување на квалитетот на нашите услуги</li>
                </ul>

                <h2 className="text-2xl font-bold text-text mt-8 mb-4">
                  3. Заштита на податоците
                </h2>
                <p className="text-text-secondary">
                  Преземаме соодветни технички и организациски мерки за заштита на
                  вашите лични податоци од неовластен пристап, измена, откривање или
                  уништување.
                </p>

                <h2 className="text-2xl font-bold text-text mt-8 mb-4">
                  4. Споделување на податоци
                </h2>
                <p className="text-text-secondary">
                  Не ги продаваме, трговаме или на друг начин пренесуваме вашите лични
                  податоци на надворешни страни, освен ако не е потребно за обезбедување
                  на нашите услуги или со ваша согласност.
                </p>

                <h2 className="text-2xl font-bold text-text mt-8 mb-4">
                  5. Вашите права
                </h2>
                <p className="text-text-secondary">
                  Имате право да:
                </p>
                <ul className="text-text-secondary space-y-2">
                  <li>Пристапите до вашите лични податоци</li>
                  <li>Побарате корекција на неточни податоци</li>
                  <li>Побарате бришење на вашите податоци</li>
                  <li>Повлечете согласност за обработка на податоци</li>
                </ul>

                <h2 className="text-2xl font-bold text-text mt-8 mb-4">
                  6. Контакт
                </h2>
                <p className="text-text-secondary">
                  За прашања во врска со оваа Политика за приватност, контактирајте нè
                  на:
                </p>
                <p className="text-text-secondary">
                  Email: <a href="mailto:nutricionistvladimir@gmail.com" className="text-primary hover:underline">nutricionistvladimir@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer lang="mk" />
    </>
  );
}
