import React from "react";
import { motion } from "framer-motion";
import { StepItem } from "./StepItem";
import { Step } from "../../../../_lib/onboarding";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { AnimatedCheckmark } from "./AnimatedCheckmark";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import ShinyButton from "@/app/_ui/shinybutton";
import axios from "axios";

interface OnboardingStepperProps {
  steps: Step[];
  currentStep: number;
  onStepComplete: (stepId: string) => void;
}

export const OnboardingStepper: React.FC<OnboardingStepperProps> = ({
  steps,
  currentStep,
  onStepComplete,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleTwitter = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/twitter/signup/register"
      );

      window.open(response.data.auth_url, "_blank");
      console.log(window.location.href);
    } catch (error) {
      console.error("Error initiating Twitter registration:", error);
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      {/* {steps.map((step, index) => (
        <StepItem
          key={step.id}
          step={step}
          stepNumber={index + 1}
          isActive={currentStep === index}
          isCompleted={step.completed}
          onComplete={() => onStepComplete(step.id)}
        />
      ))} */}

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
              <span className="text-lg font-semibold">1</span>
            )}
          </motion.div>
        </div>

        <div className="flex-1 space-y-4">
          <div>
            <h3 className="text-xl font-semibold dark:text-gray-100 text-gray-900">
              Connect Your Twitter Account:
            </h3>
            <p className="mt-1 text-gray-500">
              Authorize LinkGrid to access your Twitter account to analyze data
              and suggest meaningful connections.
            </p>
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
                <span className="font-medium">
                  Twitter connected successfully!
                </span>
              </motion.div>
            ) : (
              <ShinyButton
                key="action"
                onClick={handleTwitter}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-black/20 w-32"
              >
                Connect
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
              <span className="text-lg font-semibold">2</span>
            )}
          </motion.div>
        </div>

        <div className="flex-1 space-y-4">
          <div>
            <h3 className="text-xl font-semibold dark:text-gray-100 text-gray-900">
              Install the LinkGrid Browser Extension:
            </h3>
            <p className="mt-1 text-gray-500">
              Install the browser extension to enable seamless session
              management and personalized features.
            </p>
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
                <span className="font-medium">
                  Extension installed successfully!
                </span>
              </motion.div>
            ) : (
              <ShinyButton
                key="action"
                onClick={handleTwitter}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-black/20 w-32"
              >
                Install
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
    </div>
  );
};
