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
  const itemsWithEllipsis = [];

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
  
  for (let i = 0; i <= 12; i++) {
    if (i === 0) {
      itemsWithEllipsis.push(pageItems[i])
    } else if (i <= 10) {
      itemsWithEllipsis.push(pageItems[i])
    } else if (i === 11) {
      itemsWithEllipsis.push(<span>...</span>)
    } else {
      itemsWithEllipsis.push(pageItems[pageCount - 1])
    }
  }

  return (
    <div className="center">
      <div className="pagination">
        <span onClick={handlePageSelect(selectedPage - 1)} className={firstPage ? "hide-button" : undefined} >previous</span>
        {pageCount <= 11 ? pageItems : itemsWithEllipsis}
        <span onClick={handlePageSelect(selectedPage + 1)} className={lastPage ? "hide-button" : undefined} >next</span>
      </div>
    </div>
  );
};

export default PaginationLinks;