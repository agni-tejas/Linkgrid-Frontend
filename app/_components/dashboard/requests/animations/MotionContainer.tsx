import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MotionContainerProps {
  children: ReactNode;
  className?: string;
}

// Reusable container component with standard page transition animations
export const MotionContainer = ({
  children,
  className = "",
}: MotionContainerProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);
