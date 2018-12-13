import React from "react";
import "../assets/PaginationLinks.css";

const PaginationLinks = ({
  pageCount,
  handlePageSelect,
  selectedPage,
  handlePrevious,
  handleNext,
  firstPage,
  lastPage
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
        <span onClick={handlePrevious(selectedPage)} className={firstPage ? "hide-button" : undefined} >previous</span>
        {pageItems}
        <span onClick={handleNext(selectedPage)} className={lastPage ? "hide-button" : undefined} >next</span>
      </div>
    </div>
  );
};

export default PaginationLinks;
