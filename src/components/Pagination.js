import React from 'react';
import './Pagination.css'; // Optional for styling

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Define the number of pages to show before and after the current page
  const pagesToShow = 2; // Number of pages to show before and after the current page

  const pageNumbers = [];

  // Always show the first page
  pageNumbers.push(1);

  // Add ellipsis if the gap before the current page is large
  if (currentPage - pagesToShow > 3) {
    pageNumbers.push('...');
  }

  // Add pages around the current page
  for (let i = Math.max(currentPage - pagesToShow, 2); i <= Math.min(currentPage + pagesToShow, totalPages - 1); i++) {
    if (!pageNumbers.includes(i)) {
      pageNumbers.push(i);
    }
  }

  // Add ellipsis if the gap after the current page is large
  if (totalPages - currentPage > pagesToShow + 1) {
    pageNumbers.push('...');
  }

  // Always show the last page
  if (totalPages > 1 && pageNumbers[pageNumbers.length - 1] !== totalPages) {
    pageNumbers.push(totalPages);
  }

  // Calculate the range of items being displayed
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage + 1; // Adjust to show first item correctly
  const itemRange = `${indexOfFirstItem}-${Math.min(indexOfLastItem, totalItems)} of ${totalItems}`;

  return (
    <div className="pagination-container">
      {/* Display current item range */}
      <div className="pagination-info">
        <span>{itemRange}</span>
      </div>

      {/* Pagination Controls */}
      <div className="pagination">
        {/* Previous Button */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`pagination-button ${currentPage === 1 ? 'disabled' : ''}`}
        >
          Previous
        </button>

        {/* Page Numbers */}
        {pageNumbers.map((number, index) =>
          number === '...' ? (
            <span key={`ellipsis-${index}`} className="pagination-ellipsis">
              ...
            </span>
          ) : (
            <button
              key={`page-${number}`}  // Ensure the page number has a unique key
              onClick={() => onPageChange(number)}
              className={`pagination-button ${currentPage === number ? 'active' : ''}`}
            >
              {number}
            </button>
          )
        )}

        {/* Next Button */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`pagination-button ${currentPage === totalPages ? 'disabled' : ''}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
