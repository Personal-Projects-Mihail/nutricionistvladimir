'use client';

import Link from 'next/link';
import { MotionWrapper, AntigravityElement } from '@/components/motion/MotionWrapper';

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-500 to-primary-700 py-16">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <AntigravityElement intensity={1.5} className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48" />
        <AntigravityElement intensity={1} className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white space-y-8">
          <MotionWrapper animation="scale" duration={0.8}>
            <h2 className="text-4xl md:text-5xl font-bold">
              Подготвени да ги постигнете вашите цели?
            </h2>
          </MotionWrapper>
          
          <MotionWrapper animation="fade" delay={0.2}>
            <p className="text-xl text-white/90">
              Закажете вашата прва консултација и започнете го патувањето кон подобро здравје денес.
            </p>
          </MotionWrapper>
          
          <MotionWrapper animation="slide-up" delay={0.4}>
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
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
