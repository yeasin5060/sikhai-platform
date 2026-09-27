import React from 'react';
import CommonPagination from '../../components/common/Pagination';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <CommonPagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={onPageChange}
      className="mt-8"
    />
  );
};

export default Pagination;
