'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MotionWrapper, AntigravityElement } from '@/components/motion/MotionWrapper';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-primary/10 to-background pt-4 pb-16">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <AntigravityElement intensity={0.8} className="absolute top-10 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <AntigravityElement intensity={1.2} className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-4">
          <MotionWrapper animation="slide-right" duration={0.8} className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight m-0">
              Вашиот пат кон{' '}
              <span className="text-primary relative inline-block">
                здрава исхрана
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path d="M2 10 Q150 2, 298 10" stroke="#A8DF8E" strokeWidth="3" strokeLinecap="round" fill="none"/>
                </svg>
              </span>{' '}
              почнува тука
            </h1>
            
            <MotionWrapper animation="fade" delay={0.3}>
              <p className="text-xl text-text-secondary leading-relaxed">
                Професионални консултации базирани на докази. Персонализиран пристап за долгорочни резултати.
              </p>
            </MotionWrapper>
            
            <MotionWrapper animation="slide-up" delay={0.5}>
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
            </MotionWrapper>
          </MotionWrapper>

          {/* Right Illustration */}
          <MotionWrapper animation="scale" delay={0.4} duration={1} className="relative w-full max-w-lg">
            <AntigravityElement intensity={0.5} className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full blur-2xl -z-10" />
            <div className="overflow-hidden rounded-3xl">
              <Image
                src="/front-page/vladimir.png"
                alt="Владимир - Регистриран нутриционист"
                width={600}
                height={600}
                className="object-cover w-full h-auto object-top block mt-0 md:-mt-32 lg:-mt-36"
                priority
              />
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
