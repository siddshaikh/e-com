import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./pagination.css";
const Pagination = ({ pageValue, totalPages, selectPageHandler }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination">
      <button
        onClick={() => selectPageHandler(pageValue - 1)}
        disabled={pageValue === 1}
        className="prev-next"
      >
        <FaChevronLeft />
      </button>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => selectPageHandler(page)}
          className={`all-tabs ${page === pageValue ? "active" : ""}`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => selectPageHandler(pageValue + 1)}
        disabled={pageValue === 12}
        className="prev-next"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
