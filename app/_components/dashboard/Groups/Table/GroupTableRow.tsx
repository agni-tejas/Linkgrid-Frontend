import React from "react";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { GroupMembers } from "./GroupMembers";
import { CreatedByCell } from "./CreatedByCell";
import { ReasonCell } from "./ReasonCell";
import { Group } from "../../../../_lib/groups";

interface GroupTableRowProps {
  group: Group;
  isEven: boolean;
}

export const GroupTableRow: React.FC<GroupTableRowProps> = ({
  group,
  isEven,
}) => {
  return (
    <motion.tr
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.02)" }}
      className={isEven ? "bg-gray-50 dark:bg-gray-900/30" : ""}
    >
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-gray-900 dark:text-white">
          {group.groupName}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <GroupMembers members={group.groupMembers} />
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <CreatedByCell creator={group.createdBy} />
      </td>
      <td className="px-6 py-4">
        <ReasonCell reason={group.reason} />
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">
          {format(new Date(group.createdAt), "MMM dd, yyyy, h:mm a")}
        </div>
      </td>
    </motion.tr>
  );
};
