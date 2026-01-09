import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingForm from '@/components/BookingForm';
import { generateMetadata } from '@/lib/metadata';
import { generateBreadcrumbSchema, safeJsonLd } from '@/lib/structured-data';

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
        <section className="section bg-gradient-to-b from-background to-background-secondary">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text leading-tight">
                Book Consultation
              </h1>
              <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
                The first step to better health starts here
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <div className="card">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-text mb-4">
                    Fill Out the Form
                  </h2>
                  <p className="text-text-secondary">
                    Please fill out the form below and we will contact you within 24
                    hours to confirm your appointment.
                  </p>
                </div>

                <BookingForm lang="en" />
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-background-secondary">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-text text-center mb-12">
                What Happens Next?
              </h2>

              <div className="space-y-6">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
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

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
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

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
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

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
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
        </section>

        <section className="section">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <div className="card bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                <h2 className="text-2xl font-bold text-text mb-4">
                  Have Questions?
                </h2>
                <p className="text-text-secondary mb-6">
                  If you have questions before booking, feel free to contact us
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:nutricionistvladimir@gmail.com"
                    className="btn-primary inline-flex items-center justify-center gap-2"
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
                    className="btn-secondary inline-flex items-center justify-center gap-2"
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
        </section>
      </main>

      <Footer lang="en" />
    </>
  );
}
