import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateMetadata('mk', {
  title: 'Услови за користење | Нутриционист Владимир',
  description: 'Услови за користење на веб-страницата и услугите на Нутриционист Владимир. Прочитајте ги внимателно пред да ги користите нашите услуги.',
  path: '/terms',
});

export default function TermsPage() {
  return (
    <>
      <Header lang="mk" />

      <main id="main-content">
        <section className="section bg-gradient-to-b from-background to-background-secondary">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-text leading-tight">
                Услови за користење
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
                  Добредојдовте на веб-страницата на Нутриционист Владимир. Со пристапување и
                  користење на оваа веб-страница, се согласувате да бидете обврзани со овие
                  Услови за користење. Ве молиме внимателно прочитајте ги пред да ги
                  користите нашите услуги.
                </p>

                <h2 className="text-2xl font-bold text-text mt-8 mb-4">
                  1. Општи услови
                </h2>
                <p className="text-text-secondary">
                  Со користење на оваа веб-страница, потврдувате дека:
                </p>
                <ul className="text-text-secondary space-y-2">
                  <li>Имате најмалку 18 години или имате согласност од родител/старател</li>
                  <li>Ги прифаќате овие услови и нашата Политика за приватност</li>
                  <li>Сте одговорни за точноста на информациите што ни ги давате</li>
                  <li>Нема да ја користите страницата за незаконски цели</li>
                </ul>

                <h2 className="text-2xl font-bold text-text mt-8 mb-4">
                  2. Опис на услугите
                </h2>
                <p className="text-text-secondary">
                  Нутриционист Владимир нуди:
                </p>
                <ul className="text-text-secondary space-y-2">
                  <li>Индивидуални нутритивни консултации</li>
                  <li>Персонализирани планови за исхрана</li>
                  <li>Онлајн и физички консултации</li>
                  <li>Следење на напредокот и прилагодување на плановите</li>
                  <li>Едукативни содржини за здрава исхрана</li>
                </ul>
                <p className="text-text-secondary mt-4">
                  Услугите се обезбедуваат од лиценциран нутриционист и се засноваат на
                  научно докажани методи за исхрана.
                </p>

                <h2 className="text-2xl font-bold text-text mt-8 mb-4">
                  3. Закажување и откажување
                </h2>
                <p className="text-text-secondary">
                  За закажување консултации важат следните правила:
                </p>
                <ul className="text-text-secondary space-y-2">
                  <li>Консултациите се закажуваат преку веб-страницата или телефон</li>
                  <li>Потврда за закажан термин ќе добиете на вашата емаил адреса</li>
                  <li>Откажување е можно најмалку 24 часа пред закажаниот термин</li>
                  <li>Недоаѓање без претходна најава може да резултира со наплата</li>
                  <li>Го задржуваме правото да го промениме терминот со претходна најава</li>
                </ul>

                <h2 className="text-2xl font-bold text-text mt-8 mb-4">
                  4. Плаќање
                </h2>
                <p className="text-text-secondary">
                  Условите за плаќање се:
                </p>
                <ul className="text-text-secondary space-y-2">
                  <li>Цените за услугите се наведени на страницата за услуги</li>
                  <li>Плаќањето се врши пред или по консултацијата, според договор</li>
                  <li>Прифаќаме готовинско плаќање и банкарски трансфер</li>
                  <li>Цените може да се променат без претходна најава</li>
                </ul>

                <h2 className="text-2xl font-bold text-text mt-8 mb-4">
                  5. Медицински дисклејмер
                </h2>
                <p className="text-text-secondary">
                  <strong>ВАЖНО:</strong> Информациите и услугите обезбедени од Нутриционист
                  Владимир се само за едукативни и информативни цели. Тие НЕ претставуваат
                  медицински совет, дијагноза или третман.
                </p>
                <ul className="text-text-secondary space-y-2">
                  <li>
                    Секогаш консултирајте се со вашиот лекар пред да започнете нов режим на
                    исхрана, особено ако имате здравствени состојби
                  </li>
                  <li>
                    Нутритивните совети не ги заменуваат препораките од лекар или друг
                    здравствен професионалец
                  </li>
                  <li>
                    Резултатите може да варираат од личност до личност и зависат од многу
                    фактори
                  </li>
                  <li>
                    Не гарантираме специфични резултати од примената на нашите планови за
                    исхрана
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-text mt-8 mb-4">
                  6. Интелектуална сопственост
                </h2>
                <p className="text-text-secondary">
                  Сите содржини на оваа веб-страница се заштитени со авторски права:
                </p>
                <ul className="text-text-secondary space-y-2">
                  <li>
                    Текстови, слики, логоа и материјали се сопственост на Нутриционист
                    Владимир
                  </li>
                  <li>
                    Забранета е репродукција, дистрибуција или модификација без писмена
                    согласност
                  </li>
                  <li>
                    Персонализираните планови за исхрана се наменети само за личната употреба
                    на клиентот
                  </li>
                  <li>Споделувањето на плановите со трети лица е строго забрането</li>
                </ul>

                <h2 className="text-2xl font-bold text-text mt-8 mb-4">
                  7. Ограничување на одговорност
                </h2>
                <p className="text-text-secondary">
                  Нутриционист Владимир не е одговорен за:
                </p>
                <ul className="text-text-secondary space-y-2">
                  <li>
                    Штети или здравствени проблеми настанати од неправилна примена на
                    советите
                  </li>
                  <li>
                    Резултати кои не се во согласност со очекувањата на клиентот
                  </li>
                  <li>
                    Прекини во работата на веб-страницата или технички проблеми
                  </li>
                  <li>
                    Содржини на надворешни веб-страници до кои водат линкови од нашата
                    страница
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-text mt-8 mb-4">
                  8. Промена на условите
                </h2>
                <p className="text-text-secondary">
                  Го задржуваме правото да ги измениме овие Услови за користење во секое
                  време. Промените стапуваат на сила веднаш по нивното објавување на
                  веб-страницата. Ве охрабруваме периодично да ги проверувате условите за
                  да бидете информирани за евентуални промени.
                </p>

                <h2 className="text-2xl font-bold text-text mt-8 mb-4">
                  9. Применлив закон
                </h2>
                <p className="text-text-secondary">
                  Овие Услови за користење се регулирани и толкувани во согласност со
                  законите на Република Северна Македонија. За сите спорови произлезени од
                  овие услови надлежен е судот во Скопје.
                </p>

                <h2 className="text-2xl font-bold text-text mt-8 mb-4">
                  10. Контакт
                </h2>
                <p className="text-text-secondary">
                  За прашања во врска со овие Услови за користење, контактирајте нè на:
                </p>
                <p className="text-text-secondary">
                  Email:{' '}
                  <a
                    href="mailto:nutricionistvladimir@gmail.com"
                    className="text-primary hover:underline"
                  >
                    nutricionistvladimir@gmail.com
                  </a>
                </p>
                <p className="text-text-secondary">
                  Телефон:{' '}
                  <a
                    href="https://wa.me/38975453434"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +389 75 453 434
                  </a>
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
