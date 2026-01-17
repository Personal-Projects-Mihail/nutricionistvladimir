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
                  <span className="text-primary font-semibold">Happy Clients</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text leading-tight">
                Client Reviews
              </h1>
              <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
                Real stories from people who achieved their health goals
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
                  Leave a Google Review
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
