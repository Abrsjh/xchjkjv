import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: 'white' | 'gradient' | 'pattern';
}

export const Section: React.FC<SectionProps> = ({
  children,
  id,
  className = '',
  background = 'white'
}) => {
  const backgroundStyles = {
    white: 'bg-white',
    gradient: 'bg-gradient-to-br from-medical-50 to-primary-50',
    pattern: 'bg-white bg-opacity-50 backdrop-blur-sm'
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      id={id}
      className={`py-20 ${backgroundStyles[background]} ${className}`}
    >
      <div className="container mx-auto px-4">
        {children}
      </div>
    </motion.section>
  );
};

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  description,
  centered = true
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className={`mb-16 ${centered ? 'text-center' : ''}`}
  >
    {subtitle && (
      <p className="text-medical-600 font-medium mb-2 uppercase tracking-wide text-sm">
        {subtitle}
      </p>
    )}
    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
      {title}
    </h2>
    {description && (
      <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
        {description}
      </p>
    )}
  </motion.div>
);