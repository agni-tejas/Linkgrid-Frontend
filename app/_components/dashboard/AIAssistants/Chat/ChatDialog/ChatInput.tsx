import React, { useState } from "react";
import { motion } from "framer-motion";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import InterpreterModeIcon from "@mui/icons-material/InterpreterMode";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

export const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message.trim());
      setMessage("");
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="border-t border-gray-100 dark:border-sky-900 p-4 bg-white dark:bg-stone-900"
    >
      <div className="flex items-center gap-3">
        <motion.button
          type="button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-3 rounded-full bg-gray-50 dark:bg-gray-800 text-gray-400 hover:text-brand-500 
                   hover:bg-brand-50 transition-all"
        >
          <InterpreterModeIcon className="w-6 h-6" />
        </motion.button>

        <div className="flex-1 relative">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            rows={1}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 
                     bg-gray-50 dark:bg-stone-700 focus:bg-white resize-none
                     focus:outline-none focus:ring-2 focus:ring-brand-500/20 
                     focus:border-brand-500 transition-all"
            style={{
              minHeight: "48px",
              maxHeight: "120px",
            }}
          />
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-3 rounded-full bg-gradient-to-r from-brand-500 to-brand-600
                   text-white shadow-lg shadow-brand-500/20
                   hover:shadow-xl hover:shadow-brand-500/30
                   transition-all disabled:opacity-50"
          disabled={!message.trim()}
        >
          <PaperAirplaneIcon className="w-5 h-5" />
        </motion.button>
      </div>
    </motion.form>
  );
};
