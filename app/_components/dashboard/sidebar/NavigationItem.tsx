import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { cn } from "@/lib/utils";
import {
  Button,
  type ButtonProps as BaseButtonProps,
} from "../../../_ui/button";

interface NavigationItemProps {
  icon: React.ReactNode;
  label: string;
  count?: number;
  isActive?: boolean;
  isCollapsed?: boolean;
  onClick?: () => void;
}

export const NavigationItem: React.FC<NavigationItemProps> = ({
  icon,
  label,
  count,
  isActive,
  isCollapsed,
  onClick,
}) => {
  return (
    <motion.button
      onClick={onClick}
      className={clsx(
        "relative w-full flex items-center gap-3 px-4 py-2 text-left",
        "transition-all duration-0",
        "hover:no-underline",
        "underline-offset-8 hover:underline",
        "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:translate-y-[10px] after:rounded-full after:dark:bg-sky-400 after:bg-blue-500 after:opacity-0 after:duration-300 after:content-[''] hover:after:-translate-y-0 hover:after:opacity-100  ",
        isActive
          ? "text-brand-600 dark:text-sky-400 font-medium"
          : "text-gray-600 hover:text-gray-900 dark:hover:text-white dark:text-gray-300",
        isCollapsed ? "justify-center" : ""
      )}
      whileHover={{ x: isCollapsed ? 0 : 4 }}
      whileTap={{ scale: 0.98 }}
    >
      <div
        className={clsx(
          "relative flex items-center justify-center",
          "w-9 h-9 rounded-[2rem] transition-colors duration-200",
          isActive
            ? "bg-cyan-600 text-blue-100 dark:bg-violet-600 dark:text-violet-200"
            : "text-gray-400 group-hover:text-gray-600"
        )}
      >
        {icon}
        {isActive && (
          <motion.div
            className="absolute inset-0 rounded-[2rem] bg-brand-100/50"
            layoutId="activeBackground"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
      </div>

      {!isCollapsed && <span className="flex-1">{label}</span>}

      {count !== undefined && !isCollapsed && (
        <span
          className={clsx(
            "px-2 py-0.5 text-xs font-medium rounded-full",
            isActive
              ? "bg-brand-100 text-brand-700"
              : "bg-gray-100 text-gray-600"
          )}
        >
          {count}
        </span>
      )}

      {count !== undefined && isCollapsed && (
        <div className="absolute top-1 right-1">
          <span className="flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
          </span>
        </div>
      )}
    </motion.button>
  );
};

/////////////////////////////////////////

type ButtonProps = {
  children: React.ReactNode;
} & BaseButtonProps;

//======================================
export const Button_v7 = ({ children, ...rest }: ButtonProps) => {
  return (
    <Button
      variant="link"
      {...rest}
      className={cn(
        "hover:no-underline",
        "relative ease-in after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:translate-y-[3px] after:rounded-full after:dark:bg-zinc-50 after:bg-zinc-800 after:opacity-0 after:duration-300 after:content-[''] hover:after:-translate-y-1 hover:after:opacity-100 px-[1px] pb-0",
        rest.className
      )}
    >
      {children}
    </Button>
  );
};
