import React from "react";
import { motion } from "framer-motion";
import { PricingPlan } from "../types";
import { cn } from "../../../../../_lib/classNames";

interface CardHeaderProps {
  plan: PricingPlan;
  isPopular?: boolean;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ plan, isPopular }) => {
  return (
    <div className="text-center mb-8">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={cn(
          "text-3xl font-bold mb-4",
          "bg-gradient-to-br bg-clip-text text-transparent",
          isPopular ? "text-white " : "from-gray-900 to-gray-950"
        )}
      >
        {plan.name}
      </motion.h3>

      <div className="flex items-baseline justify-center gap-2">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className={cn(
            "text-5xl font-bold",
            "bg-gradient-to-r bg-clip-text text-transparent",
            isPopular ? "from-white to-white" : "from-gray-900 to-gray-950"
          )}
        >
          ${plan.price}
        </motion.span>
        <span className="text-zinc-800">/month</span>
      </div>
    </div>
  );
};
