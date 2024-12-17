import React from "react";
import StatusFilter from "./StatusFilter";
import SearchInput from "./SearchInput";
import FilterChips from "./FilterChips";
import { StatusFilter as StatusFilterType } from "../../../../_lib/invitation";

interface FiltersContainerProps {
  searchQuery: string;
  statusFilter: StatusFilterType;
  onSearchChange: (value: string) => void;
  onStatusChange: (status: StatusFilterType) => void;
}

const FiltersContainer: React.FC<FiltersContainerProps> = ({
  searchQuery,
  statusFilter,
  onSearchChange,
  onStatusChange,
}) => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SearchInput value={searchQuery} onChange={onSearchChange} />
        <StatusFilter value={statusFilter} onChange={onStatusChange} />
      </div>
      <FilterChips
        statusFilter={statusFilter}
        onRemoveStatus={() => onStatusChange("All")}
      />
    </div>
  );
};

export default FiltersContainer;
