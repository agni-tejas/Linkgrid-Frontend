import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckIcon } from "@heroicons/react/24/outline";
import { Step } from "../../../../_lib/onboarding";
import { theme } from "../styles/theme";

interface StepContentProps {
  step: Step;
  isCompleted: boolean;
  onComplete: () => void;
}

export const StepContent: React.FC<StepContentProps> = ({
  step,
  isCompleted,
  onComplete,
}) => {
  return (
    <div className="flex-1 space-y-4">
      <div>
        <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
        <p className="mt-2 text-gray-600 leading-relaxed">{step.description}</p>
      </div>

      <AnimatePresence mode="wait">
        {isCompleted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="flex items-center gap-2 text-green-600 bg-green-50 
                     px-4 py-2 rounded-lg"
          >
            <CheckIcon className="w-5 h-5" />
            <span className="font-medium">{step.successMessage}</span>
          </motion.div>
        ) : (
          <motion.button
            key="action"
            onClick={onComplete}
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 bg-gradient-to-r from-brand-500 to-brand-600 
                     text-white rounded-xl font-medium shadow-lg shadow-brand-500/25
                     hover:shadow-xl hover:shadow-brand-500/30 transition-all
                     focus:outline-none focus:ring-2 focus:ring-brand-500/20
                     active:from-brand-600 active:to-brand-700"
          >
            {step.actionLabel}
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};
