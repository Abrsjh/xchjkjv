import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-medical-500 focus:ring-offset-2';
  
  const variants = {
    primary: 'text-white bg-gradient-to-r from-medical-600 to-primary-600 hover:from-medical-700 hover:to-primary-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5',
    secondary: 'text-medical-700 bg-white border-2 border-medical-200 hover:bg-medical-50 hover:border-medical-300',
    ghost: 'text-medical-600 hover:text-medical-700 hover:bg-medical-50'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  // Separate motion props from button props
  const {
    onAnimationStart,
    onAnimationComplete,
    onUpdate,
    onAnimationStop,
    ...buttonProps
  } = props as any;

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseClasses, variants[variant], sizes[size], className)}
      {...buttonProps}
    >
      {children}
    </motion.button>
  );
};