'use client';

import { useEffect, useRef, useState } from 'react';

interface StickyRevealProps {
  children: React.ReactNode;
  backgroundImage?: React.ReactNode;
  backgroundColor?: string;
  minHeight?: string;
}

export function StickyReveal({
  children,
  backgroundImage,
  backgroundColor = 'bg-primary/5',
  minHeight = 'min-h-[200vh]',
}: StickyRevealProps) {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const containerHeight = containerRef.current.offsetHeight;

      // Calculate progress based on scroll position
      const scrolled = windowHeight - rect.top;
      const total = containerHeight;
      const prog = Math.max(0, Math.min(1, scrolled / total));

      setProgress(prog);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className={`relative ${minHeight}`}>
      {/* Sticky Content */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div
          className={`absolute inset-0 ${backgroundColor} transition-opacity duration-300`}
          style={{ opacity: progress }}
        >
          {backgroundImage && (
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                transform: `scale(${0.8 + progress * 0.2})`,
                opacity: progress,
              }}
            >
              {backgroundImage}
            </div>
          )}
        </div>

        {/* Content */}
        <div
          className="relative z-10 max-w-4xl mx-auto px-6 transition-all duration-300"
          style={{
            transform: `translateY(${(1 - progress) * 50}px)`,
            opacity: progress,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
