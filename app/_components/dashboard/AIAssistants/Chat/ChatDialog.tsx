import React, { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon, MinusIcon } from "@heroicons/react/24/outline";
import { ChatBubble } from "./ChatDialog/ChatBubble";
import { ChatInput } from "./ChatDialog/ChatInput";
import { useChat } from "../../../../_hooks/useChat";

interface ChatDialogProps {
  isOpen: boolean;
  onClose: () => void;
  profileId: string | null;
}

export const ChatDialog: React.FC<ChatDialogProps> = ({
  isOpen,
  onClose,
  profileId,
}) => {
  const { messages, profile, sendMessage } = useChat(profileId);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isMinimized, setIsMinimized] = React.useState(false);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  if (!isOpen || !profile) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50"
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
          height: isMinimized ? "auto" : "90vh",
        }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ type: "spring", bounce: 0.2 }}
        className={`fixed right-8 ${
          isMinimized
            ? "bottom-8"
            : "top-8 bottom-1/4 left-1/4  -translate-y-1/2"
        } 
                   w-full max-w-2xl h-full  bg-white dark:bg-stone-900 rounded-2xl shadow-2xl z-50 overflow-hidden
                   border border-gray-100 dark:border-gray-800`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-gray-50 to-white dark:from-stone-800 dark:to-stone-900 border-b border-gray-100  dark:border-sky-800">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-10 h-10 rounded-full object-cover ring-2 ring-white"
              />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full ring-2 ring-white" />
            </div>
            <div>
              <h3 className="font-semibold text-base text-gray-900 dark:text-[#f5f5f5]">
                {profile.name}
              </h3>
              <p className="text-xs text-gray-500 dark:text-slate-300">
                • AI Persona
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <MinusIcon className="w-5 h-5" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Messages */}
            <div className="h-[calc(85vh-8rem)] overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-gray-50/50 to-white dark:from-stone-950/50 dark:to-stone-800 ">
              {messages.map((message) => (
                <ChatBubble key={message.id} message={message} />
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <ChatInput onSendMessage={sendMessage} />
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
};
