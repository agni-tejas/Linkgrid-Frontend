import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckIcon } from "@heroicons/react/24/outline";
import { Step } from "../../../../_lib/onboarding";
import { AnimatedCheckmark } from "./AnimatedCheckmark";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import ShinyButton from "@/app/_ui/shinybutton";

interface StepItemProps {
  step: Step;
  stepNumber: number;
  isActive: boolean;
  isCompleted: boolean;
  onComplete: () => void;
}

export const StepItem: React.FC<StepItemProps> = ({
  step,
  stepNumber,
  isActive,
  isCompleted,
  onComplete,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className={`relative flex items-start gap-4 p-2 rounded-xl border
                ${
                  isActive
                    ? "border-brand-200 dark:border-gray-800 dark:bg-gray-800/50 bg-brand-50/50"
                    : "border-gray-100 dark:border-gray-800"
                }`}
    >
      {/* Step Number Circle */}
      <div className="flex-shrink-0">
        <motion.div
          className={`w-10 h-10 rounded-full flex items-center justify-center
                     ${
                       isCompleted
                         ? "bg-green-500 text-white"
                         : "bg-brand-100 dark:bg-gray-800 text-brand-400"
                     }`}
          animate={isCompleted ? { scale: [1, 1.2, 1] } : {}}
        >
          {isCompleted ? (
            <AnimatedCheckmark className="w-6 h-6" />
          ) : (
            <span className="text-lg font-semibold">{stepNumber}</span>
          )}
        </motion.div>
      </div>

      <div className="flex-1 space-y-4">
        <div>
          <h3 className="text-xl font-semibold dark:text-gray-100 text-gray-900">
            {step.title}
          </h3>
          <p className="mt-1 text-gray-500">{step.description}</p>
        </div>

        <AnimatePresence mode="wait">
          {isCompleted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="flex items-center gap-2 text-green-600"
            >
              <TaskAltOutlinedIcon className="w-5 h-5" />
              <span className="font-medium">{step.successMessage}</span>
            </motion.div>
          ) : (
            <ShinyButton
              key="action"
              onClick={onComplete}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-stone-950 "
            >
              {step.actionLabel}
            </ShinyButton>

            // <motion.button
            //   key="action"
            //   onClick={onComplete}
            //   whileHover={{ scale: 1.02 }}
            //   whileTap={{ scale: 0.98 }}
            //   className="px-4 py-2  bg-brand-500 text-white rounded-lg
            //            hover:bg-brand-600 transition-colors shadow-sm
            //            hover:shadow-md font-medium"
            // >
            //   {step.actionLabel}
            // </motion.button>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
