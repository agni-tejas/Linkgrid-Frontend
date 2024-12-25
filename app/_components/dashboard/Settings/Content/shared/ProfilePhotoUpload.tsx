import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PhotoIcon,
  ArrowUpTrayIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

interface ProfilePhotoUploadProps {
  currentPhoto: string;
  onUpload: (photo: string) => void;
  isLoading?: boolean;
}

export const ProfilePhotoUpload: React.FC<ProfilePhotoUploadProps> = ({
  currentPhoto,
  onUpload,
  isLoading,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFile(file);
    }
  };

  const handleFile = (file: File) => {
    if (file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    if (previewUrl) {
      onUpload(previewUrl);
      setPreviewUrl(null);
    }
  };

  return (
    <div className="flex flex-col items-center border-b border-gray-400 dark:border-gray-800">
      <motion.div whileHover={{ scale: 1.02 }} className="relative group">
        <div
          className={`w-32 h-32 rounded-full overflow-hidden ring-4 
                     ${isDragging ? "ring-brand-400" : "ring-gray-100"}
                     transition-all duration-200`}
        >
          {previewUrl || currentPhoto ? (
            <img
              src={previewUrl || currentPhoto}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-100 flex items-center justify-center">
              <PhotoIcon className="w-12 h-12 text-gray-400" />
            </div>
          )}
        </div>
      </motion.div>

      <div className="mt-6 w-full max-w-sm mb-6">
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`border-2 border-dashed rounded-xl p-6 text-center
                     transition-all duration-200 ${
                       isDragging
                         ? "border-brand-400 bg-brand-50"
                         : "border-gray-200 hover:border-brand-400"
                     }`}
        >
          <ArrowUpTrayIcon className="w-8 h-8 mx-auto text-gray-400" />
          <p className="mt-2 text-sm text-gray-600">
            Drag and drop your photo here, or
          </p>
          <label className="mt-2 inline-block">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
              disabled={isLoading}
            />
            <motion.span
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block px-4 py-2 text-sm font-medium text-brand-600
                       bg-brand-50 rounded-lg cursor-pointer hover:bg-brand-100
                       transition-colors"
            >
              Browse Files
            </motion.span>
          </label>
        </div>

        <AnimatePresence>
          {previewUrl && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-4 flex justify-end gap-3"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setPreviewUrl(null)}
                className="px-4 py-2 text-sm font-medium text-red-600 
                         hover:text-red-700 rounded-lg border border-red-200
                         hover:bg-red-50 transition-all"
              >
                Cancel
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSave}
                className="px-4 py-2 text-sm font-medium text-white 
                         bg-green-500 hover:bg-green-600 rounded-lg
                         transition-all"
              >
                Save Photo
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
