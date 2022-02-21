import React, { useMemo, useEffect, useState } from "react";

function Pagination({ totalData = 8, perPage = 8, page = 1, onPageChange }) {
  const [paginationList, setPaginationList] = useState([]);
  const total = useMemo(
    () => getPagination(totalData, perPage),
    [perPage, totalData]
  );

  useEffect(() => {
    if (total > 5) {
      setPaginationList([...new Array(5)]);
    } else {
      setPaginationList([...new Array(total)]);
    }
  }, [total]);

  return (
    <div className="d-flex" data-testid="pagination">
      {
        <div
          className={`custom-pagination ${page > 1 ? "active" : ""}`}
          onClick={() => {
            if (page > 1) {
              onPageChange(page - 1);
            }
          }}
          data-testid="previous-page"
        >
          <span className="material-icons">chevron_left</span>
        </div>
      }
      {[...paginationList].map((i, key) => (
        <PaginationComponent
          index={key}
          className={`custom-pagination ${page == key + 1 ? "active" : ""} ${
            page > 5 && key + 1 == 5 ? "active" : ""
          }`}
          key={key}
          page={page > 5 && key + 1 == 5 ? page : key + 1}
          onClick={() => {
            if (page > 5 && key + 1 == 5) {
            } else {
              onPageChange(key + 1);
            }
          }}
        />
      ))}

      <div
        className={`custom-pagination ${page < total ? "active" : ""}`}
        onClick={() => {
          if (page < total) {
            onPageChange(page + 1);
          }
        }}
        data-testid="next-page"
      >
        <span className="material-icons">navigate_next</span>
      </div>
    </div>
  );
}

export default Pagination;

function getPagination(totalData, perPage) {
  let total = Math.ceil(totalData / perPage);
  return total;
}

function PaginationComponent({ className, onClick, page, index }) {
  return (
    <div
      className={className}
      onClick={onClick}
      data-testid={`pagination-component-${index}`}
    >
      <span>{page}</span>
    </div>
  );
}
