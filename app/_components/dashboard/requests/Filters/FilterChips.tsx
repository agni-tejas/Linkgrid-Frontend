import React from "react";
import FilterChip from "../FilterChip";
import { StatusFilter } from "../../../../_lib/invitation";

interface FilterChipsProps {
  statusFilter: StatusFilter;
  onRemoveStatus: () => void;
}

const FilterChips: React.FC<FilterChipsProps> = ({
  statusFilter,
  onRemoveStatus,
}) => {
  if (statusFilter === "All") {
    return null;
  }

  return (
    <div className="flex gap-2 mb-4">
      <FilterChip label={`Status: ${statusFilter}`} onRemove={onRemoveStatus} />
    </div>
  );
};

export default FilterChips;
