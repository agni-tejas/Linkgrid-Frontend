import React from "react";
import { motion } from "framer-motion";
import { StepItem } from "./StepItem";
import { Step } from "../../../../_lib/onboarding";

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
  return (
    <div className="space-y-4">
      {steps.map((step, index) => (
        <StepItem
          key={step.id}
          step={step}
          stepNumber={index + 1}
          isActive={currentStep === index}
          isCompleted={step.completed}
          onComplete={() => onStepComplete(step.id)}
        />
      ))}
    </div>
  );
};
