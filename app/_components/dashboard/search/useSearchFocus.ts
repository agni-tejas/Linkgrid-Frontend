import { useState, useCallback } from "react";

interface UseSearchFocusProps<T extends HTMLElement = HTMLInputElement> {
  onFocus?: (event: React.FocusEvent<T>) => void;
  onBlur?: (event: React.FocusEvent<T>) => void;
}

export const useSearchFocus = <T extends HTMLElement = HTMLInputElement>({
  onFocus,
  onBlur,
}: UseSearchFocusProps<T> = {}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = useCallback(
    (event: React.FocusEvent<T>) => {
      setIsFocused(true);
      onFocus?.(event);
    },
    [onFocus]
  );

  const handleBlur = useCallback(
    (event: React.FocusEvent<T>) => {
      setIsFocused(false);
      onBlur?.(event);
    },
    [onBlur]
  );

  return {
    isFocused,
    handleFocus,
    handleBlur,
  };
};
