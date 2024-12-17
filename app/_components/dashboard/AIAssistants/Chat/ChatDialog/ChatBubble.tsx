import React from "react";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { Message } from "../../../../../_lib/chat";
import { cn } from "../../../../../_lib/classNames";

interface ChatBubbleProps {
  message: Message;
}

export const ChatBubble: React.FC<ChatBubbleProps> = ({ message }) => {
  const isAI = message.sender === "ai";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn("flex", isAI ? "justify-start" : "justify-end")}
    >
      <div
        className={cn(
          "max-w-[80%] rounded-2xl px-5 py-2",
          "transform transition-all duration-200",
          isAI
            ? "bg-white dark:bg-stone-950 shadow-sm border border-sky-200 dark:border-gray-800"
            : "bg-gradient-to-r border border-gray-300 dark:border-gray-800 from-slate-400 to-slate-400 dark:from-slate-900 dark:to-slate-950 text-white"
        )}
      >
        <p className="text-sm leading-relaxed whitespace-pre-wrap">
          {message.content}
        </p>
        <span
          className={cn(
            "text-[10px] mt-1.5 block font-medium",
            isAI ? "text-gray-400" : "text-brand-50"
          )}
        >
          {format(new Date(message.timestamp), "h:mm a")}
        </span>
      </div>
    </motion.div>
  );
};
