import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { featureCategories } from './featureData';

export const FeatureMatrix: React.FC = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">Feature Comparison</h2>
        <p className="mt-4 text-lg text-gray-600">
          Compare plans to find the perfect fit for your business
        </p>
      </div>

      <div className="space-y-6">
        {featureCategories.map((category) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
          >
            <button
              onClick={() => setExpandedCategory(
                expandedCategory === category.name ? null : category.name
              )}
              className="w-full px-6 py-4 flex items-center justify-between
                       hover:bg-gray-50 transition-colors"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {category.name}
              </h3>
              <motion.div
                animate={{ rotate: expandedCategory === category.name ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDownIcon className="w-5 h-5 text-gray-500" />
              </motion.div>
            </button>

            <AnimatePresence>
              {expandedCategory === category.name && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 pb-6">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-100">
                          <th className="py-4 text-left text-sm font-medium text-gray-500">
                            Feature
                          </th>
                          <th className="py-4 text-center text-sm font-medium text-gray-500">
                            Team
                          </th>
                          <th className="py-4 text-center text-sm font-medium text-gray-500">
                            Business
                          </th>
                          <th className="py-4 text-center text-sm font-medium text-gray-500">
                            Enterprise
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {category.features.map((feature) => (
                          <tr key={feature.name} className="border-b border-gray-100">
                            <td className="py-4 text-sm text-gray-900">
                              {feature.name}
                            </td>
                            {feature.availability.map((available, index) => (
                              <td key={index} className="py-4 text-center">
                                {available ? (
                                  <span className="inline-block w-5 h-5 bg-brand-500 
                                                 rounded-full" />
                                ) : (
                                  <span className="inline-block w-5 h-5 bg-gray-200 
                                                 rounded-full" />
                                )}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};