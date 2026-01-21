'use client';

import { useEffect } from 'react';

interface IntakeFormProps {
  lang: 'mk' | 'en';
}

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: Element;
        prefill?: Record<string, string>;
        utm?: Record<string, string>;
      }) => void;
    };
  }
}

export default function IntakeForm({ lang }: IntakeFormProps) {
  const content = {
    mk: {
      title: 'Закажете консултација',
      subtitle: 'Изберете време кое ви одговара',
    },
    en: {
      title: 'Book a consultation',
      subtitle: 'Choose a time that works for you',
    },
  };

  const t = content[lang];

  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="w-full">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-text mb-2">{t.title}</h2>
        <p className="text-text-secondary">{t.subtitle}</p>
      </div>

      {/* Calendly Inline Widget */}
      <div
        className="calendly-inline-widget rounded-lg overflow-hidden"
        data-url="https://calendly.com/nutricionistvladimir/30min?hide_gdpr_banner=1"
        style={{ minWidth: '320px', height: '950px' }}
      />
    </div>
  );
}
