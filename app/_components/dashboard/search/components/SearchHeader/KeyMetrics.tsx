import React from "react";
import { motion } from "framer-motion";
import {
  UsersIcon,
  MapPinIcon,
  BuildingOfficeIcon,
} from "@heroicons/react/24/outline";

const MetricItem: React.FC<{
  icon: React.ReactNode;
  label: string;
  value: number;
}> = ({ icon, label, value }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="flex items-center gap-3 rounded-xl "
  >
    <div className="p-2 bg-white dark:bg-sky-200 rounded-full shadow-sm">
      {icon}
    </div>
    <div>
      <p className="text-sm font-medium text-gray-600 dark:text-brand-400">
        {label}
      </p>
      <p className="font-semibold text-gray-900 dark:text-slate-200">{value}</p>
    </div>
  </motion.div>
);

export const KeyMetrics: React.FC<{
  onRecommendations: any;
}> = ({ onRecommendations }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <MetricItem
        icon={<UsersIcon className="w-5 h-5 text-brand-500" />}
        label="Total Matches:"
        value={onRecommendations.length}
      />
    </div>
  );
};
