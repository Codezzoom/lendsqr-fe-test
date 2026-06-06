import "./Pagination.scss";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  usersPerPage: number;
  totalUsers: number;
  onPageChange: (page: number) => void;
  onUsersPerPageChange: (value: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  usersPerPage,
  totalUsers,
  onPageChange,
  onUsersPerPageChange,
}: PaginationProps) => {

  const getVisiblePages = () => {
    const pages: number[] = [];

    const start = Math.max(1, currentPage - 2);
    const end = Math.min(totalPages, currentPage + 2);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  const visiblePages = getVisiblePages();

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="pagination-row">
      <div className="showing">
        <span>Showing</span>

        <select
          value={usersPerPage}
          onChange={(event) =>
            onUsersPerPageChange(Number(event.target.value))
          }
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>

        <span>out of {totalUsers}</span>
      </div>

      <div className="pagination">
        <button
          type="button"
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
        >
          ‹
        </button>

        {visiblePages.map((page) => (
          <button
            key={page}
            type="button"
            className={currentPage === page ? "active-page" : ""}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}

        {totalPages > 5 && <span>...</span>}

        {totalPages > 5 && (
          <button
            type="button"
            className={currentPage === totalPages ? "active-page" : ""}
            onClick={() => onPageChange(totalPages)}
          >
            {totalPages}
          </button>
        )}

        <button
          type="button"
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default Pagination;