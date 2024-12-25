import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PencilIcon, CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { SettingsCard } from "../shared/SettingsCard";
import { ProfilePhotoUpload } from "../shared/ProfilePhotoUpload";
import { TextInput } from "../shared/TextInput";
import { cn } from "../../../../../_lib/classNames";

interface AccountSettingsProps {
  settings: {
    firstName: string;
    lastName: string;
    email: string;
    profilePhoto: string;
  };
  onUpdate: (settings: any) => Promise<void>;
  isLoading: boolean;
}

export const AccountSettings: React.FC<AccountSettingsProps> = ({
  settings,
  onUpdate,
  isLoading,
}) => {
  const [editMode, setEditMode] = useState<"name" | "email" | null>(null);
  const [formData, setFormData] = useState(settings);
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
      return false;
    }
    setEmailError("");
    return true;
  };

  const handleSave = async (section: "name" | "email") => {
    if (section === "email" && !validateEmail(formData.email)) {
      return;
    }

    try {
      await onUpdate({ account: { ...settings, ...formData } });
      setEditMode(null);
    } catch (error) {
      console.error("Failed to save changes:", error);
    }
  };

  return (
    <div className="space-y-8 w-full mx-auto">
      {/* Title Section */}

      <div className="dark:bg-zinc-950 bg-gray-100 border border-gray-400 dark:border-gray-800 rounded-xl">
        {/* Name Section */}
        <SettingsCard
          title="Personal Information"
          description="Update your name and how it appears on your account"
        >
          <div className="space-y-6 border-b border-gray-400 dark:border-gray-800">
            <div className="flex justify-between items-start mb-6">
              <div className="space-y-1">
                <h3 className="text-lg font-medium text-gray-950 dark:text-gray-300">
                  Name:
                </h3>
                <AnimatePresence mode="wait">
                  {editMode !== "name" ? (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-gray-500 dark:text-gray-400 text-lg"
                    >
                      {formData.firstName} {formData.lastName}
                    </motion.p>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="space-y-4 pt-4"
                    >
                      <div className="grid grid-cols-2 gap-4">
                        <TextInput
                          label="First Name"
                          value={formData.firstName}
                          onChange={(value) =>
                            setFormData({ ...formData, firstName: value })
                          }
                          placeholder="Enter your first name"
                        />
                        <TextInput
                          label="Last Name"
                          value={formData.lastName}
                          onChange={(value) =>
                            setFormData({ ...formData, lastName: value })
                          }
                          placeholder="Enter your last name"
                        />
                      </div>
                      <div className="flex justify-end gap-3">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => {
                            setFormData(settings);
                            setEditMode(null);
                          }}
                          className="px-4 py-2 text-sm font-medium text-red-600 
                                 hover:text-red-700 rounded-lg border border-red-200
                                 hover:bg-red-50 transition-all"
                        >
                          Cancel
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleSave("name")}
                          className="px-4 py-2 text-sm font-medium text-white 
                                 bg-green-500 hover:bg-green-600 rounded-lg
                                 transition-all"
                        >
                          Save Changes
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              {editMode !== "name" && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setEditMode("name")}
                  className="p-2 text-gray-400 hover:text-gray-600 
                         hover:bg-gray-100 rounded-lg transition-all"
                >
                  <PencilIcon className="w-5 h-5" />
                </motion.button>
              )}
            </div>
          </div>
        </SettingsCard>

        {/* Profile Picture Section */}
        <SettingsCard
          title="Profile Picture"
          description="Upload a new profile picture or avatar"
        >
          <ProfilePhotoUpload
            currentPhoto={settings.profilePhoto}
            onUpload={(photo) =>
              onUpdate({ account: { ...settings, profilePhoto: photo } })
            }
            isLoading={isLoading}
          />
        </SettingsCard>

        {/* Email Section */}
        <SettingsCard
          title="Email Address"
          description="Manage your email address and communication preferences"
        >
          <div className="space-y-6 pb-6">
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <h3 className="text-lg font-medium text-gray-950 dark:text-gray-300">
                  Email:
                </h3>
                <AnimatePresence mode="wait">
                  {editMode !== "email" ? (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-gray-500 dark:text-gray-400 text-lg"
                    >
                      {formData.email}
                    </motion.p>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="space-y-4 pt-4"
                    >
                      <div className="w-full max-w-md">
                        <TextInput
                          label="Email Address"
                          value={formData.email}
                          onChange={(value) => {
                            setFormData({ ...formData, email: value });
                            validateEmail(value);
                          }}
                          placeholder="Enter your email address"
                          type="email"
                        />
                        {emailError && (
                          <p className="mt-2 text-sm text-red-500">
                            {emailError}
                          </p>
                        )}
                      </div>
                      <div className="flex justify-end gap-3">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => {
                            setFormData(settings);
                            setEditMode(null);
                            setEmailError("");
                          }}
                          className="px-4 py-2 text-sm font-medium text-red-600 
                                 hover:text-red-700 rounded-lg border border-red-200
                                 hover:bg-red-50 transition-all"
                        >
                          Cancel
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleSave("email")}
                          disabled={!!emailError}
                          className={cn(
                            "px-4 py-2 text-sm font-medium text-white rounded-lg transition-all",
                            emailError
                              ? "bg-gray-400 cursor-not-allowed"
                              : "bg-green-500 hover:bg-green-600"
                          )}
                        >
                          Save Changes
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              {editMode !== "email" && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setEditMode("email")}
                  className="p-2 text-gray-400 hover:text-gray-600 
                         hover:bg-gray-100 rounded-lg transition-all"
                >
                  <PencilIcon className="w-5 h-5" />
                </motion.button>
              )}
            </div>
          </div>
        </SettingsCard>
      </div>
    </div>
  );
};
