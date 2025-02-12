import React, { useState, ChangeEvent } from "react";

interface PaginationProps {
  totalPages: number;
  initialPage?: number;
  onPageChange?: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  initialPage = 1,
  onPageChange,
}) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const handlePageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newPage = Number(event.target.value);
    setCurrentPage(newPage);
    if (onPageChange) {
      onPageChange(newPage);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      if (onPageChange) {
        onPageChange(currentPage - 1);
      }
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      if (onPageChange) {
        onPageChange(currentPage + 1);
      }
    }
  };

  return (
    <div>
      <button onClick={goToPreviousPage} disabled={currentPage === 1}>
        &lt;
      </button>
      <span>Page</span>
      <select value={currentPage} onChange={handlePageChange}>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <option key={page} value={page}>
            {page}
          </option>
        ))}
      </select>
      <span>of {totalPages}</span>
      <button onClick={goToNextPage} disabled={currentPage === totalPages}>
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
