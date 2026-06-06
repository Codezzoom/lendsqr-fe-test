import "./Pagination.scss";

const Pagination = () => {
  return (
    <div className="pagination-row">
      <div className="showing">
        <span>Showing</span>

        <select>
          <option>100</option>
        </select>

        <span>out of 100</span>
      </div>

      <div className="pagination">
        <button type="button">‹</button>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>...</span>
        <span>15</span>
        <span>16</span>
        <button type="button">›</button>
      </div>
    </div>
  );
};

export default Pagination;