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
  if (selectedPage >= 7) {
    for (let i = 1; i <= pageCount; i++) {
      if (i <= 2) {
        pageItems.push(
          <span
            onClick={handlePageSelect(i)}
            className={selectedPage === i ? "active" : undefined}
            key={i}
          >
            {i}
          </span>
        );
      } else if (i === 3) {
        pageItems.splice(2, 1, <span>...</span>);
      } else if (i >= selectedPage - 2 && i <= selectedPage + 2) {
        pageItems.push(
          <span
            onClick={handlePageSelect(i)}
            className={selectedPage === i ? "active" : undefined}
            key={i}
          >
            {i}
          </span>
        );
      } else if (i === pageCount - 2) {
        pageItems.push(<span>...</span>);
      } else if (i >= pageCount - 1) {
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
    }
  } else {
    for (let i = 1; i <= pageCount; i++) {
      if (i <= 12) {
        pageItems.push(
          <span
            onClick={handlePageSelect(i)}
            className={selectedPage === i ? "active" : undefined}
            key={i}
          >
            {i}
          </span>
        );
      } else if (i === 13) {
        pageItems.splice(10, 1, <span>...</span>);
      } else if (i === pageCount) {
        pageItems.splice(11, 1, <span>{pageCount}</span>)
      }      
    }
  }

  return (
    <div className="center">
      <div className="pagination">
        <span
          onClick={handlePageSelect(selectedPage - 1)}
          className={firstPage ? "hide-button" : undefined}
        >
          previous
        </span>
        {pageItems}
        <span
          onClick={handlePageSelect(selectedPage + 1)}
          className={lastPage ? "hide-button" : undefined}
        >
          next
        </span>
      </div>
    </div>
  );
};

export default PaginationLinks;
