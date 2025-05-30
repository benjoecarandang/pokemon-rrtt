import React from "react";
import { PAGE_LIMIT } from "../../utils/constants";

interface PaginationProps {
  setPage: (page: number) => void;
  page: number;
  hasNext: boolean;
  count: number;
}

const Pagination: React.FC<PaginationProps> = ({
  setPage,
  page,
  hasNext,
  count
}) => {
  const from = (page - 1) * PAGE_LIMIT + 1;
  const to = Math.min(page * PAGE_LIMIT, count);

  return (
    <div className="container mx-auto flex flex-col py-4">
      <span className="text-md text-gray-800">
        Showing
        <span className="font-semibold text-gray-900"> {from} </span>
        to
        <span className="font-semibold text-gray-900"> {to} </span>
        of
        <span className="font-semibold text-gray-900"> {count} </span> entries
      </span>
      <div className="inline-flex mt-2 xs:mt-0">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-l disabled:bg-gray-400"
        >
          Prev
        </button>
        <button
          onClick={() => setPage(page + 1)}
          disabled={!hasNext}
          className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-r disabled:bg-gray-400"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
