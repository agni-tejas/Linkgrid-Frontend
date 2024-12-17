import React, { forwardRef } from "react";
import { useSearchFocus } from "./useSearchFocus";
import { useAutoExpand } from "./useAutoExpand";
import { cn } from "../../../_lib/classNames";
import { SearchInputProps } from "./types";
import "./SearchInput.css";
import { SparklesIcon } from "@heroicons/react/24/solid";

export const SearchInput = forwardRef<HTMLTextAreaElement, SearchInputProps>(
  ({
    value = "",
    onChange,
    onFocus,
    onBlur,
    placeholder = "Search...",
    className,
    "aria-label": ariaLabel,
    maxLength = 500,
    ...props
  }) => {
    const { isFocused, handleFocus, handleBlur } = useSearchFocus({
      onFocus,
      onBlur,
    });
    const textareaRef = useAutoExpand({ value: value?.toString() || "" });

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        // Trigger form submission if needed
      }
    };

    return (
      <div className="search-input-wrapper">
        <div
          className={cn(
            "search-input-container bg-zinc-100 dark:bg-stone-900",
            isFocused && "is-focused",
            className
          )}
        >
          <SparklesIcon className="search-icon" aria-hidden="true" />
          <textarea
            ref={textareaRef}
            value={value}
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            maxLength={maxLength}
            rows={1}
            className="search-input  text-white"
            aria-label={ariaLabel || placeholder}
            {...props}
          />
          {maxLength && (
            <div
              className={cn(
                "character-count",
                (value?.toString().length || 0) > maxLength * 0.9 &&
                  "near-limit"
              )}
            >
              {value?.toString().length || 0}/{maxLength}
            </div>
          )}
        </div>
        <div className={cn("search-input-border", isFocused && "is-focused")} />
      </div>
    );
  }
);

SearchInput.displayName = "SearchInput";
