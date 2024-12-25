import React from "react";
import { motion } from "framer-motion";
import {
  ChartBarIcon,
  UserGroupIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

export const ProcessExplanation: React.FC = () => {
  const steps = [
    {
      icon: <ChartBarIcon className="w-6 h-6" />,
      title: "Network Analysis",
      description:
        "Analyzing your professional connections and industry relationships",
    },
    {
      icon: <SparklesIcon className="w-6 h-6" />,
      title: "Smart Matching",
      description:
        "Using AI to identify the most valuable potential connections",
    },
    {
      icon: <UserGroupIcon className="w-6 h-6" />,
      title: "Optimization",
      description:
        "Prioritizing connections based on mutual interests and goals",
    },
  ];

  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-3xl p-8 
                   border border-gray-200/50 dark:border-gray-700/50 shadow-xl"
      >
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
          How We Process Your Network
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-500/10 
                               to-brand-600/10 flex items-center justify-center
                               text-brand-500"
                >
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div
                  className="hidden md:block absolute top-8 right-0 left-10 w-full 
                               translate-x-1/2 pointer-events-none"
                >
                  <div
                    className="w-[80%] border-t-2 border-dashed border-gray-200 
                                 dark:border-gray-600"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
