'use client';

import { MotionWrapper, StaggerWrapper } from '@/components/motion/MotionWrapper';
import { motion } from 'framer-motion';

const stats = [
  { value: '100+', label: 'Clients' },
  { value: '2+', label: 'Years Experience' },
  { value: '100%', label: 'Personalized Program' },
  { value: '24/7', label: 'Support' },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
    }
  },
};

export default function StatsSectionEN() {
  return (
    <section className="py-12 bg-gradient-to-r from-primary via-primary-500 to-primary-600 text-white overflow-hidden">
      <div className="container-custom">
        <StaggerWrapper staggerDelay={0.15} className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center gpu-accelerated"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-white/90">{stat.label}</div>
            </motion.div>
          ))}
        </StaggerWrapper>
      </div>
    </section>
  );
}
