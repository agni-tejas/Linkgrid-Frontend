import React, { useState } from "react";
import { motion } from "framer-motion";
import { GroupsHeader } from "./Header/GroupsHeader";
import { GroupsTable } from "./Table/GroupsTable";
import { GroupsPagination } from "./Pagination/GroupsPagination";
import { useGroups } from "../../../_hooks/useGroups";

export const GroupsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { groups, totalPages } = useGroups(searchQuery, currentPage);

  return (
    <div className="min-h-screen w-full ">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <GroupsHeader
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8"
        >
          <GroupsTable groups={groups} />

          <div className="mt-8">
            <GroupsPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
