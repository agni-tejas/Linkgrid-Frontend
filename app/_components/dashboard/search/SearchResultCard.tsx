import React from "react";
import { motion } from "framer-motion";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import ShimmerButton from "@/app/_ui/shimmer-button";

interface SearchResultCardProps {
  id: string;
  name: string;
  title: string;
  company: string;
  imageUrl: string;
  insights: string[];
  isVerified?: boolean;
}

export const SearchResultCard: React.FC<SearchResultCardProps> = ({
  name,
  title,
  company,
  imageUrl,
  insights,
  isVerified,
}) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="group relative bg-[#F5F5F5]/40 dark:bg-[#000000]/40 rounded-2xl overflow-hidden
                 transition-all duration-0 hover:shadow-xl border
                  border-black/20 dark:border-white/20  backdrop-blur-sm"
    >
      {/* Gradient Border Effect */}
      <div
        className="absolute inset-0  bg-gradient-to-b 
     from-[#E0F7FF] via-[#E0F7FF] to-[#B3E5FF]
     dark:from-[#000000] dark:via-[#000000] dark:to-[#030B2C]
                     opacity-0 group-hover:opacity-100 transition-opacity duration-0 "
      />

      <div className="relative p-6">
        <div className="flex items-start gap-6">
          {/* Profile Image */}
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="relative flex-shrink-0"
          >
            <div className="relative w-20 h-20">
              <Image
                src={imageUrl}
                width={300}
                height={300}
                quality={40}
                alt={name}
                className="w-full h-full rounded-full object-cover shadow-lg
                         ring-4 ring-sky-400"
              />
              {isVerified && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-sky-200 dark:bg-white rounded-full p-1 shadow-lg"
                >
                  <CheckBadgeIcon className="w-6 h-6 text-brand-500" />
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-[#F5F5F5] mb-1">
                  {name}
                </h3>
                <p className="text-brand-600 dark:text-sky-200 font-medium">
                  {title}
                </p>
                <p className="text-gray-500 dark:text-slate-400">{company}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ShimmerButton
                    background="#000000 "
                    className="shadow-2xl w-44 flex "
                  >
                    <span className="whitespace-pre-wrap flex text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                      Connect &gt;
                    </span>
                  </ShimmerButton>
                </motion.button>
              </div>
            </div>

            {/* <div className="flex items-center gap-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 text-gray-500 hover:text-brand-600
                           bg-gray-50 hover:bg-brand-50 rounded-xl
                           transition-all duration-200"
                >
                  <ChatBubbleLeftIcon className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 text-gray-500 hover:text-brand-600
                           bg-gray-50 hover:bg-brand-50 rounded-xl
                           transition-all duration-200"
                >
                  <CalendarIcon className="w-5 h-5" />
                </motion.button>
              </div>
            </div> */}

            {/* Insights */}
            <div className="mt-4 space-y-2">
              {insights.map((insight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <span
                    className="w-2 h-2 rounded-full bg-gradient-to-r 
                                 from-brand-400 to-sky-400"
                  />
                  <p className="text-gray-600 dark:text-[#d3d3d3]">{insight}</p>
                </motion.div>
              ))}
            </div>

            {/* Connect Button */}
            {/* <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.98 }}
              className="mt-6 w-46 px-6 py-3 bg-gradient-to-r from-brand-500 to-brand-600
                       text-white rounded-xl font-medium shadow-lg shadow-brand-500/20
                       hover:shadow-xl hover:shadow-brand-500/30 transition-all duration-0
                       flex items-center justify-center gap-2"
            >
              <UserPlusIcon className="w-5 h-5" />
              Connect
            </motion.button> */}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
