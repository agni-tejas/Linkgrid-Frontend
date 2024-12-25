import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useFloating, FloatingPortal, offset, flip } from "@floating-ui/react";
import { ProfileDropdownContent } from "./ProfileDropdownContent";
import { useClickAway } from "react-use";

interface ProfileDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  onSectionChange?: (section: string) => void;
  email: string;
  referenceElement: HTMLElement | null;
}

export const ProfileDropdown: React.FC<ProfileDropdownProps> = ({
  isOpen,
  onClose,
  onSectionChange,
  email,
  referenceElement,
}) => {
  const { refs, floatingStyles } = useFloating({
    open: isOpen,
    placement: "bottom-start",
    middleware: [offset(-8), flip()],
    elements: {
      reference: referenceElement,
    },
  });

  useClickAway(refs.floating, onClose);

  return (
    <FloatingPortal>
      <AnimatePresence>
        {isOpen && (
          <div ref={refs.setFloating} style={floatingStyles}>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="w-[276px] bg-white dark:bg-stone-950 rounded-xl shadow-lg 
                       border border-gray-100 dark:border-gray-800 overflow-hidden"
            >
              <ProfileDropdownContent
                email={"johndoe@gmail.com"}
                onClose={onClose}
                onSectionChange={onSectionChange}
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </FloatingPortal>
  );
};
