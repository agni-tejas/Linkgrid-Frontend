import React, { useState } from "react";
import { ChevronDown, ChevronUp, Users, Bell, Filter } from "lucide-react";
import StatusBadge from "./StatusBadge";
import FiltersContainer from "./Filters/FiltersContainer";
import PaginationControls from "./Pagination/PaginationControls";
import BatchActionsBar from "./BatchActions/BatchActionsBar";
import ProfileModal from "./ProfileModal/ProfileModal";
import {
  Invitation,
  SortField,
  SortOrder,
  StatusFilter,
} from "../../../_lib/invitation";
import { usePagination } from "../../../_hooks/usePagination";
import { useSelection } from "../../../_hooks/useSelection";
import { ParallaxHeader } from "../Recommendations/ui/ParallaxHeader";

interface InvitationsTableProps {
  invitations: Invitation[];
}

const InvitationsTable: React.FC<InvitationsTableProps> = ({ invitations }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortField, setSortField] = useState<SortField>("name");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("All");
  const [isFilterExpanded, setIsFilterExpanded] = useState(false);
  const [selectedInvitation, setSelectedInvitation] =
    useState<Invitation | null>(null);

  const { selectedIds, toggleSelection, selectAll, clearSelection } =
    useSelection();

  const filteredInvitations = invitations
    .filter((invitation) => {
      const matchesSearch =
        invitation.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        invitation.username.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus =
        statusFilter === "All" || invitation.status === statusFilter;
      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      if (sortField === "name") {
        return sortOrder === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      } else {
        return sortOrder === "asc"
          ? a.status.localeCompare(b.status)
          : b.status.localeCompare(a.status);
      }
    });

  const {
    currentPage,
    itemsPerPage,
    setPage,
    setItemsPerPage,
    paginatedIndices,
  } = usePagination(filteredInvitations.length);

  const paginatedInvitations = filteredInvitations.slice(
    paginatedIndices.start,
    paginatedIndices.end
  );

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  const handleBatchAction = (action: string) => {
    // Implement batch actions logic here
    console.log(`Batch action ${action} for IDs:`, selectedIds);
    clearSelection();
  };

  return (
    <div className="min-h-screen w-full ">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <ParallaxHeader>
          <div className="mb-8 animate-slide-in">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-black to-sky-700 dark:from-white dark:to-sky-300">
                  Invitations Sent
                </h1>
                <p className="mt-2 text-gray-600 dark:text-slate-300  text-lg">
                  Manage your sent connection requests and stay connected with
                  your network.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-blue-50 dark:bg-stone-900 px-4 py-2 rounded-lg">
                  <Users className="w-5 h-5 text-blue-600 dark:text-sky-300" />
                  <span className="text-blue-700 dark:text-sky-300 font-medium">
                    {filteredInvitations.length} Connections
                  </span>
                </div>
                <button className="relative p-2 rounded-full bg-white dark:bg-stone-900 shadow-sm hover:shadow-md transition-shadow">
                  <Bell className="w-5 h-5 text-gray-600 dark:text-sky-300" />
                  <span className="absolute top-0 right-0 w-2 h-2 bg-blue-600 rounded-full"></span>
                </button>
              </div>
            </div>
          </div>

          {/* Filters Section */}
          <div className="mb-6 bg-white dark:bg-stone-900  rounded-2xl shadow-sm border border-gray-100  dark:border-gray-800 p-6 animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={() => setIsFilterExpanded(!isFilterExpanded)}
                className="flex items-center gap-2 text-gray-700 dark:text-sky-300 hover:text-gray-900 dark:hover:text-sky-500 transition-colors"
              >
                <Filter className="w-5 h-5" />
                <span className="font-medium">Filters</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isFilterExpanded ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            <div
              className={`transition-all duration-300 ${
                isFilterExpanded ? "max-h-96" : "max-h-0 overflow-hidden"
              }`}
            >
              <FiltersContainer
                searchQuery={searchQuery}
                statusFilter={statusFilter}
                onSearchChange={setSearchQuery}
                onStatusChange={setStatusFilter}
              />
            </div>
          </div>
        </ParallaxHeader>

        {/* Table Section */}
        <div className="bg-white dark:bg-stone-950 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden animate-fade-in">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800 ">
              <thead>
                <tr className="bg-gray-50 dark:bg-stone-950">
                  <th scope="col" className="pr-3 py-4">
                    <input
                      type="checkbox"
                      checked={
                        selectedIds.length === paginatedInvitations.length
                      }
                      onChange={(e) =>
                        e.target.checked
                          ? selectAll(
                              paginatedInvitations.map((_, index) =>
                                index.toString()
                              )
                            )
                          : clearSelection()
                      }
                      className="rounded-full border-gray-300 text-blue-600 
                        focus:ring-blue-500 focus:ring-offset-0"
                    />
                  </th>
                  <th scope="col" className="pr-36 py-4">
                    <button
                      className="group inline-flex items-center text-sm font-semibold text-gray-900 dark:text-[#d3d3d3]"
                      onClick={() => handleSort("name")}
                    >
                      Profile
                      <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        {sortField === "name" ? (
                          sortOrder === "asc" ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </span>
                    </button>
                  </th>

                  <th scope="col" className="pr-4 py-4">
                    <button
                      className="group inline-flex items-center text-sm font-semibold text-gray-900  dark:text-[#d3d3d3]"
                      onClick={() => handleSort("status")}
                    >
                      Status
                      <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        {sortField === "status" ? (
                          sortOrder === "asc" ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </span>
                    </button>
                  </th>
                  <th
                    scope="col"
                    className="pl-10 py-4 text-left text-sm font-semibold text-gray-900  dark:text-[#d3d3d3]"
                  >
                    Connected By
                  </th>
                  <th
                    scope="col"
                    className="pr-14 py-4 text-right text-sm font-semibold text-gray-900  dark:text-[#d3d3d3]"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                {paginatedInvitations.map((invitation, index) => (
                  <tr
                    key={index}
                    className="hover:bg-sky-500/20 dark:hover:bg-sky-500/10 transition-all cursor-pointer"
                  >
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        checked={selectedIds.includes(index.toString())}
                        onChange={() => toggleSelection(index.toString())}
                        className="rounded border-gray-300 text-blue-600 
                          focus:ring-blue-500 focus:ring-offset-0"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="relative">
                          <img
                            className="h-12 w-12 rounded-full object-cover ring-2 ring-white"
                            src={invitation.profilePicture}
                            alt={invitation.name}
                          />
                          <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-white bg-green-400"></div>
                        </div>
                        <div className="ml-4">
                          <div className="font-semibold text-gray-900 dark:text-[#F5F5F5]">
                            {invitation.name}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-slate-300">
                            {invitation.username}
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-4">
                      <StatusBadge status={invitation.status} />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <img
                          className="h-8 w-8 rounded-full object-cover ring-2 ring-white"
                          src={invitation.connectedBy.profilePicture}
                          alt={invitation.connectedBy.name}
                        />
                        <div className="ml-3">
                          <div className="text-sm font-medium text-gray-900 dark:text-[#F5F5F5]">
                            {invitation.connectedBy.name}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-slate-300">
                            1st connection
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => setSelectedInvitation(invitation)}
                        className="inline-flex items-center px-4 py-2 border border-transparent 
                          text-sm font-medium rounded-lg text-white
                          bg-gradient-to-r from-blue-600 to-indigo-600
                          hover:from-blue-700 hover:to-indigo-700
                          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                          shadow-sm hover:shadow-md transition-all"
                      >
                        View Profile
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <PaginationControls
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            totalItems={filteredInvitations.length}
            onPageChange={setPage}
            onItemsPerPageChange={setItemsPerPage}
          />
        </div>
      </div>

      <BatchActionsBar
        selectedIds={selectedIds}
        onClearSelection={clearSelection}
        onBatchAction={handleBatchAction}
      />

      {selectedInvitation && (
        <ProfileModal
          invitation={selectedInvitation}
          onClose={() => setSelectedInvitation(null)}
        />
      )}
    </div>
  );
};

export default InvitationsTable;
