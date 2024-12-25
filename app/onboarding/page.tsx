"use client";

import React from "react";
import { motion } from "framer-motion";
import { WelcomeBanner } from "../_components/login/Onboarding/Header/WelcomeBanner";
import { OnboardingStepper } from "../_components/login/Onboarding/Stepper/OnboardingStepper";
import { OnboardingFooter } from "../_components/login/Onboarding/Footer/OnboardingFooter";
import { useOnboarding } from "../_hooks/useOnboarding";
import FlickeringGrid from "@/components/ui/flickering-grid";

const OnboardingPage: React.FC = () => {
  const {
    steps,
    currentStep,
    progress,
    isCompleted,
    handleStepComplete,
    handleDashboardRedirect,
  } = useOnboarding();

  return (
    <div className="min-h-screen relative flex items-center justify-center  bg-gradient-to-b dark:from-[#000000] dark:via-[#000000] dark:to-[#030B2C]">
      <div className="relative z-10 max-w-3xl mx-auto px-6 ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-12"
        >
          {/* Banner */}

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-500/10 to-brand-600/10 p-8"
          >
            <div className="relative z-10">
              <motion.h1
                className="text-5xl font-bold bg-gradient-to-b from-gray-100 to-indigo-500 
                     bg-clip-text text-transparent tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Welcome to LinkGrid!
              </motion.h1>
              <motion.p
                className=" mb-6 text-xl text-gray-500 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Complete these quick steps to set up your account and start
                connecting.
              </motion.p>
            </div>

            <OnboardingStepper
              steps={steps}
              currentStep={currentStep}
              onStepComplete={handleStepComplete}
            />

            <div className="mt-12">
              <OnboardingFooter
                progress={progress}
                isCompleted={isCompleted}
                onDashboardClick={handleDashboardRedirect}
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -right-8 -top-8 w-64 h-64 bg-red-400/20 rounded-full blur-3xl" />
              <div className="absolute -left-8 -bottom-8 w-52 h-40 bg-emerald-600/30 rounded-full blur-3xl" />
            </div>
          </motion.div>

          {/* Banner */}

          {/* <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100/50 p-8">
            <OnboardingStepper
              steps={steps}
              currentStep={currentStep}
              onStepComplete={handleStepComplete}
            />

            <div className="mt-12">
              <OnboardingFooter
                progress={progress}
                isCompleted={isCompleted}
                onDashboardClick={handleDashboardRedirect}
              />
            </div>
          </div> */}
        </motion.div>
      </div>
    </div>
  );
};

export default OnboardingPage;
