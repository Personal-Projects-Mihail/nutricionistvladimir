import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaLinkedin, FaFacebook, FaTiktok } from 'react-icons/fa';

interface FooterProps {
  lang: 'mk' | 'en';
}

export default function Footer({ lang }: FooterProps) {
  const basePath = lang === 'mk' ? '' : '/en';
  const currentYear = new Date().getFullYear();

  const content = {
    mk: {
      tagline: 'Ваш партнер во здрава исхрана',
      quickLinks: 'Брзи линкови',
      legal: 'Правно',
      contact: 'Контакт',
      email: 'Email',
      phone: 'Телефон',
      disclaimer: 'Дисклејмер',
      disclaimerText:
        'Информациите на оваа веб-страница се само за едукативни цели и не треба да се сметаат за медицински совет. Секогаш консултирајте се со лиценциран здравствен професионалец пред да направите какви било промени во вашата исхрана или начин на живот.',
      privacy: 'Политика за приватност',
      terms: 'Услови за користење',
      rights: 'Сите права задржани',
      links: {
        home: 'Почетна',
        about: 'За мене',
        services: 'Услуги',
        testimonials: 'Рецензии',
        booking: 'Закажи консултација',
        contact: 'Контакт',
      },
    },
    en: {
      tagline: 'Your partner in healthy nutrition',
      quickLinks: 'Quick Links',
      legal: 'Legal',
      contact: 'Contact',
      email: 'Email',
      phone: 'Phone',
      disclaimer: 'Disclaimer',
      disclaimerText:
        'The information on this website is for educational purposes only and should not be considered medical advice. Always consult with a licensed healthcare professional before making any changes to your diet or lifestyle.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      rights: 'All rights reserved',
      links: {
        home: 'Home',
        about: 'About',
        services: 'Services',
        testimonials: 'Testimonials',
        booking: 'Book Consultation',
        contact: 'Contact',
      },
    },
  };

  const t = content[lang];

  return (
    <footer className="border-t border-border bg-background-secondary">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <Image
              src="/logo.png"
              alt={lang === 'mk' ? 'Владимир' : 'Vladimir'}
              width={180}
              height={60}
              className="h-10 w-auto md:h-12"
            />
            <p className="text-sm text-text-secondary">{t.tagline}</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-text">{t.quickLinks}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={`${basePath}/`}
                  className="text-sm text-text-secondary hover:text-primary transition-colors"
                >
                  {t.links.home}
                </Link>
              </li>
              <li>
                <Link
                  href={`${basePath}/about`}
                  className="text-sm text-text-secondary hover:text-primary transition-colors"
                >
                  {t.links.about}
                </Link>
              </li>
              <li>
                <Link
                  href={`${basePath}/services`}
                  className="text-sm text-text-secondary hover:text-primary transition-colors"
                >
                  {t.links.services}
                </Link>
              </li>
              <li>
                <Link
                  href={`${basePath}/testimonials`}
                  className="text-sm text-text-secondary hover:text-primary transition-colors"
                >
                  {t.links.testimonials}
                </Link>
              </li>
              <li>
                <Link
                  href={`${basePath}/booking`}
                  className="text-sm text-text-secondary hover:text-primary transition-colors"
                >
                  {t.links.booking}
                </Link>
              </li>
              <li>
                <Link
                  href={`${basePath}/contact`}
                  className="text-sm text-text-secondary hover:text-primary transition-colors"
                >
                  {t.links.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-text">{t.legal}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={`${basePath}/privacy`}
                  className="text-sm text-text-secondary hover:text-primary transition-colors"
                >
                  {t.privacy}
                </Link>
              </li>
              <li>
                <Link
                  href={`${basePath}/terms`}
                  className="text-sm text-text-secondary hover:text-primary transition-colors"
                >
                  {t.terms}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-text">{t.contact}</h3>
            <ul className="space-y-2">
              <li className="text-sm text-text-secondary">
                <span className="font-medium">{t.email}:</span>
                <br />
                <a
                  href="mailto:nutricionistvladimir@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  nutricionistvladimir@gmail.com
                </a>
              </li>
              <li className="text-sm text-text-secondary">
                <span className="font-medium">{t.phone}:</span>
                <br />
                <a
                  href="https://wa.me/38975453434"
                  className="hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +389 75 453 434
                </a>
              </li>
               
               {/* Social Media */}
<li className="pt-3">
  <div className="flex items-center gap-4 text-text-secondary">
    <a
      href="http://instagram.com/nutricionistvladimir"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      className="hover:text-primary transition-colors"
    >
      <FaInstagram size={20} />
    </a>

    <a
      href="https://www.linkedin.com/company/nutricionist-vladimir/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      className="hover:text-primary transition-colors"
    >
      <FaLinkedin size={20} />
    </a>

    <a
      href="https://www.facebook.com/profile.php?id=61564846086745"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
      className="hover:text-primary transition-colors"
    >
      <FaFacebook size={20} />
    </a>

    <a
      href="https://www.tiktok.com/@vladimir.nutricionist"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="TikTok"
      className="hover:text-primary transition-colors"
    >
      <FaTiktok size={20} />
    </a>
  </div>
</li>

            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 border-t border-border">
          <p className="text-center text-sm text-text-secondary">
            © {currentYear}{' '}
            {lang === 'mk' ? 'Нутриционист Владимир' : 'Vladimir Nutritionist'}. {t.rights}.
          </p>
        </div>
      </div>
    </footer>
  );
}
