import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing | Vladimir - Registered Nutritionist',
  description: 'Choose the package that suits you. Personalized nutrition plans, online consultations, and daily support to achieve your health goals.',
  openGraph: {
    title: 'Pricing | Vladimir - Registered Nutritionist',
    description: 'Choose the package that suits you. Personalized nutrition plans, online consultations, and daily support.',
  },
};

export default function PricingPage() {
  const pricingPlans = [
    {
      id: 'beginner',
      name: 'BEGINNER',
      duration: '1 MONTH',
      price: '3,000',
      pricePerMonth: '3,000',
      currency: 'MKD',
      features: [
        'Personalized nutrition plan',
        '2 online consultations (30 minutes)',
        'Daily online support',
      ],
      popular: false,
      gradient: 'from-primary-400/20 to-green-400/10',
      borderGlow: 'group-hover:ring-primary-400/40',
    },
    {
      id: 'standard',
      name: 'STANDARD',
      duration: '3 MONTHS',
      price: '8,000',
      pricePerMonth: '2,666',
      currency: 'MKD',
      features: [
        'Personalized nutrition plan',
        '7 online consultations (30 minutes)',
        'Daily online support',
        'Additional recipe handbook',
      ],
      popular: true,
      gradient: 'from-primary-500/30 to-emerald-500/20',
      borderGlow: 'group-hover:ring-primary-500/50',
    },
    {
      id: 'premium',
      name: 'PREMIUM',
      duration: '6 MONTHS',
      price: '15,000',
      pricePerMonth: '2,500',
      currency: 'MKD',
      features: [
        'Personalized nutrition plan',
        '15 online consultations (30 minutes)',
        'Daily online support',
        'Additional recipe handbook',
      ],
      popular: false,
      gradient: 'from-emerald-500/30 to-green-600/20',
      borderGlow: 'group-hover:ring-emerald-500/50',
    },
  ];

  return (
    <>
      <Header lang="en" />

      <main id="main-content">
        {/* Hero Section */}
        <section className="relative min-h-[40vh] flex items-center overflow-hidden bg-gradient-to-br from-cream via-white to-primary/5">
          {/* Decorative blur circles */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 -left-24 w-80 h-80 bg-green-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
          
          <div className="container-custom relative z-10 py-12 text-center">
            {/* Section Header */}
            <div className="space-y-4 animate-fade-in">
              <span className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-primary/20 to-green-400/20 text-primary-900 dark:text-primary-300 text-sm font-semibold backdrop-blur-sm border border-primary/20">
                Pricing
              </span>
              <h1 className="font-serif text-5xl md:text-6xl font-bold bg-gradient-to-br from-gray-900 via-primary-800 to-green-700 bg-clip-text text-transparent dark:from-gray-100 dark:via-primary-300 dark:to-green-400 leading-tight">
                Choose Your Package
              </h1>
              <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
                Each package is designed to provide personalized support on your journey to better health
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
          
          <div className="container-custom relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div
                  key={plan.id}
                  className={`group relative flex overflow-hidden rounded-3xl bg-gradient-to-br ${plan.gradient} backdrop-blur-sm transition-all duration-500 hover:scale-105 animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Popular badge - top right of card */}
                  {plan.popular && (
                    <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-primary via-green-500 to-emerald-500 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg whitespace-nowrap">
                      Most Popular
                    </div>
                  )}

                  {/* Card content */}
                  <div className={`relative flex flex-col h-full w-full p-8 rounded-3xl bg-white/80 dark:bg-background-secondary/80 backdrop-blur-xl shadow-soft-lg ring-1 ring-primary/10 ${plan.borderGlow} transition-all duration-500`}>
                    {/* Plan header */}
                    <div className="text-center mb-8 space-y-2">
                      <h3 className="text-sm font-bold text-primary-700 dark:text-primary-400 tracking-wider">
                        {plan.duration}
                      </h3>
                      <h2 className="font-serif text-3xl font-bold text-text">
                        {plan.name}
                      </h2>
                    </div>

                    {/* Price */}
                    <div className="text-center mb-8 pb-8 border-b border-border">
                      <div className="flex items-end justify-center gap-2 mb-2">
                        <span className="font-serif text-5xl font-bold bg-gradient-to-br from-primary-700 to-green-600 bg-clip-text text-transparent dark:from-primary-400 dark:to-green-400">
                          {plan.price}
                        </span>
                        <span className="text-text-secondary text-lg mb-2">{plan.currency}</span>
                      </div>
                      <p className="text-sm text-text-secondary">
                        {plan.pricePerMonth} {plan.currency} / month
                      </p>
                    </div>

                    {/* Features */}
                    <div className="flex-1 space-y-4 mb-8">
                      <h4 className="font-semibold text-text mb-4">What's included:</h4>
                      <ul className="space-y-3">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="flex-shrink-0 text-primary-600 dark:text-primary-400 mt-0.5"
                              aria-hidden="true"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <span className="text-text-secondary text-sm leading-relaxed">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <Link
                      href="/en/booking"
                      className={`block w-full text-center ${
                        plan.popular
                          ? 'bg-gradient-to-r from-primary via-green-500 to-emerald-500 text-white hover:shadow-xl'
                          : 'bg-background-secondary text-text hover:bg-background-tertiary'
                      } px-6 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 group-hover:shadow-lg`}
                    >
                      Book Consultation
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom note */}
            <div className="mt-16 text-center">
              <p className="text-text-secondary max-w-2xl mx-auto">
                <span className="font-semibold text-text">Need help choosing?</span>{' '}
                Contact me for a free consultation and together we'll find the best package for you.
              </p>
              <Link
                href="/en/contact"
                className="inline-flex items-center gap-2 mt-6 text-primary-700 dark:text-primary-400 font-semibold hover:gap-3 transition-all duration-300"
              >
                Contact me
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
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer lang="en" />
    </>
  );
}
