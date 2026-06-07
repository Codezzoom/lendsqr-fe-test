import { useState } from "react";
import { MoreVertical, SlidersHorizontal } from "lucide-react";

import type { User } from "../../types/user";
import ActionMenu from "../ActionMenu/ActionMenu";
import FilterPanel from "../FilterPanel/FilterPanel";

import "./Table.scss";

interface TableProps {
  users: User[];
  searchText: string;
  statusFilter: string;
  onSearchChange: (value: string) => void;
  onStatusChange: (value: string) => void;
  onResetFilters: () => void;
}

const headings = [
  "ORGANIZATION",
  "USERNAME",
  "EMAIL",
  "PHONE NUMBER",
  "DATE JOINED",
  "STATUS",
];

const Table = ({
  users,
  searchText,
  statusFilter,
  onSearchChange,
  onStatusChange,
  onResetFilters,
}: TableProps) => {
  const [showFilter, setShowFilter] = useState(false);
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);

  return (
    <div className="table-card">
      {showFilter && (
        <FilterPanel
          searchText={searchText}
          statusFilter={statusFilter}
          onSearchChange={onSearchChange}
          onStatusChange={onStatusChange}
          onResetFilters={onResetFilters}
          onClose={() => setShowFilter(false)}
        />
      )}

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              {headings.map((heading) => (
                <th key={heading}>
                  <span>{heading}</span>

                  <button
                    type="button"
                    className="filter-icon-button"
                    onClick={() => setShowFilter((prev) => !prev)}
                    aria-label={`Filter by ${heading}`}
                  >
                    <SlidersHorizontal size={14} />
                  </button>
                </th>
              ))}

              <th className="actions-heading" aria-label="Actions"></th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{user.organization}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.dateJoined}</td>
                <td>
                  <span className={`status ${user.status.toLowerCase()}`}>
                    {user.status}
                  </span>
                </td>

                <td className="action-cell">
                  <button
                    type="button"
                    aria-label="Open user actions"
                    onClick={() =>
                      setOpenMenuIndex(openMenuIndex === index ? null : index)
                    }
                  >

                    <MoreVertical size={20} />
                  </button>

                  {openMenuIndex === index && <ActionMenu user={user} />}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;