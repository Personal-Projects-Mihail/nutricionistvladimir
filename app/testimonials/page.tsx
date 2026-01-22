'use client';

import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BrainIcon from '@/components/icons/BrainIcon';

export default function TestimonialsPage() {

  return (
    <>
      <Header lang="mk" />

      <main id="main-content">
        {/* Hero Section with Google Reviews */}
        <section className="section pt-24 pb-16 bg-gradient-to-br from-primary/5 via-green-50/50 to-background">
          <div className="container-custom">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-text mb-4">
                Што вели нашата заедница
              </h1>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Реални луѓе, реални резултати. Погледнете ги нивните приказни на трансформација.
              </p>
            </div>

            {/* Google Reviews Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {/* Review Card 1 */}
              <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Background Image Placeholder */}
                <div className="aspect-[3/4] bg-gradient-to-br from-emerald-100 to-green-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-sm font-medium">Background Image 1</p>
                    </div>
                  </div>
                </div>

                {/* Google Review Screenshot Overlay */}
                <div className="absolute top-8 left-8 right-8 bg-white rounded-xl shadow-2xl p-6 group-hover:scale-[1.02] transition-transform duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-emerald-500 rounded-full"></div>
                    <div className="flex-1">
                      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                      <div className="h-3 bg-gray-100 rounded w-1/2"></div>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-100 rounded w-full"></div>
                    <div className="h-3 bg-gray-100 rounded w-full"></div>
                    <div className="h-3 bg-gray-100 rounded w-4/5"></div>
                  </div>
                  <p className="text-xs text-center text-gray-400 mt-4 font-medium">
                    Google Review Screenshot 1
                  </p>
                </div>
              </div>

              {/* Review Card 2 */}
              <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Background Image Placeholder */}
                <div className="aspect-[3/4] bg-gradient-to-br from-blue-100 to-cyan-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-sm font-medium">Background Image 2</p>
                    </div>
                  </div>
                </div>

                {/* Google Review Screenshot Overlay */}
                <div className="absolute top-8 left-8 right-8 bg-white rounded-xl shadow-2xl p-6 group-hover:scale-[1.02] transition-transform duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full"></div>
                    <div className="flex-1">
                      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                      <div className="h-3 bg-gray-100 rounded w-1/2"></div>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-100 rounded w-full"></div>
                    <div className="h-3 bg-gray-100 rounded w-full"></div>
                    <div className="h-3 bg-gray-100 rounded w-4/5"></div>
                  </div>
                  <p className="text-xs text-center text-gray-400 mt-4 font-medium">
                    Google Review Screenshot 2
                  </p>
                </div>
              </div>

              {/* Review Card 3 */}
              <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Background Image Placeholder */}
                <div className="aspect-[3/4] bg-gradient-to-br from-amber-100 to-orange-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-sm font-medium">Background Image 3</p>
                    </div>
                  </div>
                </div>

                {/* Google Review Screenshot Overlay */}
                <div className="absolute top-8 left-8 right-8 bg-white rounded-xl shadow-2xl p-6 group-hover:scale-[1.02] transition-transform duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full"></div>
                    <div className="flex-1">
                      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                      <div className="h-3 bg-gray-100 rounded w-1/2"></div>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-100 rounded w-full"></div>
                    <div className="h-3 bg-gray-100 rounded w-full"></div>
                    <div className="h-3 bg-gray-100 rounded w-4/5"></div>
                  </div>
                  <p className="text-xs text-center text-gray-400 mt-4 font-medium">
                    Google Review Screenshot 3
                  </p>
                </div>
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
