import React from 'react';
import { X } from 'lucide-react';

interface FilterChipProps {
  label: string;
  onRemove: () => void;
}

const FilterChip: React.FC<FilterChipProps> = ({ label, onRemove }) => {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 
      bg-gradient-to-r from-blue-50 to-indigo-50 
      text-blue-700 rounded-full text-sm font-medium
      border border-blue-200 shadow-sm
      animate-fade-in">
      {label}
      <button
        onClick={onRemove}
        className="p-0.5 hover:bg-blue-100 rounded-full transition-colors"
        aria-label="Remove filter"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </span>
  );
};

export default FilterChip;