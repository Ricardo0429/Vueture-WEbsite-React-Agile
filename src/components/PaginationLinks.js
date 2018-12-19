import React from "react";
import "../assets/PaginationLinks.css";

const PaginationLinks = ({
  pageCount,
  handlePageSelect,
  selectedPage,
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
        <span onClick={handlePageSelect(selectedPage - 1)} className={firstPage ? "hide-button" : undefined} >previous</span>
        {pageItems}
        <span onClick={handlePageSelect(selectedPage + 1)} className={lastPage ? "hide-button" : undefined} >next</span>
      </div>
    </div>
  );
};

export default PaginationLinks;