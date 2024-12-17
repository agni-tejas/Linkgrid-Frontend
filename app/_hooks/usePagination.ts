import { useState, useMemo } from "react";
import { PaginationState } from "../_lib/pagination";

export const usePagination = (totalItems: number, defaultItemsPerPage = 10) => {
  const [state, setState] = useState<PaginationState>({
    currentPage: 1,
    itemsPerPage: defaultItemsPerPage,
    totalItems,
  });

  const pageCount = Math.ceil(totalItems / state.itemsPerPage);

  const setPage = (page: number) => {
    setState((prev) => ({
      ...prev,
      currentPage: Math.max(1, Math.min(page, pageCount)),
    }));
  };

  const setItemsPerPage = (itemsPerPage: number) => {
    setState((prev) => ({
      ...prev,
      itemsPerPage,
      currentPage: 1,
    }));
  };

  const paginatedIndices = useMemo(() => {
    const start = (state.currentPage - 1) * state.itemsPerPage;
    const end = Math.min(start + state.itemsPerPage, totalItems);
    return { start, end };
  }, [state.currentPage, state.itemsPerPage, totalItems]);

  return {
    ...state,
    setPage,
    setItemsPerPage,
    paginatedIndices,
  };
};

export default usePagination;
