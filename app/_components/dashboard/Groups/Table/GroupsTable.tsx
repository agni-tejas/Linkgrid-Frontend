import React from "react";
import { motion } from "framer-motion";
import { GroupTableRow } from "./GroupTableRow";
import { Group } from "../../../../_lib/groups";

interface GroupsTableProps {
  groups: Group[];
}

export const GroupsTable: React.FC<GroupsTableProps> = ({ groups }) => {
  return (
    <div className="bg-white dark:bg-stone-950 rounded-xl shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
          <thead className="bg-gray-50 dark:bg-stone-950">
            <tr>
              <th
                className="px-6 py-6 text-left text-sm font-medium text-gray-500 dark:text-slate-400
                           uppercase tracking-wider"
              >
                Group Name
              </th>
              <th
                className="px-6 py-4 text-left text-sm font-medium text-gray-500  dark:text-slate-400
                           uppercase tracking-wider"
              >
                Members
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Created By
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Reason
              </th>
              <th
                className="px-6 py-4 text-left text-sm font-medium text-gray-500 
                           uppercase tracking-wider dark:text-slate-400"
              >
                Created At
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
            {groups.map((group, index) => (
              <GroupTableRow
                key={group.id}
                group={group}
                isEven={index % 2 === 0}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
