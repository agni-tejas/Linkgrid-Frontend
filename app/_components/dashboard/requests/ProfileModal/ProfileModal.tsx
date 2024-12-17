import React from "react";
import { X, Mail, Link2, MapPin, Calendar, Briefcase } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Invitation } from "../../../../_lib/invitation";
import { scaleIn } from "../animations/variants";

interface ProfileModalProps {
  invitation: Invitation;
  onClose: () => void;
}

const backdrop = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.2 },
};

const ProfileModal: React.FC<ProfileModalProps> = ({ invitation, onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/10 backdrop-blur-sm flex items-center justify-center p-4 z-50"
        {...backdrop}
        onClick={onClose}
      >
        <motion.div
          className="bg-white dark:bg-stone-900 rounded-2xl w-full max-w-2xl shadow-xl"
          {...scaleIn}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute right-4 top-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-sky-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </motion.button>

            <div className="p-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-6"
              >
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src={invitation.profilePicture}
                  alt={invitation.name}
                  className="w-24 h-24 rounded-2xl object-cover"
                />
                <div>
                  <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl font-bold text-gray-900 dark:text-[#F5F5F5]"
                  >
                    {invitation.name}
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-500 dark:text-slate-300"
                  >
                    {invitation.username}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-4 flex items-center gap-3"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg
                        bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      Message
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg
                        border border-gray-200 text-gray-700 dark:text-slate-300 font-medium hover:bg-gray-50 dark:hover:bg-stone-700 transition-colors"
                    >
                      <Link2 className="w-4 h-4" />
                      Share Profile
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-8 grid grid-cols-2 gap-6"
              >
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 dark:text-[#F5F5F5]">
                    About
                  </h3>
                  <p className="text-gray-600 leading-relaxed dark:text-slate-300">
                    {invitation.bio}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 dark:text-[#F5F5F5]">
                    Details
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-slate-300">
                      <MapPin className="w-4 h-4" />
                      San Francisco, CA
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-slate-300">
                      <Briefcase className="w-4 h-4" />
                      Software Engineer at Tech Corp
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-slate-300">
                      <Calendar className="w-4 h-4" />
                      Joined March 2024
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="mt-8">
                <h3 className="font-semibold text-gray-900 mb-3 dark:text-[#F5F5F5]">
                  Connected Through
                </h3>
                <div className="flex items-center gap-3">
                  <img
                    src={invitation.connectedBy.profilePicture}
                    alt={invitation.connectedBy.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-[#d3d3d3]">
                      {invitation.connectedBy.name}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-slate-300">
                      1st connection
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProfileModal;
