'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import WeightLossIcon from '@/components/icons/WeightLossIcon';
import HormoneIcon from '@/components/icons/HormoneIcon';
import DumbbellIcon from '@/components/icons/DumbbellIcon';
import FamilyIcon from '@/components/icons/FamilyIcon';
import HeartHealthIcon from '@/components/icons/HeartHealthIcon';

interface Service {
  title: string;
  iconName: string;
  description: string;
  gradient: string;
  bgGradient: string;
  features: string[];
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'WeightLossIcon': WeightLossIcon,
  'HormoneIcon': HormoneIcon,
  'DumbbellIcon': DumbbellIcon,
  'FamilyIcon': FamilyIcon,
  'HeartHealthIcon': HeartHealthIcon,
};

interface ExpandableServiceCardsProps {
  services: Service[];
  lang?: 'mk' | 'en';
}

export default function ExpandableServiceCards({ services, lang = 'mk' }: ExpandableServiceCardsProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const bookingText = lang === 'mk' ? 'Закажи консултација' : 'Book Consultation';
  const bookingLink = lang === 'mk' ? '/booking' : '/en/booking';

  const toggleCard = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      {services.map((service, idx) => {
        const isExpanded = expandedIndex === idx;
        
        return (
          <motion.div
            key={idx}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.4, 
              delay: idx * 0.1,
              layout: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
            }}
            className={`group relative overflow-hidden bg-white dark:bg-gray-800 rounded-lg md:rounded-xl shadow-sm cursor-pointer ${
              isExpanded ? 'md:col-span-5 rounded-3xl shadow-xl' : ''
            } ${!isExpanded ? 'hover:shadow-md' : ''}`}
            onClick={() => toggleCard(idx)}
            whileHover={!isExpanded ? { scale: 1.02, transition: { duration: 0.2 } } : {}}
          >
            <motion.div 
              className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} dark:opacity-20`}
              animate={{ opacity: isExpanded ? 0.5 : 0.3 }}
              transition={{ duration: 0.5 }}
            />
            {isExpanded && (
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-16 -mt-16"
              />
            )}

            <div className={`relative z-10 transition-all duration-500 ${isExpanded ? 'p-6' : 'px-4 py-3'}`}>
              {/* Header - Compact Preview or Full When Expanded */}
              <div className={`flex items-center gap-2 ${isExpanded ? 'mb-4 gap-3' : ''}`}>
                <div className={`bg-gradient-to-br ${service.gradient} rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                  isExpanded ? 'w-16 h-16 rounded-2xl shadow-lg' : 'w-8 h-8 md:w-10 md:h-10 shadow-md'
                }`}>
                  {(() => {
                    const IconComponent = iconMap[service.iconName];
                    return IconComponent ? (
                      <IconComponent className={`text-white transition-all duration-500 ${
                        isExpanded ? 'w-8 h-8' : 'w-4 h-4 md:w-5 md:h-5'
                      }`} />
                    ) : null;
                  })()}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className={`font-semibold text-text transition-colors ${isExpanded ? 'text-xl lg:text-2xl mb-2 font-bold' : 'text-xs md:text-sm'} ${!isExpanded ? 'md:group-hover:text-primary' : ''}`}>
                    {service.title}
                  </h3>
                  {isExpanded && (
                    <p className="text-base text-text-secondary leading-relaxed">
                      {service.description}
                    </p>
                  )}
                </div>
                <button
                  className={`flex-shrink-0 w-6 h-6 md:w-8 md:h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center transition-transform duration-300 ${
                    isExpanded ? 'rotate-180' : ''
                  }`}
                  aria-label={isExpanded ? 'Collapse' : 'Expand'}
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {/* Expanded Content */}
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden mt-4"
                >
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <motion.ul 
                      className="space-y-3 mb-6"
                      initial="hidden"
                      animate="visible"
                      variants={{
                        visible: {
                          transition: {
                            staggerChildren: 0.05
                          }
                        }
                      }}
                    >
                      {service.features.map((feature, featureIdx) => (
                        <motion.li 
                          key={featureIdx} 
                          variants={{
                            hidden: { opacity: 0, x: -20 },
                            visible: { opacity: 1, x: 0 }
                          }}
                          className="flex items-center gap-3 text-sm md:text-base text-text-secondary"
                        >
                          <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center flex-shrink-0`}>
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          {feature}
                        </motion.li>
                      ))}
                    </motion.ul>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <Link
                        href={bookingLink}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                      >
                        {bookingText}
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
