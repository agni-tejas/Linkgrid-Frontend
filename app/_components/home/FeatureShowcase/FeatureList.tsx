import React from "react";
import { Feature } from "./types";
import FeatureItem from "./FeatureItem";
import { motion } from "framer-motion";

interface FeatureListProps {
  features: Feature[];
  activeFeature: string;
  onFeatureSelect: (id: string) => void;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function FeatureList({
  features,
  activeFeature,
  onFeatureSelect,
}: FeatureListProps) {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight text-{rgb(255, 255, 255)] sm:text-6xl">
          Powerful Features
          <span className="block mt-1 text-xl font-normal text-muted-foreground">
            Everything about linkgrid.
          </span>
        </h2>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-6"
      >
        {features.map((feature) => (
          <FeatureItem
            key={feature.id}
            feature={feature}
            isActive={activeFeature === feature.id}
            onClick={() => onFeatureSelect(feature.id)}
          />
        ))}
      </motion.div>
    </div>
  );
}
