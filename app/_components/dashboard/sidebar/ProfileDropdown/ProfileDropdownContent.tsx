import React, { useState } from "react";
import {
  HomeIcon,
  PuzzlePieceIcon,
  ClockIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { DropdownButton } from "./DropdownButton";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import { useRouter } from "next/navigation";

interface ProfileDropdownContentProps {
  email: string;
  onClose: () => void;
  onSectionChange?: (section: string) => void;
}

export const ProfileDropdownContent: React.FC<ProfileDropdownContentProps> = ({
  email,
  onClose,
  onSectionChange,
}) => {
  const router = useRouter();
  const [activeItem, setActiveItem] = useState<string>("");

  const navigationItems = [
    {
      id: "plan",
      icon: <CreditCardOutlinedIcon className="w-5 h-5" />,
      label: "Upgrade Plan",
    },
    {
      id: "processing",
      icon: <ClockIcon className="w-5 h-5" />,
      label: "Processing",
    },
  ];

  const handleItemClick = (id: string) => {
    setActiveItem(id);
    onSectionChange?.(id);
  };

  const handleLogout = () => {
    // Handle logout logic here
    onClose();
  };

  const goToHomepage = () => {
    router.push("/"); // Navigate to the homepage
  };

  return (
    <div className="py-2">
      {/* Email Section */}
      <div className="px-4 py-2 border-b border-gray-100 dark:border-gray-700">
        <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
          {email}
        </p>
      </div>

      {/* Navigation Links */}
      <div className="py-1">
        <DropdownButton
          icon={<HomeIcon className="w-5 h-5" />}
          label="Homepage"
          onClick={goToHomepage}
        />

        {navigationItems.map((item) => (
          <DropdownButton
            key={item.id}
            icon={item.icon}
            label={item.label}
            onClick={() => handleItemClick(item.id)}
          />
        ))}
      </div>

      {/* Logout Section */}
      <div className="py-1 border-t border-gray-100 dark:border-gray-700">
        <DropdownButton
          icon={<ArrowRightOnRectangleIcon className="w-5 h-5" />}
          label="Logout"
          onClick={handleLogout}
          variant="danger"
        />
      </div>
    </div>
  );
};
