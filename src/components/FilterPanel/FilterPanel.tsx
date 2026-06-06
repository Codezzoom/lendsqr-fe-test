import "./FilterPanel.scss";
import { Calendar, ChevronDown } from "lucide-react";

const FilterPanel = () => {
  return (
    <form className="filter-panel">
      <label>
        Organization
        <div className="filter-select">
          <span>Select</span>
          <ChevronDown size={18} />
        </div>
      </label>

      <label>
        Username
        <input type="text" placeholder="User" />
      </label>

      <label>
        Email
        <input type="email" placeholder="Email" />
      </label>

      <label>
        Date
        <div className="filter-date">
          <input type="text" placeholder="Date" />
          <Calendar size={18} />
        </div>
      </label>

      <label>
        Phone Number
        <input type="text" placeholder="Phone Number" />
      </label>

      <label>
        Status
        <div className="filter-select">
          <span>Select</span>
          <ChevronDown size={18} />
        </div>
      </label>

      <div className="filter-buttons">
        <button type="button" className="reset-button">
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