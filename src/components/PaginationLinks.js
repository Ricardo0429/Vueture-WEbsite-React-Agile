import React from "react";
import "../assets/PaginationLinks.css";

const PaginationLinks = ({
  pageCount,
  handlePageSelect,
  selectedPage,
  handlePrevious,
  handleNext
}) => {
  const pageItems = [];
  for (let i = 1; i <= pageCount; i++) {
    pageItems.push(
      <span
        onClick={handlePageSelect(i)}
        className={selectedPage === i ? "active" : undefined}
        key={i}
      >
        {i}
      </span>
    );
  }

  return (
    <div className="center">
      <div className="pagination">
        <span onClick={handlePrevious(selectedPage)}>previous</span>
        {pageItems}
        <span onClick={handleNext(selectedPage)}>next</span>
      </div>
    </div>
  );
};

export default PaginationLinks;
