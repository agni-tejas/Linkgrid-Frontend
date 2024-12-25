import React from "react";
import { motion } from "framer-motion";
import { Card } from "./PricingCard/Card";
import { pricingPlans } from "./pricingData";

export const PricingTiers: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card plan={plan} isPopular={plan.name === "Plus"} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
