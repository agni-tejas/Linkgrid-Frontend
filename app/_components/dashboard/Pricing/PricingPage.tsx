import React from "react";
import { motion } from "framer-motion";
import { PricingHero } from "./Hero/PricingHero";
import { PricingTiers } from "./Tiers/PricingTiers";
import { FeatureMatrix } from "./Features/FeatureMatrix";

import { EnterpriseContact } from "./Enterprise/EnterpriseContact";

export const PricingPage: React.FC = () => {
  return (
    <div className="relative min-h-screen ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute -top-[500px] -right-[500px] w-[1000px] h-[1000px] 
                         bg-gradient-to-br from-green-400/20 to-emerald-600/20 rounded-full 
                         blur-3xl"
          />
          <div
            className="absolute -bottom-[500px] -left-[500px] w-[1000px] h-[1000px] 
                         bg-gradient-to-tr from-violet-400/20 to-red-600/20 rounded-full 
                         blur-3xl"
          />
        </div>
        {/* Hero Section */}
        <PricingHero />

        {/* Pricing Tiers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <PricingTiers />
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32"
        >
          <FeatureMatrix />
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 mb-24"
        >
          <EnterpriseContact />
        </motion.div> */}
      </div>
    </div>
  );
};
