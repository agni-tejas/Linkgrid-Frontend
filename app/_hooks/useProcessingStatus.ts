import { useState, useEffect } from "react";

export const useProcessingStatus = () => {
  const [progress, setProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState(2);
  const [currentStatus, setCurrentStatus] = useState(
    "Analyzing your professional network..."
  );

  useEffect(() => {
    // Simulate progress updates
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 1;
        if (next >= 100) {
          clearInterval(interval);
          return 100;
        }
        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Update status based on progress
    if (progress < 33) {
      setCurrentStatus("Analyzing your professional network...");
    } else if (progress < 66) {
      setCurrentStatus("Identifying your interests and connections...");
    } else {
      setCurrentStatus("Personalizing your recommendations...");
    }

    // Update time left
    setTimeLeft(Math.max(2 * (1 - progress / 100), 0));
  }, [progress]);

  return {
    progress,
    timeLeft: Math.ceil(timeLeft),
    currentStatus,
  };
};
