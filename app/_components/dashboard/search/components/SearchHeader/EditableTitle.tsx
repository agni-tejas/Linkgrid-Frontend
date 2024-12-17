import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PencilIcon } from "@heroicons/react/24/outline";
import { Input, InputBlock } from "@/app/_ui/customInput";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";

interface EditableTitleProps {
  query: string;
  onQueryChange: (query: string) => void;
}

export const EditableTitle: React.FC<EditableTitleProps> = ({
  query,
  onQueryChange,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [localQuery, setLocalQuery] = useState(query);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onQueryChange(localQuery);
    setIsEditing(false);
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {isEditing ? (
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="flex items-center gap-2"
          >
            {/* <input
              ref={inputRef}
              type="text"
              value={localQuery}
              onChange={(e) => setLocalQuery(e.target.value)}
              className="flex-1 text-3xl font-bold bg-transparent border-b-2 
                       border-brand-500 focus:outline-none focus:border-brand-600 
                       pb-1 placeholder-gray-400"
              placeholder="Enter search query..."
            /> */}
            <InputBlock variant="neubrutalism" size="lg" className="rounded-xl">
              <Input
                ref={inputRef}
                type="text"
                value={localQuery}
                onChange={(e) => setLocalQuery(e.target.value)}
                placeholder="Enter search query..."
                className="rounded-xl bg-white dark:bg-stone-900"
              />
            </InputBlock>
            {/* <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-brand-500 text-white rounded-lg 
                       hover:bg-brand-600 transition-colors shadow-sm"
            >
             
            </motion.button> */}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className=" text-gray-700 dark:text-gray-500 hover:text-brand-600 dark:hover:text-sky-600
                            hover:bg-transparent rounded-full
                           transition-all duration-100"
            >
              <ArrowCircleRightRoundedIcon className="w-12 h-12" />
            </motion.button>
          </motion.form>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center justify-start group"
          >
            <h1
              className="text-4xl font-bold text-blue-950 dark:text-sky-200
                         bg-clip-text text-transparent"
            >
              {query}
            </h1>
            <motion.button
              onClick={() => setIsEditing(true)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 ml-6 text-gray-600 dark:text-gray-300 hover:text-gray-600  dark:hover:text-gray-700
                       hover:bg-indigo-200 dark:hover:bg-sky-200 rounded-full transition-all
                        group-hover:opacity-100 duration-0"
              aria-label="Edit search query"
            >
              <PencilIcon className="w-5 h-5" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
