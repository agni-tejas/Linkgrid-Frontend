import React from "react";
import { motion } from "framer-motion";
import { CardHeader } from "./CardHeader";
import { CardFeatures } from "./CardFeatures";
import { CardCTA } from "./CardCTA";
import { PricingPlan } from "../types";
import { cn } from "../../../../../_lib/classNames";

interface CardProps {
  plan: PricingPlan;
  isPopular?: boolean;
}

export const Card: React.FC<CardProps> = ({ plan, isPopular }) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className={cn(
        "relative overflow-hidden backdrop-blur-sm",
        "rounded-xl p-1", // Larger border radius
        "bg-gradient-to-b  from-teal-400/80 to-blue-700/80", // Glass effect
        "before:absolute before:inset-0 before:-z-10", // Gradient background
        "before:bg-gradient-to-br",
        isPopular
          ? "bg-gradient-to-b  before:from-yellow-500/80 before:to-violet-700/80 border-4 border-black"
          : " border-4 border-black",
        "after:absolute after:inset-0 after:-z-20", // Shadow effect
        "",
        "shadow-[0_8px_32px_rgba(0,0,0,0.08)]",
        "transition-all duration-300 ease-out"
      )}
    >
      {/* Inner content container */}
      <div className="relative p-8 h-full">
        {isPopular && (
          <div className="absolute -top-2 left-1/2 -translate-x-1/2">
            <motion.span
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="px-4  py-1.5  text-sm font-medium
                       bg-gradient-to-r from-brand-500 to-brand-600 text-white
                       shadow-lg shadow-brand-500/25"
            >
              Most Popular
            </motion.span>
          </div>
        )}

        <CardHeader plan={plan} isPopular={isPopular} />
        <CardFeatures features={plan.features} />
        <CardCTA plan={plan} isPopular={isPopular} />
      </div>
    </motion.div>
  );
};
