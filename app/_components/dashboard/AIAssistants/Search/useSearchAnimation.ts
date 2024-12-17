import { useRef, useState } from 'react';
import { useClickAway } from 'react-use';

export const useSearchAnimation = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useClickAway(containerRef, () => {
    if (isExpanded) {
      setIsExpanded(false);
    }
  });

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return {
    containerRef,
    isExpanded,
    toggleExpand
  };
};