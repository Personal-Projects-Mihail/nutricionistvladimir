import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingForm from '@/components/BookingForm';
import { generateMetadata } from '@/lib/metadata';
import { generateBreadcrumbSchema, safeJsonLd } from '@/lib/structured-data';
import BookingIllustration from '@/components/illustrations/BookingIllustration';

export const metadata: Metadata = generateMetadata('en', {
  title: 'Book Consultation | Vladimir Nutritionist',
  description:
    'Book your first nutrition consultation with registered nutritionist Vladimir. Online and in-person available across North Macedonia.',
  path: '/booking',
  keywords: [
    'book consultation',
    'appointment',
    'reservation',
    'online consultation',
    'nutritionist appointment',
  ],
});

export default function BookingPageEN() {
  const breadcrumbSchema = generateBreadcrumbSchema('en', [
    { name: 'Book Consultation', path: '/booking' },
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
                <div className="inline-block">
                  <span className="bg-gradient-to-br from-primary to-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Start Your Journey
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text leading-tight">
                  Book Consultation
                </h1>
                <p className="text-lg md:text-xl text-text-secondary">
                  The first step to better health starts here
                </p>
              </div>
              
              <div className="relative">
                <BookingIllustration className="w-full h-auto animate-float" />
              </div>
            </div>
          </div>
        </section>

        {/* Booking Form Section */}
        <section className="section bg-gradient-to-br from-primary/5 via-green-50/50 to-background">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <div className="relative overflow-hidden bg-gradient-to-br from-white to-emerald-50/30 border-2 border-primary/20 rounded-3xl p-8 md:p-12 shadow-xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>
                <div className="mb-8 relative z-10">
                  <h2 className="text-2xl font-bold text-text mb-4">
                    Fill Out the Form
                  </h2>
                  <p className="text-text-secondary">
                    Please fill out the form below and we will contact you within 24
                    hours to confirm your appointment.
                  </p>
                </div>

                <div className="relative z-10">
                  <BookingForm lang="en" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="section bg-gradient-to-br from-primary/20 to-primary/5">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-block mb-4">
                  <span className="bg-gradient-to-br from-emerald-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    4 Simple Steps
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-text">
                  What Happens Next?
                </h2>
              </div>

              <div className="space-y-6">
                <div className="group relative overflow-hidden bg-gradient-to-br from-primary/10 to-emerald-50 border-2 border-primary/20 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                        1
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-text mb-2">
                        Appointment Confirmation
                      </h3>
                      <p className="text-text-secondary">
                        We will contact you within 24 hours to confirm your preferred date
                        and time, or suggest alternative appointments.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group relative overflow-hidden bg-gradient-to-br from-emerald-50 to-green-100 border-2 border-emerald-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                        2
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-text mb-2">
                        Health Questionnaire
                      </h3>
                      <p className="text-text-secondary">
                        You will receive a detailed questionnaire so we can better prepare
                        for your consultation and understand your needs.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group relative overflow-hidden bg-gradient-to-br from-primary/10 to-emerald-50 border-2 border-primary/20 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                        3
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-text mb-2">
                        Initial Consultation
                      </h3>
                      <p className="text-text-secondary">
                        60-90 minute session where we will discuss your nutrition, health
                        goals, and create a personalized plan.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group relative overflow-hidden bg-gradient-to-br from-emerald-50 to-green-100 border-2 border-emerald-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                        4
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-text mb-2">
                        Your Personalized Plan
                      </h3>
                      <p className="text-text-secondary">
                        After the consultation, you will receive a detailed nutrition plan
                        with specific recommendations, recipes, and guidelines.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Questions CTA Section */}
        <section className="section bg-gradient-to-br from-primary/5 via-green-50/50 to-background">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <div className="relative overflow-hidden rounded-3xl p-12 bg-gradient-to-br from-primary via-primary-500 to-primary-700 text-white shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>
                
                <div className="relative z-10 text-center space-y-6">
                  <h2 className="text-2xl md:text-3xl font-bold">
                    Have Questions?
                  </h2>
                  <p className="text-white/90 text-lg">
                    If you have questions before booking, feel free to contact us
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="mailto:nutricionistvladimir@gmail.com"
                      className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-lg"
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
                    <a
                      href="tel:+389XXXXXXXX"
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
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      Call Us
                    </a>
                  </div>
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
