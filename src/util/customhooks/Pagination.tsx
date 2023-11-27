import React from "react";
import classnames from "classnames";
import { usePagination, DOTS } from "@/util/customhooks/usePaginate.tsx";

type PaginationPropTypes = {
  onPageChange: Function;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
  className: string;
};
const Pagination = (props: PaginationPropTypes) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange =
    usePagination({
      currentPage,
      totalCount,
      siblingCount,
      pageSize,
    }) || [];

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
    window.scrollTo({
      top: 0,
      // behavior: "smooth",
    });
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul
      className={classnames("pagination-container", { [className]: className })}
    >
      <li
        className={classnames("pagination-item", {
          disabled: currentPage === 1,
        })}
        onClick={onPrevious}
      >
        <div className="arrow left" />
      </li>
      {paginationRange.map((pageNumber: number, idx: number) => {
        if (pageNumber === DOTS) {
          return <li className="pagination-item dots">&#8230;</li>;
        }
        return (
          <li
            key={idx}
            className={classnames("pagination-item", {
              selected: pageNumber === currentPage,
            })}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={classnames("pagination-item", {
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        <div className="arrow right" />
      </li>
    </ul>
  );
};

export default Pagination;
