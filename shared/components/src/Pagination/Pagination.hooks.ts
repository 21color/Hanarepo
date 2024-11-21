import { useState } from 'react';

interface UsePaginationProps<T> {
  totalItems: number; // 전체 항목 수
  itemsPerPage: number; // 페이지당 항목 수
  maxVisiblePages?: number; // 보여질 페이지 수 (기본 5)
  data: T[]; // 테이블 데이터 배열
};

export function usePagination<T>({
  totalItems,
  itemsPerPage,
  maxVisiblePages = 5,
  data,
}: UsePaginationProps<T>) {

  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const totalPages = Math.ceil(totalItems / itemsPerPage); // 전체 페이지 수

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const nextPage = () => goToPage(currentPage + 1);
  const prevPage = () => goToPage(currentPage - 1);

  const getPages = () => {
    const pages = [];

    const startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    for (let page = startPage; page <= endPage; page++) {
      pages.push(page);
    }

    return pages;
  };

  const currentPageData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return {
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    goToPage,
    getPages,
    currentPageData,
  }

};
