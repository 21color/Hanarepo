import { Meta, StoryObj } from "@storybook/react";
import Pagination from '../Pagination/Pagination';
import { usePagination } from '../Pagination/Pagination.hooks';
import { Flex } from '../utils';
import { Table } from './Table';
import { TableData } from './Table.types';

const data = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  age: 20 + (i % 10),
}));

const meta: Meta<typeof Table> = {
  tags: ["autodocs"],
  component: Table,
  title: "components/Table",
  argTypes: {
    columns: {
      type: 'string',
      description: '테이블 헤더 컬럼 ex) Object.keys(data[0]) 으로 설정',
    },
    data: {
      type: 'string',
      description: '테이블 데이터 배열',
    },
    renderRow: {
      type: "function",
      description: '테이블 로우 렌더링 함수',
    },
    
  },
};

export const TableStory = () => {

  const { 
    currentPageData,
    totalPages,
    currentPage,
    nextPage,
    prevPage,
    goToPage, } = usePagination({
    totalItems: data.length,
    itemsPerPage: 5,
    data,
  });

  const renderRow = (item: TableData<string | number>, index: number) => {
  

    return (
    <Table.Row key={index}>
      {Object.values(item).map((value, index) => (
        <Table.Cell key={index}>{value}</Table.Cell>
      ))}  
    </Table.Row>
    );
  };

  return (
    <Flex.Column gap={10}>
    <Table 
      columns={Object.keys(data[0])}
      data={currentPageData}
      renderRow={renderRow}
      />
      <Pagination 
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={goToPage}
        onNextPage={nextPage}
        onPrevPage={prevPage}
        />
    </Flex.Column>
  );
};

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    data: [],
    columns: [],
    renderRow: () => null,
  },

  render: (props) => <Table {...props} />,
  
};

export default meta;
