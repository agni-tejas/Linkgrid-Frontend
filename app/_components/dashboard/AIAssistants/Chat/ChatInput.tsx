import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

export const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border-t border-gray-100 p-4">
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask about their recent projects..."
          className="flex-1 px-4 py-2 rounded-xl border border-gray-200
                     focus:outline-none focus:ring-2 focus:ring-brand-500/20
                     focus:border-brand-500 transition-all"
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-2 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600
                     text-white shadow-sm hover:shadow-md transition-all"
          disabled={!message.trim()}
        >
          <PaperAirplaneIcon className="w-5 h-5" />
        </motion.button>
      </div>
    </form>
  );
};