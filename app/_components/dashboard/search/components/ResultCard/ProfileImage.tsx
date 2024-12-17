import React from 'react';
import { motion } from 'framer-motion';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';

interface ProfileImageProps {
  imageUrl: string;
  name: string;
  isVerified?: boolean;
}

export const ProfileImage: React.FC<ProfileImageProps> = ({ imageUrl, name, isVerified }) => {
  return (
    <motion.div 
      className="relative flex-shrink-0"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative w-16 h-16">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full rounded-full object-cover 
                   ring-4 ring-white shadow-lg"
        />
        {isVerified && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 bg-white rounded-full p-0.5"
          >
            <CheckBadgeIcon
              className="w-5 h-5 text-brand-500"
              aria-label="Verified profile"
            />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};