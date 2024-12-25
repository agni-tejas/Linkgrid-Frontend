import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheckIcon, 
  UserGroupIcon, 
  CubeIcon 
} from '@heroicons/react/24/outline';

export const EnterpriseContact: React.FC = () => {
  return (
    <div className="relative">
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-500/10 
                       to-brand-600/10 rounded-3xl" />
      </div>

      <div className="relative px-8 py-16 rounded-3xl">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900"
          >
            Enterprise-Grade Solutions for Global Organizations
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            Get dedicated support, advanced security features, and custom solutions 
            tailored to your organization's needs.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheckIcon,
                title: 'Advanced Security',
                description: 'Enterprise-grade security with SSO and custom policies'
              },
              {
                icon: UserGroupIcon,
                title: 'Dedicated Support',
                description: '24/7 priority support with dedicated success manager'
              },
              {
                icon: CubeIcon,
                title: 'Custom Solutions',
                description: 'Tailored solutions and custom integrations'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 
                             rounded-xl bg-brand-500/10 text-brand-600 mb-4">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center px-8 py-4 bg-brand-500 text-white
                     rounded-xl font-medium shadow-lg hover:bg-brand-600
                     transition-colors"
          >
            Contact Sales
          </motion.button>
        </div>
      </div>
    </div>
  );
};