'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  lang: 'mk' | 'en';
}

interface NavLink {
  href: string;
  label: string;
}

export default function Header({ lang }: HeaderProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const basePath = lang === 'mk' ? '' : '/en';

  const navigation: NavLink[] =
    lang === 'mk'
      ? [
          { href: `${basePath}/`, label: 'Почетна' },
          { href: `${basePath}/about`, label: 'За мене' },
          { href: `${basePath}/services`, label: 'Услуги' },
          { href: `${basePath}/testimonials`, label: 'Сведоштва' },
          { href: `${basePath}/contact`, label: 'Контакт' },
        ]
      : [
          { href: `${basePath}`, label: 'Home' },
          { href: `${basePath}/about`, label: 'About' },
          { href: `${basePath}/services`, label: 'Services' },
          { href: `${basePath}/testimonials`, label: 'Testimonials' },
          { href: `${basePath}/contact`, label: 'Contact' },
        ];

  const bookingLabel = lang === 'mk' ? 'Закажи консултација' : 'Book Consultation';
  const bookingHref = `${basePath}/booking`;

  const isActive = (href: string) => {
    if (href === basePath || href === `${basePath}/`) {
      return pathname === basePath || pathname === `${basePath}/`;
    }
    return pathname === href;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container-custom" aria-label={lang === 'mk' ? 'Главна навигација' : 'Main navigation'}>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href={basePath || '/'}
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <Image
              src="/logo.png"
              alt={lang === 'mk' ? 'Владимир' : 'Vladimir'}
              width={180}
              height={60}
              className="h-14 w-auto md:h-16"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-6">
            <ul className="flex items-center gap-6">
              {navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      isActive(link.href)
                        ? 'text-primary'
                        : 'text-text-secondary'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <Link href={bookingHref} className="btn-primary">
              {bookingLabel}
            </Link>

            {/* Theme Toggle */}
            <ThemeToggle lang={lang} />

            {/* Language Switcher */}
            <LanguageSwitcher currentLang={lang} />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-background-secondary min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={lang === 'mk' ? 'Отвори мени' : 'Open menu'}
          >
            {mobileMenuOpen ? (
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
                aria-hidden="true"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
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
                aria-hidden="true"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <ul className="flex flex-col gap-4">
              {navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block text-base font-medium transition-colors hover:text-primary ${
                      isActive(link.href)
                        ? 'text-primary'
                        : 'text-text-secondary'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href={bookingHref}
                  className="btn-primary w-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {bookingLabel}
                </Link>
              </li>
              <li className="flex items-center gap-4 pt-2">
                <ThemeToggle lang={lang} />
                <LanguageSwitcher currentLang={lang} />
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
