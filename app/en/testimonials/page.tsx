'use client';

import { Metadata } from 'next';
import Link from 'next/link';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BrainIcon from '@/components/icons/BrainIcon';

const testimonials = [
  {
    name: 'Maria S.',
    subtitle: 'Weight Loss | 3 months',
    quote: '"Vladimir helped me lose 12kg in a healthy and sustainable way. Most importantly, I learned how to eat properly and not return to old habits. The personalized approach was key to my success."',
    results: '✓ Lost 12kg | ✓ Improved energy | ✓ Healthy habits',
    gradient: 'from-primary/10 to-emerald-50',
    borderColor: 'border-primary/20',
    iconGradient: 'from-primary to-primary-600',
    textColor: 'text-primary'
  },
  {
    name: 'Alexander M.',
    subtitle: 'Sports Nutrition | 4 months',
    quote: '"As an active athlete, I needed someone who understands sports nutrition. Vladimir created a precise plan that helped me improve my performance and recovery. Results are visible both on the field and in the gym."',
    results: '✓ Improved performance | ✓ Faster recovery | ✓ +3kg muscle mass',
    gradient: 'from-emerald-50 to-green-100',
    borderColor: 'border-emerald-200',
    iconGradient: 'from-emerald-500 to-green-600',
    textColor: 'text-emerald-700'
  },
  {
    name: 'Elena T.',
    subtitle: 'Gut Health | 2 months',
    quote: '"For years I struggled with bloating and IBS. After just 2 months working with Vladimir, symptoms significantly decreased. I finally know which foods work for me and feel much better."',
    results: '✓ Reduced bloating | ✓ Better digestion | ✓ More energy',
    gradient: 'from-primary/10 to-emerald-50',
    borderColor: 'border-primary/20',
    iconGradient: 'from-green-500 to-emerald-600',
    textColor: 'text-green-700'
  },
  {
    name: 'Jovana P.',
    subtitle: 'Hormonal Balance | 5 months',
    quote: '"With PCOS, I knew nutrition was important, but didn\'t know where to start. Vladimir gave me clear guidance and support. My cycle normalized and I lost weight I couldn\'t lose for years."',
    results: '✓ Improved hormonal balance | ✓ Regular cycle | ✓ -8kg',
    gradient: 'from-emerald-50 to-green-100',
    borderColor: 'border-emerald-200',
    iconGradient: 'from-teal-400 to-emerald-600',
    textColor: 'text-teal-700'
  },
  {
    name: 'Stefan D.',
    subtitle: 'Type 2 Diabetes | 6 months',
    quote: '"After being diagnosed with type 2 diabetes, I sought expert help for managing my health. Vladimir created a plan that helped me stabilize my blood sugar without feeling like I\'m on a strict diet."',
    results: '✓ Stable blood sugar | ✓ Lower HbA1c | ✓ Improved health',
    gradient: 'from-primary/10 to-emerald-50',
    borderColor: 'border-primary/20',
    iconGradient: 'from-primary-400 to-emerald-600',
    textColor: 'text-primary'
  },
  {
    name: 'The Petrovski Family',
    subtitle: 'Family Nutrition | 4 months',
    quote: '"Working with Vladimir transformed the way our family eats. The kids now eat more vegetables and we all have more energy. He helped us create healthy habits that work for everyone."',
    results: '✓ Better family nutrition | ✓ Kids eating healthy | ✓ More energy',
    gradient: 'from-emerald-50 to-green-100',
    borderColor: 'border-emerald-200',
    iconGradient: 'from-green-500 via-teal-500 to-cyan-600',
    textColor: 'text-green-700'
  }
];

export default function TestimonialsPageEN() {
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
      <Header lang="en" />

      <main id="main-content">
        {/* Hero Section with Google Reviews */}
        <section className="section pt-24 pb-16 bg-gradient-to-br from-primary/5 via-green-50/50 to-background">
          <div className="container-custom">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-text mb-4">
                What Our Community Says
              </h1>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Real people, real results. See their transformation stories.
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
                  aria-label="Previous review"
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
                  aria-label="Next review"
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
                    aria-label={`Go to review ${index + 1}`}
                  />
                ))}
              </div>

              {/* Disclaimer */}
              <div className="mt-8 text-center">
                <p className="text-xs text-text-tertiary leading-relaxed max-w-3xl mx-auto">
                  Important Note: All reviews are from real clients with their express consent. Results vary from person to person and depend on individual circumstances, initial condition and commitment to the plan. These stories are presented for educational purposes and do not guarantee specific results.
                </p>
              </div>

              {/* Google Review Link */}
              <div className="mt-8 text-center">
                <a
                  href="https://g.page/r/CSxP3aPwQt2XEBM/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white hover:bg-gray-50 border-2 border-primary/30 hover:border-primary/50 px-6 py-4 rounded-full font-semibold text-text shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  <span className="text-lg text-text">Leave a Google Review</span>
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
                  Ready for Your Success Story?
                </h2>
                <p className="text-lg text-white/90">
                  Book a consultation and start your journey to better health
                </p>
                <Link 
                  href="/en/booking" 
                  className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Book Consultation
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

      <Footer lang="en" />
    </>
  );
}
