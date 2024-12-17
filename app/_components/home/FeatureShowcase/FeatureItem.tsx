import React from "react";
import { Feature } from "./types";
import { motion } from "framer-motion";

interface FeatureItemProps {
  feature: Feature;
  isActive: boolean;
  onClick: () => void;
}

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

export default function FeatureItem({
  feature,
  isActive,
  onClick,
}: FeatureItemProps) {
  return (
    <motion.div variants={item}>
      <button
        onClick={onClick}
        className={`group w-full text-left p-4 rounded-2xl transition-all duration-300 
          ${
            isActive
              ? "bg-white shadow-lg shadow-indigo-500/5 ring-1 ring-indigo-500/20"
              : "hover:bg-blue-400/60 hover:shadow-md hover:shadow-indigo-500/5"
          }`}
        aria-pressed={isActive}
      >
        <div className="flex items-start">
          <div
            className={`flex-shrink-0 p-3 rounded-xl transition-colors duration-300
            ${
              isActive
                ? "bg-blue-600 text-white"
                : "bg-indigo-50 text-blue-600 group-hover:bg-indigo-100"
            }`}
          >
            {<feature.icon className="h-6 w-6" />}
          </div>
          <div className="ml-6">
            <p
              className={`text-lg font-normal transition-colors duration-300
              ${isActive ? "text-black" : "text-white group-hover:text-white"}`}
            >
              {feature.title}
            </p>
          </div>
        </div>
      </button>
    </motion.div>
  );
}
