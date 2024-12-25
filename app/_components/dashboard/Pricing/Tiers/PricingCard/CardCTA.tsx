import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../../../../_lib/classNames";

interface CardCTAProps {
  plan: PricingPlan;
  isPopular?: boolean;
}

export const CardCTA: React.FC<CardCTAProps> = ({ plan, isPopular }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "relative w-full py-3 px-6 rounded-xl font-medium",
        "overflow-hidden transition-all duration-300",
        isPopular
          ? "bg-gradient-to-r from-stone-900 to-stone-900 text-white shadow-lg shadow-brand-500/25"
          : "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-900",
        "after:absolute after:inset-0 after:bg-gradient-to-r",
        isPopular
          ? "after:from-stone-600/0 after:to-stone-600/50"
          : "after:from-gray-200/0 after:to-gray-300/30",
        "after:opacity-0 hover:after:opacity-100",
        "after:transition-opacity after:duration-300"
      )}
    >
      {plan.name === "Free" ? (
        <span className="relative z-10">Your current plan</span>
      ) : (
        <span className="relative z-10">Upgrade now</span>
      )}
    </motion.button>
  );
};
