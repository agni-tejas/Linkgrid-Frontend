import React from "react";
import { motion } from "framer-motion";
import { HeroSection } from "./Sections/HeroSection";
import { StatusUpdates } from "./Sections/StatusUpdates";
import { ProcessExplanation } from "./Sections/ProcessExplanation";
import { useProcessingStatus } from "../../../_hooks/useProcessingStatus";

export const ProcessingPage: React.FC = () => {
  const { progress, timeLeft, currentStatus } = useProcessingStatus();

  return (
    <div className="min-h-screen ">
      <div className="relative w-full mx-auto px-4 py-12 space-y-12">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute -top-[500px] -right-[500px] w-[1000px] h-[1000px] 
                         bg-gradient-to-br from-fuchsia-400/40 to-red-600/40 rounded-full 
                         blur-2xl"
          />
          <div
            className="absolute -bottom-[500px] -left-[500px] w-[1000px] h-[1000px] 
                         bg-gradient-to-tr from-orange-400/40 to-yellow-600/40 rounded-full 
                         blur-3xl"
          />
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative space-y-12"
        >
          <HeroSection progress={progress} timeLeft={timeLeft} />
          <StatusUpdates currentStatus={currentStatus} />
          <ProcessExplanation />
        </motion.div>
      </div>
    </div>
  );
};
