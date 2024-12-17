import React from "react";
import { Check, X, MailQuestion } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BatchAction } from "../../../../_lib/batch";
import { slideInFromBottom } from "../animations/variants";

interface BatchActionsBarProps {
  selectedIds: string[];
  onClearSelection: () => void;
  onBatchAction: (action: string) => void;
}

const BatchActionsBar: React.FC<BatchActionsBarProps> = ({
  selectedIds,
  onClearSelection,
  onBatchAction,
}) => {
  const actions: BatchAction[] = [
    {
      label: "Accept Selected",
      value: "accept",
      icon: Check,
      handler: () => onBatchAction("accept"),
    },
    {
      label: "Decline Selected",
      value: "decline",
      icon: X,
      handler: () => onBatchAction("decline"),
    },
    {
      label: "Send Reminder",
      value: "remind",
      icon: MailQuestion,
      handler: () => onBatchAction("remind"),
    },
  ];

  return (
    <AnimatePresence>
      {selectedIds.length > 0 && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50"
          {...slideInFromBottom}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-sm font-medium text-gray-700"
                >
                  {selectedIds.length} selected
                </motion.span>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onClearSelection}
                  className="text-sm text-gray-500 hover:text-gray-700"
                >
                  Clear selection
                </motion.button>
              </div>

              <div className="flex items-center gap-3">
                {actions.map((action) => (
                  <motion.button
                    key={action.value}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => action.handler(selectedIds)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg
                      text-sm font-medium text-white
                      bg-gradient-to-r from-blue-600 to-indigo-600
                      hover:from-blue-700 hover:to-indigo-700
                      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                      shadow-sm hover:shadow-md transition-all"
                  >
                    <action.icon />
                    {action.label}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BatchActionsBar;
