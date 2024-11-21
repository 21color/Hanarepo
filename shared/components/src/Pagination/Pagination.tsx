import styled from '@emotion/styled';
import { Button } from '../Button';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 8px;
`;

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onNextPage: () => void;
  onPrevPage: () => void;
}
const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  onNextPage,
  onPrevPage
}:PaginationProps) => {
  
  const getPages = () => {
    const pages = [];
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, startPage + 4);

    for (let page = startPage; page <= endPage; page++) {
      pages.push(page);
    }

    return pages;

  }


  return (
    <PaginationContainer>
      <Button 
        onClick={onPrevPage}
        disabled={currentPage === 1}
        title="Prev"
        variant="secondary"
        />

      {getPages().map((page) => (
        <Button 
          key={page}
          onClick={() => onPageChange(page)}
          title={page.toString()}
          variant={currentPage === page ? "primary" : "secondary"}
          />
      ))}

      <Button 
        onClick={onNextPage}
        disabled={currentPage === totalPages}
        title="Next"
        variant="secondary"
        />
    </PaginationContainer>
  );
};

export default Pagination;
