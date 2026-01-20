'use client';

import { useEffect, useRef, useState, ReactElement } from 'react';

interface ProcessStep {
  num: string;
  title: string;
  desc: string;
  icon: ReactElement;
}

const steps: ProcessStep[] = [
  {
    num: '1',
    title: 'Book a Consultation with Vladimir',
    desc: 'Choose a time slot and send your request',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    num: '2',
    title: 'Connect with Vladimir',
    desc: 'Our system connects you with Vladimir - expert tailored to your needs',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    num: '3',
    title: 'Get Your Personalized Plan',
    desc: 'A personalized plan for your goals and needs',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    num: '4',
    title: 'Implement & Track Progress',
    desc: 'Start your plan with our continuous support and results monitoring',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    num: '5',
    title: 'Achieve Long-term Success',
    desc: 'Reach your goals and build sustainable habits for life',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

export default function ScrollProcessEN() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const containerTop = containerRef.current.getBoundingClientRect().top;
      const containerHeight = containerRef.current.offsetHeight;
      const viewportMiddle = window.innerHeight / 2;

      // Find which step is closest to the middle of viewport
      let closestStep = 0;
      let closestDistance = Infinity;

      stepRefs.current.forEach((stepRef, index) => {
        if (!stepRef) return;
        
        const stepTop = stepRef.getBoundingClientRect().top;
        const stepMiddle = stepTop + stepRef.offsetHeight / 2;
        const distance = Math.abs(stepMiddle - viewportMiddle);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestStep = index;
        }
      });

      setActiveStep(closestStep);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="section bg-gradient-to-b from-background to-primary/5">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-4">
            Your Path to a Healthier Body
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            A simple and healthy way to achieve your goals
          </p>
        </div>

        <div ref={containerRef} className="max-w-5xl mx-auto py-12">
          <div className="relative">
            {/* Vertical connecting line */}
            <div className="absolute left-8 md:left-12 top-0 bottom-0 w-0.5 bg-border"></div>

            {/* Steps */}
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    stepRefs.current[index] = el;
                  }}
                  className="relative"
                >
                  <div className="flex items-start gap-6 md:gap-12">
                    {/* Left side - Number circle */}
                    <div className="flex-shrink-0 flex flex-col items-center">
                      <div
                        className={`
                          w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl
                          transition-all duration-500 relative z-10
                          ${
                            activeStep === index
                              ? 'bg-primary text-white scale-110 shadow-xl shadow-primary/30'
                              : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                          }
                        `}
                      >
                        {step.num}
                      </div>
                    </div>

                    {/* Right side - Content */}
                    <div
                      className={`
                        flex-1 pb-8 transition-all duration-500
                        ${activeStep === index ? 'opacity-100' : 'opacity-60'}
                      `}
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div
                          className={`
                            flex-shrink-0 p-3 rounded-lg transition-all duration-500
                            ${
                              activeStep === index
                                ? 'bg-primary/10 text-primary'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400'
                            }
                          `}
                        >
                          {step.icon}
                        </div>
                        <div>
                          <h3
                            className={`
                              text-2xl md:text-3xl font-bold mb-2 transition-colors duration-500
                              ${
                                activeStep === index
                                  ? 'text-text'
                                  : 'text-text-secondary'
                              }
                            `}
                          >
                            {step.title}
                          </h3>
                          <p className="text-base md:text-lg text-text-secondary leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <a
            href="/en/booking"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Book Consultation
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
