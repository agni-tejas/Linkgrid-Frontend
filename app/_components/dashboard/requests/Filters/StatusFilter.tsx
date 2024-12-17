import React from "react";
import { ChevronDown } from "lucide-react";
import { StatusFilter } from "../../../../_lib/invitation";

interface StatusFilterProps {
  value: StatusFilter;
  onChange: (status: StatusFilter) => void;
}

const StatusFilterComponent: React.FC<StatusFilterProps> = ({
  value,
  onChange,
}) => {
  const options: StatusFilter[] = ["All", "Pending", "Accepted", "Declined"];

  return (
    <div className="relative">
      <label
        htmlFor="status-filter"
        className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1.5"
      >
        Status
      </label>
      <div className="relative">
        <select
          id="status-filter"
          value={value}
          onChange={(e) => onChange(e.target.value as StatusFilter)}
          className="appearance-none w-full px-4 py-3 bg-gray-50 dark:bg-stone-700 border border-gray-200 dark:border-gray-800
            rounded-xl text-gray-900 dark:text-gray-200 text-sm
            focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-sky-500/70 focus:border-blue-500
            transition-all duration-200 cursor-pointer"
          aria-label="Filter invitations by status"
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
      </div>
    </div>
  );
};

export default StatusFilterComponent;
