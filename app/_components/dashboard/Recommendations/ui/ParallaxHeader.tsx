import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxHeaderProps {
  children: React.ReactNode;
}

export const ParallaxHeader: React.FC<ParallaxHeaderProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);
  const blur = useTransform(scrollY, [0, 300], [0, 8]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity, scale }}
      className="relative z-10 will-change-transform"
    >
      <motion.div
        style={{ filter: `blur(${blur}px)` }}
        className="absolute inset-0 "
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};
