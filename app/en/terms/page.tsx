import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateMetadata('en', {
  title: 'Terms of Service | Vladimir Nutritionist',
  description: 'Terms of Service for the website and services of Vladimir Nutritionist. Please read carefully before using our services.',
  path: '/en/terms',
});

export default function TermsPage() {
  return (
    <>
      <Header lang="en" />

      <main id="main-content">
        <section className="section bg-gradient-to-b from-background to-background-secondary">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-text leading-tight">
                Terms of Service
              </h1>
              <p className="text-text-secondary">
                Last updated: {new Date().toLocaleDateString('en-US')}
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto card">
              <div className="prose prose-lg max-w-none">
                <p className="text-text-secondary">
                  Welcome to Vladimir Nutritionist&apos;s website. By accessing and using this
                  website, you agree to be bound by these Terms of Service. Please read them
                  carefully before using our services.
                </p>

                <h2 className="text-2xl font-bold text-text mt-8 mb-4">
                  1. General Terms
                </h2>
                <p className="text-text-secondary">
                  By using this website, you confirm that:
                </p>
                <ul className="text-text-secondary space-y-2">
                  <li>You are at least 18 years old or have parental/guardian consent</li>
                  <li>You accept these terms and our Privacy Policy</li>
                  <li>You are responsible for the accuracy of information you provide</li>
                  <li>You will not use the site for illegal purposes</li>
                </ul>

                <h2 className="text-2xl font-bold text-text mt-8 mb-4">
                  2. Description of Services
                </h2>
                <p className="text-text-secondary">
                  Vladimir Nutritionist offers:
                </p>
                <ul className="text-text-secondary space-y-2">
                  <li>Individual nutrition consultations</li>
                  <li>Personalized meal plans</li>
                  <li>Online and in-person consultations</li>
                  <li>Progress tracking and plan adjustments</li>
                  <li>Educational content about healthy nutrition</li>
                </ul>
                <p className="text-text-secondary mt-4">
                  Services are provided by a licensed nutritionist and are based on
                  scientifically proven nutrition methods.
                </p>

                <h2 className="text-2xl font-bold text-text mt-8 mb-4">
                  3. Booking and Cancellation
                </h2>
                <p className="text-text-secondary">
                  The following rules apply to booking consultations:
                </p>
                <ul className="text-text-secondary space-y-2">
                  <li>Consultations are booked through the website or by phone</li>
                  <li>Confirmation of your appointment will be sent to your email address</li>
                  <li>Cancellation is possible at least 24 hours before the scheduled appointment</li>
                  <li>No-shows without prior notice may result in a charge</li>
                  <li>We reserve the right to reschedule appointments with prior notice</li>
                </ul>

                <h2 className="text-2xl font-bold text-text mt-8 mb-4">
                  4. Payment
                </h2>
                <p className="text-text-secondary">
                  Payment terms are as follows:
                </p>
                <ul className="text-text-secondary space-y-2">
                  <li>Service prices are listed on the services page</li>
                  <li>Payment is made before or after the consultation, as agreed</li>
                  <li>We accept cash payment and bank transfer</li>
                  <li>Prices are subject to change without prior notice</li>
                </ul>

                <h2 className="text-2xl font-bold text-text mt-8 mb-4">
                  5. Medical Disclaimer
                </h2>
                <p className="text-text-secondary">
                  <strong>IMPORTANT:</strong> The information and services provided by Vladimir
                  Nutritionist are for educational and informational purposes only. They do NOT
                  constitute medical advice, diagnosis, or treatment.
                </p>
                <ul className="text-text-secondary space-y-2">
                  <li>
                    Always consult your doctor before starting a new diet regimen, especially
                    if you have health conditions
                  </li>
                  <li>
                    Nutritional advice does not replace recommendations from a doctor or other
                    healthcare professional
                  </li>
                  <li>
                    Results may vary from person to person and depend on many factors
                  </li>
                  <li>
                    We do not guarantee specific results from following our meal plans
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-text mt-8 mb-4">
                  6. Intellectual Property
                </h2>
                <p className="text-text-secondary">
                  All content on this website is protected by copyright:
                </p>
                <ul className="text-text-secondary space-y-2">
                  <li>
                    Text, images, logos, and materials are the property of Vladimir
                    Nutritionist
                  </li>
                  <li>
                    Reproduction, distribution, or modification without written consent is
                    prohibited
                  </li>
                  <li>
                    Personalized meal plans are intended solely for the client&apos;s personal use
                  </li>
                  <li>Sharing plans with third parties is strictly prohibited</li>
                </ul>

                <h2 className="text-2xl font-bold text-text mt-8 mb-4">
                  7. Limitation of Liability
                </h2>
                <p className="text-text-secondary">
                  Vladimir Nutritionist is not responsible for:
                </p>
                <ul className="text-text-secondary space-y-2">
                  <li>
                    Damages or health problems resulting from improper application of advice
                  </li>
                  <li>
                    Results that do not meet the client&apos;s expectations
                  </li>
                  <li>
                    Website interruptions or technical problems
                  </li>
                  <li>
                    Content on external websites linked from our site
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-text mt-8 mb-4">
                  8. Changes to Terms
                </h2>
                <p className="text-text-secondary">
                  We reserve the right to modify these Terms of Service at any time. Changes
                  become effective immediately upon posting on the website. We encourage you
                  to periodically review these terms to stay informed of any changes.
                </p>

                <h2 className="text-2xl font-bold text-text mt-8 mb-4">
                  9. Governing Law
                </h2>
                <p className="text-text-secondary">
                  These Terms of Service are governed by and construed in accordance with the
                  laws of the Republic of North Macedonia. Any disputes arising from these
                  terms shall be subject to the jurisdiction of the courts in Skopje.
                </p>

                <h2 className="text-2xl font-bold text-text mt-8 mb-4">
                  10. Contact
                </h2>
                <p className="text-text-secondary">
                  For questions regarding these Terms of Service, please contact us at:
                </p>
                <p className="text-text-secondary">
                  Email:{' '}
                  <a
                    href="mailto:nutricionistvladimir@gmail.com"
                    className="text-primary hover:underline"
                  >
                    nutricionistvladimir@gmail.com
                  </a>
                </p>
                <p className="text-text-secondary">
                  Phone:{' '}
                  <a
                    href="https://wa.me/38975453434"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +389 75 453 434
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer lang="en" />
    </>
  );
}
