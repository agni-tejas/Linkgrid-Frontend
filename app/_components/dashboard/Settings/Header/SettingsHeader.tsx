import React from "react";
import { motion } from "framer-motion";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export const SettingsHeader: React.FC = () => {
  return (
    <div className="flex items-center gap-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        {/* <Cog6ToothIcon className="w-16 h-16 dark:text-white text-black" /> */}
        <DotLottieReact
          src="/settings.lottie"
          loop
          autoplay
          className="w-[5rem] h-[5rem] dark:invert invert-0 "
        />
      </motion.div>

      <div>
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-5xl font-bold  text-black
                     dark:text-white bg-clip-text "
        >
          Settings
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="text-slate-600 dark:text-slate-400 "
        >
          Manage your account preferences and settings
        </motion.p>
      </div>
    </div>
  );
};
