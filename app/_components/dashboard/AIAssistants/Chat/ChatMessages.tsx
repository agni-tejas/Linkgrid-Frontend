import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Message } from "../../../../_lib/chat";
import { ChatBubble } from "./ChatBubble";

interface ChatMessagesProps {
  messages: Message[];
}

export const ChatMessages: React.FC<ChatMessagesProps> = ({ messages }) => {
  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-4">
      <AnimatePresence initial={false}>
        {messages.map((message) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <ChatBubble message={message} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
