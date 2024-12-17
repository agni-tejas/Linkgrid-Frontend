import React from "react";
import { Message } from "../../../../_lib/chat";
import { cn } from "../../../../_lib/utils";

interface ChatBubbleProps {
  message: Message;
}

export const ChatBubble: React.FC<ChatBubbleProps> = ({ message }) => {
  const isAI = message.sender === "ai";

  return (
    <div className={cn("flex", isAI ? "justify-start" : "justify-end")}>
      <div
        className={cn(
          "max-w-[80%] rounded-2xl px-4 py-2",
          isAI ? "bg-gray-100 text-gray-900" : "bg-brand-500 text-white"
        )}
      >
        <p className="text-sm">{message.content}</p>
      </div>
    </div>
  );
};
