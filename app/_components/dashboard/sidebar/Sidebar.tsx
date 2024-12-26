import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { ProfileSection } from "./ProfileSection";
import { NavigationItem } from "./NavigationItem";
import { RecentSearches } from "./RecentSearches";
import { Footer } from "./Footer";
import FaceRetouchingNaturalOutlinedIcon from "@mui/icons-material/FaceRetouchingNaturalOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import ManageSearchOutlinedIcon from "@mui/icons-material/ManageSearchOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import { useSearchDialog } from "../search/SearchDialogContext";

const mockRecentSearches = [
  { id: "1", term: "Marketing Team", timestamp: "2 hours ago" },
  { id: "2", term: "Project Planning", timestamp: "5 hours ago" },
  { id: "3", term: "Design System", timestamp: "1 day ago" },
  { id: "4", term: "Frontend Team", timestamp: "2 days ago" },
  { id: "5", term: "Documentation", timestamp: "3 days ago" },
];

interface SidebarProps {
  onSectionChange?: (section: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ onSectionChange }) => {
  const [activeItem, setActiveItem] = useState<string>("search");
  const { isCollapsed, setIsCollapsed } = useSearchDialog();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const navigationItems = [
    {
      id: "search",
      icon: <ManageSearchOutlinedIcon className="w-5 h-5" />,
      label: "Search",
    },
    {
      id: "invites",
      icon: <GroupAddOutlinedIcon className="w-5 h-5" />,
      label: "Invitations",
      count: 3,
    },
    {
      id: "ai",
      icon: <FaceRetouchingNaturalOutlinedIcon className="w-5 h-5" />,
      label: "AI Personals",
    },
    {
      id: "recommend",
      icon: <InsightsOutlinedIcon className="w-5 h-5" />,
      label: "Recommendations",
      count: 5,
    },
    {
      id: "groups",
      icon: <GroupsOutlinedIcon className="w-5 h-5" />,
      label: "Groups",
      count: 5,
    },
  ];

  const handleSettingsClick = () => {
    setActiveItem("settings");
    onSectionChange?.("settings");
  };

  const handleItemClick = (id: string) => {
    setActiveItem(id);
    onSectionChange?.(id);
  };

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <motion.aside
      initial={false}
      animate={{
        width: isCollapsed ? "64px" : "280px",
      }}
      className="fixed left-0  top-0 h-screen bg-gradient-to-r from-neutral-100 to-white   dark:from-zinc-950 dark:to-zinc-950 shadow-sidebar flex flex-col"
    >
      <ProfileSection
        name="Agni Tejas"
        role="Senior Developer"
        isCollapsed={isCollapsed}
        onSettingsClick={handleSettingsClick}
        imageUrl="https://pbs.twimg.com/profile_images/1285244902926737408/-tlKet0M_400x400.jpg"
        onSectionChange={onSectionChange}
      />

      <nav className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
        <div className="space-y-1 px-2 mt-4">
          {navigationItems.map((item) => (
            <NavigationItem
              key={item.id}
              icon={item.icon}
              label={item.label}
              count={item.count}
              isActive={activeItem === item.id}
              isCollapsed={isCollapsed}
              onClick={() => handleItemClick(item.id)}
            />
          ))}
        </div>

        <AnimatePresence>
          {!isCollapsed && activeItem === "search" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-8"
            >
              <RecentSearches
                searches={mockRecentSearches}
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                onClearSearch={(id) => {
                  // Handle clear search
                }}
                onViewHistory={() => {
                  // Handle view history
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <Footer
        isCollapsed={isCollapsed}
        isDarkMode={isDarkMode}
        onThemeToggle={handleThemeToggle}
      />

      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-1/2 transform -translate-y-1/2
                   w-6 h-6 rounded-full bg-white dark:bg-stone-900 shadow-md
                   flex items-center justify-center
                   text-gray-400 hover:text-gray-600 dark:hover:text-gray-300
                   transition-colors duration-200"
      >
        {isCollapsed ? (
          <ChevronRightIcon className="w-4 h-4" />
        ) : (
          <ChevronLeftIcon className="w-4 h-4" />
        )}
      </button>
    </motion.aside>
  );
};
