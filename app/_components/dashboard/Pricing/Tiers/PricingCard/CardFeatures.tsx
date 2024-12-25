import React from "react";
import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

interface CardFeaturesProps {
  features: string[];
}

export const CardFeatures: React.FC<CardFeaturesProps> = ({ features }) => {
  return (
    <ul className="space-y-4 mb-8">
      {features.map((feature, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="flex items-start gap-3 group"
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="relative flex-shrink-0 w-6 h-6"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-sky-500/90 rounded-full"
            />
            <CheckCircleIcon className="w-6 h-6 text-gray-50 relative z-10" />
          </motion.div>
          <span className="text-gray-900 group-hover:text-indigo-900 transition-colors">
            {feature}
          </span>
        </motion.li>
      ))}
    </ul>
  );
};
