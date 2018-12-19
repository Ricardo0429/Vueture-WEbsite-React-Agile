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
        <div onClick={handlePageSelect(selectedPage - 1)} className={firstPage ? "hide-button" : undefined} >previous</div>
        {pageItems}
        <div onClick={handlePageSelect(selectedPage + 1)} className={lastPage ? "hide-button" : undefined} >next</div>
      </div>
    </div>
  );
};

export default PaginationLinks;