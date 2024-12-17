import React from "react";
import { motion } from "framer-motion";
import { Recommendation } from "../../../_lib/recommendations";
import { ProfileHeader } from "./Card/ProfileHeader";
import { BioSection } from "./Card/BioSection";
import { MatchingReasons } from "./Card/MatchingReasons";
import { ActionButtons } from "./Card/ActionButtons";

interface RecommendationCardProps {
  recommendation: Recommendation;
}

export const RecommendationCard: React.FC<RecommendationCardProps> = ({
  recommendation,
}) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="group bg-white dark:bg-stone-950 rounded-xl 
                 shadow-sm hover:shadow-lg transition-all duration-300
                 border border-gray-100 dark:border-gray-800
                 overflow-hidden backdrop-blur-sm"
    >
      <div className="p-6 space-y-6">
        <ProfileHeader
          profilePicture={recommendation.profilePicture}
          name={recommendation.name}
          username={recommendation.username}
          matchPercentage={recommendation.matchPercentage}
          isVerified={recommendation.matchPercentage > 95}
        />

        <BioSection bio={recommendation.bio} />

        <MatchingReasons reasons={recommendation.matchingReasons} />

        <ActionButtons
          onConnect={() => console.log("Connect clicked")}
          onViewProfile={() => console.log("View profile clicked")}
        />
      </div>
    </motion.div>
  );
};
