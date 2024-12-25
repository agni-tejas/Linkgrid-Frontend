import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { StatusMessage } from "../UI/StatusMessage";

interface StatusUpdatesProps {
  currentStatus: string;
}

export const StatusUpdates: React.FC<StatusUpdatesProps> = ({
  currentStatus,
}) => {
  const statuses = [
    "Analyzing your professional network...",
    "Identifying your interests and connections...",
    "Personalizing your recommendations...",
  ];

  return (
    <div className="space-y-4 max-w-2xl mx-auto">
      <AnimatePresence mode="wait">
        {statuses.map((status, index) => (
          <StatusMessage
            key={status}
            message={status}
            isActive={status === currentStatus}
            delay={index * 0.1}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};
