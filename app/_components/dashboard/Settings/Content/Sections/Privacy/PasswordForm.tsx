import React, { useState } from "react";
import { motion } from "framer-motion";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { PasswordInput } from "../../shared/PasswordInput";
import { validatePassword } from "../../../../../../_lib/validation";

interface PasswordFormProps {
  hasPassword: boolean;
  onSave: (data: {
    currentPassword?: string;
    newPassword: string;
  }) => Promise<void>;
  onCancel: () => void;
  isLoading: boolean;
}

export const PasswordForm: React.FC<PasswordFormProps> = ({
  hasPassword,
  onSave,
  onCancel,
  isLoading,
}) => {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (hasPassword && !formData.currentPassword) {
      newErrors.currentPassword = "Current password is required";
    }

    const passwordError = validatePassword(formData.newPassword);
    if (passwordError) {
      newErrors.newPassword = passwordError;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const data = hasPassword
      ? {
          currentPassword: formData.currentPassword,
          newPassword: formData.newPassword,
        }
      : { newPassword: formData.newPassword };

    await onSave(data);
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {!hasPassword && (
        <PasswordInput
          label="Current Password"
          value={formData.currentPassword}
          onChange={(value) =>
            setFormData({ ...formData, currentPassword: value })
          }
          error={errors.currentPassword}
          disabled={isLoading}
        />
      )}

      <PasswordInput
        label="New Password"
        value={formData.newPassword}
        onChange={(value) => setFormData({ ...formData, newPassword: value })}
        error={errors.newPassword}
        disabled={isLoading}
      />

      <PasswordInput
        label="Confirm New Password"
        value={formData.confirmPassword}
        onChange={(value) =>
          setFormData({ ...formData, confirmPassword: value })
        }
        error={errors.confirmPassword}
        disabled={isLoading}
      />

      <div className="flex justify-end gap-3">
        <motion.button
          type="button"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onCancel}
          className="px-4 py-2 text-sm font-medium text-red-600 
                   hover:text-red-700 rounded-lg border border-red-200
                   hover:bg-red-50 transition-all"
          disabled={isLoading}
        >
          Cancel
        </motion.button>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-4 py-2 text-sm font-medium text-white 
                   bg-green-500 hover:bg-green-600 rounded-lg
                   transition-all disabled:opacity-50"
          disabled={isLoading}
        >
          Save Changes
        </motion.button>
      </div>
    </motion.form>
  );
};
