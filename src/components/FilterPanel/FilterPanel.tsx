import { ChevronDown } from "lucide-react";
import "./FilterPanel.scss";

interface FilterPanelProps {
  searchText: string;
  statusFilter: string;
  onSearchChange: (value: string) => void;
  onStatusChange: (value: string) => void;
  onResetFilters: () => void;
  onClose: () => void;
}

const FilterPanel = ({
  searchText,
  statusFilter,
  onSearchChange,
  onStatusChange,
  onResetFilters,
  onClose,
}: FilterPanelProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onClose();
  };

  const handleReset = () => {
    onResetFilters();
    onClose();
  };

  return (
    <form className="filter-panel" onSubmit={handleSubmit}>
      <label>
        Search
        <input
          type="text"
          placeholder="Username, email, phone..."
          value={searchText}
          onChange={(event) => onSearchChange(event.target.value)}
        />
      </label>

      <label>
        Status
        <div className="filter-select">
          <select
            value={statusFilter}
            onChange={(event) => onStatusChange(event.target.value)}
          >
            <option value="">Select</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="Pending">Pending</option>
            <option value="Blacklisted">Blacklisted</option>
          </select>

          <ChevronDown size={18} />
        </div>
      </label>

      <div className="filter-buttons">
        <button type="button" className="reset-button" onClick={handleReset}>
          Reset
        </button>

        <button type="submit" className="filter-button">
          Filter
        </button>
      </div>
    </form>
  );
};

export default FilterPanel;