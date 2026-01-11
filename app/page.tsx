import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateMetadata } from '@/lib/metadata';
import {
  generatePersonSchema,
  generateWebsiteSchema,
  safeJsonLd,
} from '@/lib/structured-data';

export const metadata: Metadata = generateMetadata('mk', {
  title: 'Нутриционист Владимир | Регистриран Нутриционист во Северна Македонија',
  description:
    'Професионални консултации за исхрана со регистриран нутриционист. Специјализиран за намалување на тежина, здравје на цревата, хормонален баланс и спортска исхрана.',
  path: '',
  keywords: [
    'нутриционист',
    'диететичар',
    'исхрана',
    'намалување на тежина',
    'здравје на цревата',
    'хормонален баланс',
    'спортска исхрана',
  ],
});

export default function HomePage() {
  const personSchema = generatePersonSchema('mk');
  const websiteSchema = generateWebsiteSchema('mk');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(websiteSchema) }}
      />

      <Header lang="mk" />

      <main id="main-content">
        {/* VIBRANT HERO SECTION */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-primary/10 to-background pt-20 pb-32">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-glow"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 bg-primary/20 text-primary-800 dark:text-primary-200 px-4 py-2 rounded-full text-sm font-medium">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Регистриран нутриционист
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  Вашиот пат кон{' '}
                  <span className="text-primary relative inline-block">
                    здрава исхрана
                    <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                      <path d="M2 10 Q150 2, 298 10" stroke="#A8DF8E" strokeWidth="3" strokeLinecap="round" fill="none"/>
                    </svg>
                  </span>{' '}
                  почнува тука
                </h1>
                
                <p className="text-xl text-text-secondary leading-relaxed">
                  Професионални консултации базирани на докази. Персонализиран пристап за долгорочни резултати.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link href="/booking" className="group relative overflow-hidden bg-primary hover:bg-primary-600 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2">
                    <span>Закажи консултација</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                  <Link href="/about" className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2">
                    Запознај ме
                  </Link>
                </div>

                <div className="flex flex-wrap items-center gap-6 pt-8">
                  <div className="flex items-center gap-2">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                    <span className="text-sm font-medium text-text-secondary">200+ задоволни клиенти</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-medium text-text-secondary">4.9/5 просечна оценка</span>
                  </div>
                </div>
              </div>

              {/* Right Illustration */}
              <div className="relative">
                <div className="relative z-10">
                  <div className="aspect-square max-w-lg mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full blur-2xl"></div>
                    <div className="relative">
                      <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                        <circle cx="250" cy="250" r="200" fill="#7AC45A" opacity="0.15" />
                        <ellipse cx="250" cy="180" rx="50" ry="55" fill="#5DA945" />
                        <path d="M250 240 C200 260, 200 340, 200 380 L200 450 L220 450 L220 380 L280 380 L280 450 L300 450 L300 380 C300 340, 300 260, 250 240Z" fill="#7AC45A" />
                        
                        <g className="animate-float" style={{animationDelay: '0s'}}>
                          <circle cx="120" cy="100" r="25" fill="#EF4444" />
                          <path d="M120 75 Q125 65, 130 75" stroke="#22C55E" strokeWidth="3" fill="none" />
                        </g>
                        
                        <g className="animate-float" style={{animationDelay: '0.5s'}}>
                          <circle cx="380" cy="120" r="15" fill="#22C55E" />
                          <circle cx="395" cy="130" r="12" fill="#22C55E" />
                          <circle cx="370" cy="135" r="13" fill="#22C55E" />
                        </g>
                        
                        <g className="animate-float" style={{animationDelay: '1s'}}>
                          <circle cx="420" cy="250" r="22" fill="#FB923C" />
                          <line x1="420" y1="228" x2="420" y2="272" stroke="#FFF" strokeWidth="2" />
                          <line x1="398" y1="250" x2="442" y2="250" stroke="#FFF" strokeWidth="2" />
                        </g>
                        
                        <g className="animate-float" style={{animationDelay: '0.3s'}}>
                          <ellipse cx="400" cy="350" rx="20" ry="28" fill="#4ADE80" />
                          <ellipse cx="400" cy="350" rx="12" ry="18" fill="#FDE047" />
                        </g>
                        
                        <g opacity="0.6" className="animate-pulse">
                          <path d="M180 120 L182 125 L187 125 L183 128 L185 133 L180 130 L175 133 L177 128 L173 125 L178 125 Z" fill="#FDE047" />
                          <path d="M350 180 L352 185 L357 185 L353 188 L355 193 L350 190 L345 193 L347 188 L343 185 L348 185 Z" fill="#FDE047" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS BAR - No cards! */}
        <section className="py-12 bg-gradient-to-r from-primary via-primary-500 to-primary-600 text-white">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">200+</div>
                <div className="text-white/90">Клиенти</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">95%</div>
                <div className="text-white/90">Успешност</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">5+</div>
                <div className="text-white/90">Години искуство</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">4.9</div>
                <div className="text-white/90">Просечна оценка</div>
              </div>
            </div>
          </div>
        </section>

        {/* SPECIALTY AREAS - Split Layout, No Cards! */}
        <section className="section">
          <div className="container-custom">
            <div className="text-center mb-16">
              <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                Моја експертиза
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-text mb-4">
                Области на специјализација
              </h2>
            </div>

            <div className="space-y-24">
              {/* Weight Loss - Image Right */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="inline-block p-4 bg-primary/10 rounded-2xl">
                    <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-text">
                    Намалување на тежина
                  </h3>
                  <p className="text-lg text-text-secondary leading-relaxed">
                    Науката засновани на докази за одржливо намалување на тежина без екстремни диети или гладување. Фокус на долгорочни навики и здрав однос со храната.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-text-secondary">Калоричен дефицит со задоволување</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-text-secondary">Управување со метаболизам</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-text-secondary">Одржување на мускулна маса</span>
                    </li>
                  </ul>
                  <Link href="/services" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                    Дознај повеќе
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
                <div className="relative h-[500px] bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl overflow-hidden flex items-center justify-center">
                  <Image
                    src="/front-page/Лого (3).png"
                    alt="Илустрација за одржливо намалување на тежина - човечко тело со балансирана исхрана и метаболизам"
                    width={500}
                    height={500}
                    className="object-contain w-full h-full p-8"
                  />
                </div>
              </div>

              {/* Gut Health - Image Left */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative h-96 bg-gradient-to-br from-green-100 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-3xl overflow-hidden lg:order-1">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-64 h-64 text-green-500/20" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="space-y-6 lg:order-2">
                  <div className="inline-block p-4 bg-green-100 dark:bg-green-900/40 rounded-2xl">
                    <svg className="w-12 h-12 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-text">
                    Здравје на цревата
                  </h3>
                  <p className="text-lg text-text-secondary leading-relaxed">
                    Подобрете го здравјето на вашиот дигестивен систем и решете проблеми со надување, ИБС и други нарушувања. Природен пристап кон балансиран микробиом.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-text-secondary">Оптимизација на микробиом</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-text-secondary">Управување со ИБС</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-text-secondary">Идентификација на триггери</span>
                    </li>
                  </ul>
                  <Link href="/services" className="inline-flex items-center gap-2 text-green-600 dark:text-green-400 font-medium hover:gap-3 transition-all">
                    Дознај повеќе
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Sports Nutrition - Image Right */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="inline-block p-4 bg-blue-100 dark:bg-blue-900/40 rounded-2xl">
                    <svg className="w-12 h-12 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-text">
                    Спортска исхрана
                  </h3>
                  <p className="text-lg text-text-secondary leading-relaxed">
                    Оптимизирајте ги вашите перформанси, опоравување и градење на мускули со прецизна спортска исхрана. Идеално за атлети и активни луѓе.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-text-secondary">Макро и микро нутриенти</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-text-secondary">Исхрана околу тренинг</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-text-secondary">Стратегии за опоравување</span>
                    </li>
                  </ul>
                  <Link href="/services" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:gap-3 transition-all">
                    Дознај повеќе
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
                <div className="relative h-96 bg-gradient-to-br from-blue-100 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-64 h-64 text-blue-500/20" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* View All Services */}
            <div className="text-center mt-16">
              <Link href="/services" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
                Види ги сите услуги
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* PROCESS ROADMAP - Vertical Timeline */}
        <section className="section bg-gradient-to-b from-primary/5 to-background">
          <div className="container-custom">
            <div className="text-center mb-16">
              <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                Како работиме
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-text mb-4">
                Вашиот пат до успех
              </h2>
              <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                Едноставен и ефективен процес за постигнување на вашите цели
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary-400 to-primary-200"></div>

                {/* Steps */}
                <div className="space-y-16">
                  {[
                    {
                      num: '01',
                      title: 'Првична Консултација',
                      desc: 'Детален преглед на вашата исхрана, здравствена историја и цели. Слушаме ваworkshops приказна.',
                      color: 'primary'
                    },
                    {
                      num: '02',
                      title: 'Персонализиран План',
                      desc: 'Креираме уникатен план прилагоден на вашите потреби, преференции и животен стил.',
                      color: 'blue'
                    },
                    {
                      num: '03',
                      title: 'Имплементација',
                      desc: 'Почнувате со планот со наша поддршка. Редовно следење и прилагодување.',
                      color: 'green'
                    },
                    {
                      num: '04',
                      title: 'Следење и Прилагодување',
                      desc: 'Редовни follow-ups за да осигураме дека сè функционира. Правиме промени по потреба.',
                      color: 'purple'
                    },
                    {
                      num: '05',
                      title: 'Долгорочен Успех',
                      desc: 'Градиме одржливи навики за долгорочно здравје и благосостојба.',
                      color: 'primary'
                    }
                  ].map((step, idx) => (
                    <div key={idx} className={`relative flex items-center ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:gap-16`}>
                      {/* Timeline Dot */}
                      <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-10">
                        {step.num}
                      </div>

                      {/* Content */}
                      <div className={`w-full md:w-5/12 ${idx % 2 === 0 ? 'md:text-right md:pr-24' : 'md:pl-24'} pl-24 md:pl-0`}>
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                          <h3 className="text-2xl font-bold text-text mb-2">{step.title}</h3>
                          <p className="text-text-secondary">{step.desc}</p>
                        </div>
                      </div>

                      {/* Spacer for alternating layout */}
                      <div className="hidden md:block w-5/12"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION - Full Width Vibrant */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-500 to-primary-700 py-24">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold">
                Подготвени да ги постигнете вашите цели?
              </h2>
              <p className="text-xl text-white/90">
                Закажете вашата прва консултација и започнете го патувањето кон подобро здравје денес.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link href="/booking" className="bg-white text-primary hover:bg-gray-50 font-semibold text-lg px-10 py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center gap-2">
                  Закажи консултација
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold text-lg px-10 py-4 rounded-xl transition-all duration-300 inline-flex items-center justify-center">
                  Контактирај нè
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
