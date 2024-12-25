import React from 'react';
import { motion } from 'framer-motion';

interface SaveChangesBarProps {
  onSave: () => void;
  onCancel: () => void;
  isLoading?: boolean;
}

export const SaveChangesBar: React.FC<SaveChangesBarProps> = ({
  onSave,
  onCancel,
  isLoading,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 
                 border-t border-gray-100 dark:border-gray-700 
                 shadow-lg px-6 py-4 z-50"
    >
      <div className="max-w-4xl mx-auto flex items-center justify-end gap-4">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onCancel}
          className="px-4 py-2 text-sm font-medium text-gray-700 
                   hover:text-gray-900 rounded-lg hover:bg-gray-100
                   transition-colors"
          disabled={isLoading}
        >
          Cancel
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onSave}
          className="px-4 py-2 text-sm font-medium text-white 
                   bg-brand-500 hover:bg-brand-600 rounded-lg
                   shadow-sm hover:shadow-md transition-all
                   disabled:opacity-50 disabled:cursor-not-allowed
                   flex items-center gap-2"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <motion.div
                className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              />
              Saving...
            </>
          ) : (
            'Save Changes'
          )}
        </motion.button>
      </div>
    </motion.div>
  );
};