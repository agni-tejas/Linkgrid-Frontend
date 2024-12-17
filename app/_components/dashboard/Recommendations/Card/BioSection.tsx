import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface BioSectionProps {
  bio: string;
  maxLength?: number;
}

export const BioSection: React.FC<BioSectionProps> = ({
  bio,
  maxLength = 150,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldTruncate = bio.length > maxLength;

  return (
    <div className="space-y-2">
      <AnimatePresence mode="wait">
        <motion.p
          key={isExpanded ? "expanded" : "collapsed"}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className={`text-sm text-gray-600 dark:text-slate-400 leading-relaxed
                     ${!isExpanded && shouldTruncate ? "line-clamp-2" : ""}`}
        >
          {bio}
        </motion.p>
      </AnimatePresence>

      {shouldTruncate && (
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-sm text-brand-500 hover:text-brand-600 dark:text-brand-400 
                   dark:hover:text-brand-300 font-medium"
          whileHover={{ x: 2 }}
          whileTap={{ scale: 0.98 }}
        >
          {isExpanded ? "Show less" : "Read more"}
        </motion.button>
      )}
    </div>
  );
};
