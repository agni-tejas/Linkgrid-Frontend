import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { PricingPlan } from './types';
import { cn } from '../../../utils/classNames';

interface PricingCardProps {
  plan: PricingPlan;
  isPopular?: boolean;
}

export const PricingCard: React.FC<PricingCardProps> = ({ plan, isPopular }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={cn(
        "relative bg-white rounded-2xl p-8",
        "border border-gray-100",
        "transition-shadow duration-300",
        isPopular 
          ? "shadow-xl ring-2 ring-brand-500" 
          : "shadow-lg hover:shadow-xl"
      )}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="px-4 py-1 bg-brand-500 text-white text-sm font-medium 
                        rounded-full shadow-lg">
            Most Popular
          </span>
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          {plan.name}
        </h3>
        <div className="flex items-baseline justify-center gap-2">
          <span className="text-5xl font-bold bg-gradient-to-r from-brand-500 
                        to-brand-600 bg-clip-text text-transparent">
            ${plan.price}
          </span>
          <span className="text-gray-500">/month</span>
        </div>
      </div>

      <ul className="space-y-4 mb-8">
        {plan.features.map((feature, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start gap-3"
          >
            <CheckCircleIcon className="w-6 h-6 text-brand-500 flex-shrink-0" />
            <span className="text-gray-600">{feature}</span>
          </motion.li>
        ))}
      </ul>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "w-full py-3 px-6 rounded-xl font-medium shadow-lg",
          "transition-all duration-200",
          isPopular
            ? "bg-gradient-to-r from-brand-500 to-brand-600 text-white"
            : "bg-gray-100 text-gray-900"
        )}
      >
        Get Started
      </motion.button>
    </motion.div>
  );
};