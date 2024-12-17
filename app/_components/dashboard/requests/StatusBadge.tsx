import React from "react";
import { CheckCircle, Clock, XCircle } from "lucide-react";

interface StatusBadgeProps {
  status: "Pending" | "Accepted" | "Declined";
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const getStatusStyles = () => {
    switch (status) {
      case "Accepted":
        return "bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 border-green-200    dark:from-green-400 dark:to-emerald-500 dark:text-green-900 dark:border-green-800      shadow-sm shadow-green-100/50";
      case "Pending":
        return "bg-gradient-to-r from-yellow-50 to-amber-50 text-yellow-700 border-yellow-200   dark:from-yellow-400 dark:to-amber-500 dark:text-yellow-900 dark:border-yellow-800     shadow-sm shadow-yellow-100/50";
      case "Declined":
        return "bg-gradient-to-r from-red-50 to-rose-50 text-red-700 border-red-200   dark:from-red-400 dark:to-rose-500 dark:text-red-900 dark:border-red-800   shadow-sm shadow-red-100/50";
    }
  };

  const getStatusIcon = () => {
    switch (status) {
      case "Accepted":
        return <CheckCircle className="w-4 h-4" />;
      case "Pending":
        return <Clock className="w-4 h-4" />;
      case "Declined":
        return <XCircle className="w-4 h-4" />;
    }
  };

  return (
    <span
      className={`
        inline-flex items-center gap-1.5 px-3 py-1.5 
        rounded-full text-sm font-medium border 
        transition-all duration-200 ease-in-out w-28
        ${getStatusStyles()}
      `}
    >
      {getStatusIcon()}
      {status}
    </span>
  );
};

export default StatusBadge;
