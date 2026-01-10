import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateMetadata } from '@/lib/metadata';
import { generateBreadcrumbSchema, safeJsonLd } from '@/lib/structured-data';
import ContactIllustration from '@/components/illustrations/ContactIllustration';

export const metadata: Metadata = generateMetadata('en', {
  title: 'Contact | Vladimir Nutritionist',
  description:
    'Contact nutritionist Vladimir for questions, consultations, or service information. Available online and by phone.',
  path: '/contact',
  keywords: ['contact', 'email', 'phone', 'location', 'business hours'],
});

export default function ContactPageEN() {
  const breadcrumbSchema = generateBreadcrumbSchema('en', [
    { name: 'Contact', path: '/contact' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }}
      />

      <Header lang="en" />

      <main id="main-content">
        {/* Hero Section with Illustration */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-emerald-50/50 to-background">
          {/* Decorative blur circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl -ml-40 -mb-40"></div>
          
          <div className="container-custom relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center section">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text leading-tight">
                  Contact Us
                </h1>
                <p className="text-lg md:text-xl text-text-secondary max-w-2xl">
                  Have questions? We're happy to help
                </p>
              </div>
              
              <div className="relative">
                <ContactIllustration className="w-full h-auto animate-float" />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="section bg-gradient-to-br from-primary/5 via-green-50/50 to-background">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Email */}
              <div className="group relative overflow-hidden bg-gradient-to-br from-primary/10 to-emerald-50 border-2 border-primary/20 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
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
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-text mb-2">Email</h3>
                <a
                  href="mailto:nutricionistvladimir@gmail.com"
                  className="text-primary hover:underline break-all font-medium"
                >
                  nutricionistvladimir@gmail.com
                </a>
                <p className="text-sm text-text-tertiary mt-2">
                  Response within 24 hours
                </p>
              </div>

              {/* Phone */}
              <div className="group relative overflow-hidden bg-gradient-to-br from-emerald-50 to-green-100 border-2 border-emerald-200 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
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
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-text mb-2">Phone</h3>
                <a href="tel:+389XXXXXXXX" className="text-emerald-700 hover:underline font-medium">
                  +389 XX XXX XXX
                </a>
                <p className="text-sm text-text-tertiary mt-2">
                  Mon-Fri, 09:00-18:00
                </p>
              </div>

              {/* Location */}
              <div className="group relative overflow-hidden bg-gradient-to-br from-primary/10 to-emerald-50 border-2 border-primary/20 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
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
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-text mb-2">Location</h3>
                <p className="text-text-secondary font-medium">North Macedonia</p>
                <p className="text-sm text-text-tertiary mt-2">
                  Online consultations available
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-gradient-to-br from-primary/20 to-primary/5">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto relative overflow-hidden rounded-3xl p-12 bg-gradient-to-br from-primary via-primary-500 to-primary-700 text-white shadow-2xl">
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>
              
              <div className="relative z-10 text-center space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Ready to Get Started?
                </h2>
                <p className="text-lg text-white/90">
                  Book your first consultation and take the first step toward better health
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/en/booking" 
                    className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-lg"
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
                  <a
                    href="mailto:nutricionistvladimir@gmail.com"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300"
                  >
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
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    Send Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer lang="en" />
    </>
  );
}
