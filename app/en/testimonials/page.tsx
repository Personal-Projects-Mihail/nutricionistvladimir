'use client';

import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BrainIcon from '@/components/icons/BrainIcon';
import Image from 'next/image';
export default function TestimonialsPageEN() {

  return (
    <>
      <Header lang="en" />

      <main id="main-content">
        {/* Hero Section with Google Reviews */}
        <section className="section pt-24 pb-16 bg-gradient-to-br from-primary/5 via-green-50/50 to-background">
          <div className="container-custom">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-text mb-4">
                What Our Community Says
              </h1>
            </div>

            {/* Google Reviews Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {/* Review Card 1 */}
              <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Background Image */}
                <div className="relative aspect-[3/4]">
                  <Image
                    src="/testimonials/image1.webp"
                    alt=""
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Review Overlay */}
                <div className="absolute top-6 left-6 right-6 flex justify-center pointer-events-none">
                  <div className="relative w-[85%] max-w-[280px] rounded-xl shadow-2xl overflow-hidden group-hover:scale-[1.03] transition-transform duration-300">
                    <Image
                      src="/testimonials/review1.webp"
                      alt=""
                      width={560}
                      height={360}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>

               {/* Review Card 3 */}
  <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Background Image */}
                <div className="relative aspect-[3/4]">
                  <Image
                    src="/testimonials/image3.webp"
                    alt=""
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Review Overlay */}
                <div className="absolute top-6 left-6 right-6 flex justify-center pointer-events-none">
                  <div className="relative w-[85%] max-w-[280px] rounded-xl shadow-2xl overflow-hidden group-hover:scale-[1.03] transition-transform duration-300">
                    <Image
                      src="/testimonials/review3.webp"
                      alt=""
                      width={560}
                      height={360}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>

                 {/* Review Card 2 */}
                 <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Background Image */}
                <div className="relative aspect-[3/4]">
                  <Image
                    src="/testimonials/image2.webp"
                    alt=""
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Review Overlay */}
                <div className="absolute top-6 left-6 right-6 flex justify-center pointer-events-none">
                  <div className="relative w-[85%] max-w-[280px] rounded-xl shadow-2xl overflow-hidden group-hover:scale-[1.03] transition-transform duration-300">
                    <Image
                      src="/testimonials/review2.webp"
                      alt=""
                      width={560}
                      height={360}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        {/* CTA Section */}
<section className="py-12 md:py-16 bg-primary/5">
  <div className="container-custom text-center space-y-6">
    <h2 className="text-2xl md:text-3xl font-bold text-primary">
      Ready for Your Success Story?
    </h2>

    <Link
      href="/en/booking"
      className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-all duration-300"
    >
      Book Consultation
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
</section>

      </main>

      <Footer lang="en" />
    </>
  );
}
