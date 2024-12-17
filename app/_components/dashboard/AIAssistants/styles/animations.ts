export const pageTransitions = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};

export const cardTransitions = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  hover: {
    y: -4,
    boxShadow: '0 12px 24px -8px rgba(0, 0, 0, 0.15)',
    transition: { duration: 0.3 }
  }
};

export const chatDialogTransitions = {
  overlay: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  },
  dialog: {
    initial: { opacity: 0, scale: 0.95, y: 20 },
    animate: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { type: "spring", bounce: 0.2 }
    },
    exit: { opacity: 0, scale: 0.95, y: 20 }
  }
};