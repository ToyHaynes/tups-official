'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CTAButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
}

export default function CTAButton({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
}: CTAButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantClasses = {
    primary: 'bg-white text-gray-900 border-2 border-gray-300 hover:bg-gray-50 hover:border-gray-400 focus:ring-primary-500 shadow-lg hover:shadow-xl',
    secondary: 'bg-accent-500 text-white hover:bg-accent-600 focus:ring-accent-500 shadow-lg hover:shadow-xl',
    outline: 'border-2 border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:ring-primary-500',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`;

  const buttonContent = (
    <motion.span
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className="w-full h-full flex items-center justify-center"
    >
      {children}
    </motion.span>
  );

  if (href && !disabled) {
    return (
      <a href={href} className={classes}>
        {buttonContent}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={classes}
      disabled={disabled}
      style={{ minHeight: '44px' }} // Touch-friendly minimum
    >
      {buttonContent}
    </button>
  );
}