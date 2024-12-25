"use client";

import { useState, useCallback } from "react";
import { Step } from "../_lib/onboarding";

const initialSteps: Step[] = [
  {
    id: "twitter",
    title: "Connect Your Twitter Account",
    description:
      "Authorize LinkGrid to access your Twitter account to analyze data and suggest meaningful connections.",
    actionLabel: "Connect",
    successMessage: "Twitter connected successfully!",
    completed: false,
  },
  {
    id: "extension",
    title: "Install the LinkGrid Browser Extension",
    description:
      "Install the browser extension to enable seamless session management and personalized features.",
    actionLabel: "Install",
    successMessage: "Extension installed successfully!",
    completed: false,
  },
];

export const useOnboarding = () => {
  const [steps, setSteps] = useState<Step[]>(initialSteps);
  const [currentStep, setCurrentStep] = useState(0);

  const handleStepComplete = useCallback((stepId: string) => {
    setSteps((prevSteps) =>
      prevSteps.map((step) =>
        step.id === stepId ? { ...step, completed: true } : step
      )
    );
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  }, []);

  const progress =
    (steps.filter((step) => step.completed).length / steps.length) * 100;
  const isCompleted = steps.every((step) => step.completed);

  const handleDashboardRedirect = useCallback(() => {
    if (isCompleted) {
      // Redirect to dashboard
      console.log("Redirecting to dashboard...");
    }
  }, [isCompleted]);

  return {
    steps,
    currentStep,
    progress,
    isCompleted,
    handleStepComplete,
    handleDashboardRedirect,
  };
};
