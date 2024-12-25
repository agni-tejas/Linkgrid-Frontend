import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CreatedBy } from "../../../../_lib/groups";
import { format } from "date-fns";

interface CreatedByCellProps {
  creator: CreatedBy;
}

export const CreatedByCell: React.FC<CreatedByCellProps> = ({ creator }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative flex items-center gap-2">
      <img
        src={creator.profilePicture}
        alt={creator.name}
        className="w-8 h-8 rounded-full object-cover"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      />
      <span className="text-sm text-gray-900 dark:text-white">
        {creator.name}
      </span>

      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute left-0 bottom-full mb-2 w-64 bg-white dark:bg-stone-900 
                     rounded-lg shadow-lg p-4 z-10 border border-gray-100 dark:border-gray-800"
          >
            <div className="flex items-start gap-3">
              <img
                src={creator.profilePicture}
                alt={creator.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">
                  {creator.name}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {creator.username}
                </p>
                {creator.bio && (
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                    {creator.bio}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
