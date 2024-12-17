import { useEffect, useRef } from "react";

interface UseAutoExpandProps {
  value: string;
  maxHeight?: number;
}

export const useAutoExpand = ({
  value,
  maxHeight = 200,
}: UseAutoExpandProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    // Reset height to auto to get the correct scrollHeight
    textarea.style.height = "auto";

    // Calculate new height
    const newHeight = Math.min(textarea.scrollHeight, maxHeight);
    textarea.style.height = `${newHeight}px`;

    // Add scrollbar if content exceeds maxHeight
    textarea.style.overflowY =
      textarea.scrollHeight > maxHeight ? "auto" : "hidden";
  }, [value, maxHeight]);

  return textareaRef;
};
