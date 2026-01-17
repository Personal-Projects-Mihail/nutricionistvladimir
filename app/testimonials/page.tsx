'use client';

import { Metadata } from 'next';
import Link from 'next/link';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeartHealthIcon from '@/components/icons/HeartHealthIcon';
import BrainIcon from '@/components/icons/BrainIcon';

const testimonials = [
  {
    name: 'Марија С.',
    subtitle: 'Намалување на тежина | 3 месеци',
    quote: '"Владимир ми помогна да изгубам 12 килограми на здрав и одржлив начин. Најважно, научив како да се хранам правилно и да не се враќам на старите навики. Персонализираниот пристап беше клучен за мојот успех."',
    results: '✓ Изгубени 12 кг | ✓ Подобрена енергија | ✓ Здрави навики',
    gradient: 'from-primary/10 to-emerald-50',
    borderColor: 'border-primary/20',
    iconGradient: 'from-primary to-primary-600',
    textColor: 'text-primary'
  },
  {
    name: 'Александар М.',
    subtitle: 'Спортска исхрана | 4 месеци',
    quote: '"Како активен атлет, барав некој кој разбира спортска исхрана. Владимир ми креираше прецизен план кој ми помогна да ги подобрам перформансите и опоравувањето. Резултатите се видливи и на теренот и во теретаната."',
    results: '✓ Подобрени перформанси | ✓ Побрзо опоравување | ✓ +3кг мускулна маса',
    gradient: 'from-emerald-50 to-green-100',
    borderColor: 'border-emerald-200',
    iconGradient: 'from-emerald-500 to-green-600',
    textColor: 'text-emerald-700'
  },
  {
    name: 'Елена Т.',
    subtitle: 'Здравје на цревата | 2 месеци',
    quote: '"Години наназад се борев со проблеми со надување и ИБС. По само 2 месеци работа со Владимир, симптомите значително се намалија. Конечно знам кои храни ми одговараат и се чувствувам многу подобро."',
    results: '✓ Намалено надување | ✓ Подобра дигестија | ✓ Повеќе енергија',
    gradient: 'from-primary/10 to-emerald-50',
    borderColor: 'border-primary/20',
    iconGradient: 'from-green-500 to-emerald-600',
    textColor: 'text-green-700'
  },
  {
    name: 'Јована П.',
    subtitle: 'Хормонален баланс | 5 месеци',
    quote: '"Со ПЦОС, знаев дека исхраната е важна, но не знаев од каде да започнам. Владимир ми даде јасна насока и поддршка. Мојот циклус се нормализираше и изгубив тежина која не можев да ја изгубам со години."',
    results: '✓ Подобрен хормонален баланс | ✓ Редовен циклус | ✓ -8кг',
    gradient: 'from-emerald-50 to-green-100',
    borderColor: 'border-emerald-200',
    iconGradient: 'from-teal-400 to-emerald-600',
    textColor: 'text-teal-700'
  },
  {
    name: 'Стефан Д.',
    subtitle: 'Дијабетес тип 2 | 6 месеци',
    quote: '"По дијагнозата со дијабетес тип 2, барав стручна помош за управување со моето здравје. Владимир ми креираше план кој ми помогна да го стабилизирам шеќерот во крвта без да чувствувам дека сум на строга диета."',
    results: '✓ Стабилен шеќер во крвта | ✓ Намален HbA1c | ✓ Подобрено здравје',
    gradient: 'from-primary/10 to-emerald-50',
    borderColor: 'border-primary/20',
    iconGradient: 'from-primary-400 to-emerald-600',
    textColor: 'text-primary'
  },
  {
    name: 'Семејство Петровски',
    subtitle: 'Семејна исхрана | 4 месеци',
    quote: '"Работата со Владимир ја трансформираше начинот на кој нашето семејство се храни. Децата сега јадат повеќе зеленчук и ние сите имаме повеќе енергија. Тој ни помогна да креираме здрави навики кои функционираат за сите."',
    results: '✓ Подобра семејна исхрана | ✓ Децата јадат здравo | ✓ Повеќе енергија',
    gradient: 'from-emerald-50 to-green-100',
    borderColor: 'border-emerald-200',
    iconGradient: 'from-green-500 via-teal-500 to-cyan-600',
    textColor: 'text-green-700'
  }
];

export default function TestimonialsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <>
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
                Рецензии од клиенти
              </h1>
              <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
                Реални приказни на луѓе кои ги постигнаа своите здравствени цели
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Carousel */}
        <section className="section bg-gradient-to-br from-primary/5 via-green-50/50 to-background">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              {/* Carousel Container */}
              <div className="relative">
                {/* Left Arrow */}
                <button
                  onClick={prevTestimonial}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 bg-white hover:bg-primary/10 border-2 border-primary/20 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 min-w-[44px] min-h-[44px] flex items-center justify-center"
                  aria-label="Претходна рецензија"
                >
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
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>

                {/* Testimonial Card */}
                <div className={`group relative overflow-hidden bg-gradient-to-br ${currentTestimonial.gradient} border-2 ${currentTestimonial.borderColor} rounded-2xl p-8 shadow-lg transition-all duration-500`}>
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${currentTestimonial.iconGradient} rounded-full flex items-center justify-center flex-shrink-0 shadow-lg`}>
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
                        className="text-white"
                        aria-hidden="true"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-text">{currentTestimonial.name}</h3>
                      <p className="text-sm text-text-tertiary">
                        {currentTestimonial.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className={currentTestimonial.textColor}
                        aria-hidden="true"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-text-secondary italic mb-6 text-lg leading-relaxed">
                    {currentTestimonial.quote}
                  </p>
                  <div className={`pt-4 border-t ${currentTestimonial.borderColor}`}>
                    <p className={`text-sm ${currentTestimonial.textColor} font-medium`}>
                      {currentTestimonial.results}
                    </p>
                  </div>
                </div>

                {/* Right Arrow */}
                <button
                  onClick={nextTestimonial}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 bg-white hover:bg-primary/10 border-2 border-primary/20 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 min-w-[44px] min-h-[44px] flex items-center justify-center"
                  aria-label="Следна рецензија"
                >
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
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </div>

              {/* Carousel Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'w-8 bg-primary'
                        : 'w-2 bg-primary/30 hover:bg-primary/50'
                    }`}
                    aria-label={`Оди на рецензија ${index + 1}`}
                  />
                ))}
              </div>

              {/* Disclaimer */}
              <div className="mt-8 text-center">
                <p className="text-xs text-text-tertiary leading-relaxed max-w-3xl mx-auto">
                  Важна напомена: Сите рецензии се од реални клиенти со нивна изречна согласност. Резултатите варираат од личност до личност и зависат од индивидуалните околности, почетна состојба и посветеност кон планот. Овие приказни се претставени за едукативни цели и не гарантираат специфични резултати.
                </p>
              </div>

              {/* Google Review Link */}
              <div className="mt-6 text-center">
                <a
                  href="https://g.page/r/CSxP3aPwQt2XEBM/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary-600 font-medium transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  Остави рецензија на Google
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
                    aria-hidden="true"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-gradient-to-br from-primary/20 to-primary/5">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto relative overflow-hidden rounded-3xl p-8 md:p-10 bg-gradient-to-br from-primary via-primary-500 to-primary-700 text-white shadow-2xl">
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
