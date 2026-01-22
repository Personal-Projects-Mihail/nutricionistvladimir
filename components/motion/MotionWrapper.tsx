'use client';

import { motion, useScroll, useTransform, useInView, Variants } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface MotionWrapperProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade' | 'slide-up' | 'slide-left' | 'slide-right' | 'scale' | 'float' | 'antigravity' | 'parallax';
  delay?: number;
  duration?: number;
  once?: boolean;
}

const animations: Record<string, Variants> = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  'slide-up': {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  'slide-left': {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  'slide-right': {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
  float: {
    hidden: { opacity: 0, y: 0 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      }
    },
  },
  antigravity: {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }
    },
  },
  parallax: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
};

export function MotionWrapper({
  children,
  className = '',
  animation = 'fade',
  delay = 0,
  duration = 0.6,
  once = true,
}: MotionWrapperProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={animations[animation]}
      transition={{
        duration,
        delay,
        ease: 'easeOut',
      }}
    >
      {children}
    </motion.div>
  );
}

export function ParallaxWrapper({
  children,
  className = '',
  speed = 0.5,
}: {
  children: ReactNode;
  className?: string;
  speed?: number;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100]);

  return (
    <motion.div ref={ref} className={className} style={{ y }}>
      {children}
    </motion.div>
  );
}

export function StaggerWrapper({
  children,
  className = '',
  staggerDelay = 0.1,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      {children}
    </motion.div>
  );
}

export function AntigravityElement({
  children,
  className = '',
  intensity = 1,
}: {
  children?: ReactNode;
  className?: string;
  intensity?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.div
      ref={ref}
      className={className}
      animate={isInView ? {
        y: [0, -20 * intensity, 0],
        scale: [1, 1 + (0.05 * intensity), 1],
      } : {}}
      transition={{
        duration: 5,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'reverse',
      }}
    >
      {children}
    </motion.div>
  );
}

export function ScrollReveal({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ opacity, scale }}
    >
      {children}
    </motion.div>
  );
}
