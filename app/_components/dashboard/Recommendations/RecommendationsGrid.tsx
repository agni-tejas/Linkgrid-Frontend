import React from "react";
import { motion } from "framer-motion";
import { RecommendationCard } from "./RecommendationCard";
import { Recommendation } from "../../../_lib/recommendations";

interface RecommendationsGridProps {
  recommendations: Recommendation[];
}

export const RecommendationsGrid: React.FC<RecommendationsGridProps> = ({
  recommendations,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {recommendations.map((recommendation, index) => (
        <motion.div
          key={recommendation.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <RecommendationCard recommendation={recommendation} />
        </motion.div>
      ))}
    </div>
  );
};
