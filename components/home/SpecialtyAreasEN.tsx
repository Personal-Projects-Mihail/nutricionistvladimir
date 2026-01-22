'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MotionWrapper, ParallaxWrapper } from '@/components/motion/MotionWrapper';
import { motion } from 'framer-motion';

const specialties = [
  {
    title: 'Weight Loss',
    description: 'Weight loss without extreme diets or starvation. Focus on long-term habits and a healthy relationship with food.',
    points: [
      'Personalized nutrition plan',
      'Appropriate caloric deficit',
      'Muscle mass preservation',
    ],
    image: '/front-page/weight_loss_illustration.svg',
    alt: 'Illustration for sustainable weight loss - human body with balanced nutrition and metabolism',
    imagePosition: 'right',
  },
  {
    title: 'Nutrition for Insulin Resistance',
    description: 'Insulin resistance is a key factor in multiple metabolic conditions. With proper nutrition, we can dramatically improve insulin sensitivity.',
    points: [
      'Improving insulin sensitivity',
      'Blood sugar control',
      'Type 2 diabetes prevention',
    ],
    image: '/front-page/gut_health_illustration.svg',
    alt: 'Illustration for insulin resistance nutrition - balanced diet and healthy habits',
    imagePosition: 'left',
  },
  {
    title: 'Nutrition for Metabolic Conditions',
    description: 'Diabetics, high cholesterol, high triglycerides, and fatty liver. In such metabolic conditions, nutrition is key. Nutrition based on scientific facts and strategic problem-solving.',
    points: [
      'Continuous metabolic monitoring',
      'Personalized nutrition according to client needs',
      'Metabolic condition improvement',
    ],
    image: '/front-page/sports_nutrition_illustration.svg',
    alt: 'Illustration for metabolic conditions nutrition - healthy nutrition for diabetes, cholesterol, and triglycerides',
    imagePosition: 'right',
  },
];

export default function SpecialtyAreasEN() {
  return (
    <section className="section">
      <div className="container-custom">
        <MotionWrapper animation="fade" className="text-center mb-8">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            My Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-4">
            Areas of Specialization
          </h2>
        </MotionWrapper>

        <div className="space-y-0">
          {specialties.map((specialty, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center"
            >
              {specialty.imagePosition === 'left' && (
                <ParallaxWrapper speed={-50} className={`relative h-[300px] md:h-[400px] lg:h-[600px] bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl overflow-hidden flex items-center justify-center ${specialty.imagePosition === 'left' ? 'order-2 lg:order-1' : ''}`}>
                  <Image
                    src={specialty.image}
                    alt={specialty.alt}
                    width={600}
                    height={600}
                    className="object-contain w-full h-full p-6"
                  />
                </ParallaxWrapper>
              )}
              
              <MotionWrapper
                animation="slide-up"
                delay={0.2 + index * 0.1}
                className={`space-y-6 ${specialty.imagePosition === 'left' ? 'order-1 lg:order-2' : ''}`}
              >
                <h3 className="text-3xl md:text-4xl font-bold text-text">
                  {specialty.title}
                </h3>
                <p className="text-lg text-text-secondary leading-relaxed">
                  {specialty.description}
                </p>
                <ul className="space-y-3">
                  {specialty.points.map((point, pointIndex) => (
                    <motion.li
                      key={pointIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + pointIndex * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-text-secondary">{point}</span>
                    </motion.li>
                  ))}
                </ul>
                <Link href="/en/services" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                  Learn More
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </MotionWrapper>

              {specialty.imagePosition === 'right' && (
                <ParallaxWrapper speed={50} className="relative h-[300px] md:h-[400px] lg:h-[600px] bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl overflow-hidden flex items-center justify-center">
                  <Image
                    src={specialty.image}
                    alt={specialty.alt}
                    width={600}
                    height={600}
                    className="object-contain w-full h-full p-6"
                  />
                </ParallaxWrapper>
              )}
            </motion.div>
          ))}
        </div>

        {/* View All Services */}
        <MotionWrapper animation="scale" delay={0.3} className="text-center mt-8">
          <Link href="/en/services" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
            View All Services
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </MotionWrapper>
      </div>
    </section>
  );
}
