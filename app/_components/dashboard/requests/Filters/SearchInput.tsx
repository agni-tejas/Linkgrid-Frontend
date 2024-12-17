import React from "react";
import { Search } from "lucide-react";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ value, onChange }) => {
  return (
    <div className="relative flex-1">
      <label
        htmlFor="status-input"
        className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1.5"
      >
        Search
      </label>
      <label htmlFor="search-input" className="sr-only">
        Search by name or username
      </label>
      <div className="relative">
        <input
          id="search-input"
          type="text"
          placeholder="Search by name, username"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full pl-11 pr-4 py-2.5 bg-gray-50 dark:bg-stone-700 border border-gray-200 dark:border-gray-800 rounded-xl
            text-gray-900 dark:text-gray-200 placeholder-gray-500 dark:placeholder-slate-400
            focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-sky-500/70 focus:border-blue-500
            transition-all duration-200"
          aria-label="Search invitations"
        />
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5"
          aria-hidden="true"
        />
      </div>
    </div>
  );
};

export default SearchInput;
