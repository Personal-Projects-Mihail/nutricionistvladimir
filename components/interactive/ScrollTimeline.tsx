'use client';

import { useEffect, useRef, useState } from 'react';

interface TimelineStep {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface ScrollTimelineProps {
  steps: TimelineStep[];
  title: string;
  subtitle?: string;
}

export function ScrollTimeline({ steps, title, subtitle }: ScrollTimelineProps) {
  const [activeStep, setActiveStep] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const windowHeight = window.innerHeight;
      const triggerPoint = windowHeight / 2;

      stepRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (rect.top < triggerPoint && rect.bottom > triggerPoint) {
            setActiveStep(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={timelineRef} className="relative py-16 md:py-24">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>

      {/* Timeline Line - Sticky */}
      <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1">
        <div className="sticky top-24 h-screen flex items-center">
          <div className="w-1 bg-gray-200 dark:bg-gray-700 rounded-full h-96 relative">
            <div
              className="absolute top-0 left-0 w-full bg-primary rounded-full transition-all duration-300 ease-out"
              style={{
                height: `${((activeStep + 1) / steps.length) * 100}%`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Steps */}
      <div className="space-y-24 md:space-y-32">
        {steps.map((step, index) => (
          <div
            key={index}
            ref={(el) => {
              stepRefs.current[index] = el;
            }}
            className={`relative transition-opacity duration-500 ${
              activeStep === index ? 'opacity-100' : 'opacity-40'
            }`}
          >
            <div className={`flex flex-col lg:flex-row items-center gap-8 ${
              index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            }`}>
              {/* Content */}
              <div className="flex-1 w-full">
                <div className={`bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border-2 transition-all duration-500 ${
                  activeStep === index
                    ? 'border-primary scale-105 shadow-xl'
                    : 'border-gray-200 dark:border-gray-700'
                }`}>
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center transition-colors ${
                      activeStep === index
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                    }`}>
                      {step.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`text-sm font-bold px-3 py-1 rounded-full ${
                          activeStep === index
                            ? 'bg-primary/10 text-primary'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                        }`}>
                          {step.number}
                        </span>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center Icon for mobile */}
              <div className="lg:hidden flex-shrink-0">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all ${
                  activeStep === index
                    ? 'bg-primary text-white scale-125'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-600'
                }`}>
                  <div className="w-4 h-4 rounded-full bg-current" />
                </div>
              </div>

              {/* Center Dot for desktop */}
              <div className="hidden lg:flex flex-shrink-0 z-10">
                <div className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 ${
                  activeStep === index
                    ? 'bg-primary text-white scale-125 shadow-lg shadow-primary/50'
                    : 'bg-white dark:bg-gray-800 text-gray-400 border-2 border-gray-200 dark:border-gray-700'
                }`}>
                  <div className="text-3xl">{step.icon}</div>
                </div>
              </div>

              {/* Spacer */}
              <div className="flex-1 hidden lg:block" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
