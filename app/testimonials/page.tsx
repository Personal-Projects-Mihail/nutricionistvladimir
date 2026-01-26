'use client';

import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BrainIcon from '@/components/icons/BrainIcon';
import Image from 'next/image';

export default function TestimonialsPage() {

  return (
    <>
      <Header lang="mk" />

      <main id="main-content">
        {/* Hero Section with Google Reviews */}
        <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-gradient-to-br from-cream via-white to-primary/5">
          {/* Decorative blur circles */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 -left-24 w-80 h-80 bg-green-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
          
          <div className="container-custom relative z-10 py-12">
            {/* Section Header */}
            <div className="text-center mb-8 space-y-4 animate-fade-in">
              <span className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-primary/20 to-green-400/20 text-primary-900 dark:text-primary-300 text-sm font-semibold backdrop-blur-sm border border-primary/20 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                Рецензии
              </span>
              <h1 className="font-serif text-5xl md:text-6xl font-bold bg-gradient-to-br from-gray-900 via-primary-800 to-green-700 bg-clip-text text-transparent dark:from-gray-100 dark:via-primary-300 dark:to-green-400 leading-tight animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Што вели нашата заедница
              </h1>
            </div>

            {/* Google Reviews Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {/* Review Card 1 */}
              <div className="relative group overflow-hidden rounded-2xl shadow-soft-lg hover:shadow-soft-xl transition-all duration-500 ring-1 ring-primary/10 hover:ring-primary/30">
                {/* Background Image */}
                <div className="relative aspect-[3/4]">
                  <Image
                    src="/testimonials/image1.webp"
                    alt=""
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Review Overlay */}
                <div className="absolute top-6 left-6 right-6 flex justify-center pointer-events-none">
                  <div className="relative w-[85%] max-w-[280px] rounded-xl shadow-2xl overflow-hidden group-hover:scale-[1.03] transition-transform duration-300">
                    <Image
                      src="/testimonials/review1.webp"
                      alt=""
                      width={560}
                      height={360}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
  {/* Review Card 3 */}
  <div className="relative group overflow-hidden rounded-2xl shadow-soft-lg hover:shadow-soft-xl transition-all duration-500 ring-1 ring-green-400/10 hover:ring-green-400/30">
                {/* Background Image */}
                <div className="relative aspect-[3/4]">
                  <Image
                    src="/testimonials/image3.webp"
                    alt=""
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Review Overlay */}
                <div className="absolute top-6 left-6 right-6 flex justify-center pointer-events-none">
                  <div className="relative w-[85%] max-w-[280px] rounded-xl shadow-2xl overflow-hidden group-hover:scale-[1.03] transition-transform duration-300">
                    <Image
                      src="/testimonials/review3.webp"
                      alt=""
                      width={560}
                      height={360}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
               {/* Review Card 2 */}
               <div className="relative group overflow-hidden rounded-2xl shadow-soft-lg hover:shadow-soft-xl transition-all duration-500 ring-1 ring-emerald-400/10 hover:ring-emerald-400/30">
                {/* Background Image */}
                <div className="relative aspect-[3/4]">
                  <Image
                    src="/testimonials/image2.webp"
                    alt=""
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Review Overlay */}
                <div className="absolute top-6 left-6 right-6 flex justify-center pointer-events-none">
                  <div className="relative w-[85%] max-w-[280px] rounded-xl shadow-2xl overflow-hidden group-hover:scale-[1.03] transition-transform duration-300">
                    <Image
                      src="/testimonials/review2.webp"
                      alt=""
                      width={560}
                      height={360}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 md:py-20 overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-green-50/50 to-emerald-50/30 dark:from-primary/5 dark:via-green-900/20 dark:to-emerald-900/10" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-300/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
          
          <div className="container-custom relative z-10 text-center space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-700 via-green-600 to-emerald-600 bg-clip-text text-transparent dark:from-primary-400 dark:via-green-400 dark:to-emerald-400">
              Подготвени за вашата приказна на успех?
            </h2>

            <Link
              href="/booking"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary via-green-500 to-emerald-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 group"
            >
              Закажи консултација
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
                className="group-hover:translate-x-1 transition-transform"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </section>

      </main>

      <Footer lang="mk" />
    </>
  );
}
