'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface LanguageSwitcherProps {
  currentLang: 'mk' | 'en';
}

export default function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
  const pathname = usePathname();
  
  // Generate the alternate language URL
  const getAlternateUrl = () => {
    if (currentLang === 'mk') {
      // Switch to English
      return `/en${pathname}`;
    } else {
      // Switch to Macedonian (remove /en prefix)
      return pathname.replace(/^\/en/, '') || '/';
    }
  };

  const alternateUrl = getAlternateUrl();
  const alternateLang = currentLang === 'mk' ? 'en' : 'mk';
  const alternateLangLabel = currentLang === 'mk' ? 'EN' : 'МК';

  return (
    <Link
      href={alternateUrl}
      hrefLang={alternateLang}
      className="px-3 py-2 rounded-lg font-medium transition-colors hover:bg-background-secondary min-w-[44px] min-h-[44px] flex items-center justify-center"
      aria-label={
        currentLang === 'mk'
          ? 'Switch to English'
          : 'Префрли на македонски'
      }
    >
      {alternateLangLabel}
    </Link>
  );
}
