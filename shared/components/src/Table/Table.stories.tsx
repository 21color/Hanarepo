import { Meta, StoryObj } from "@storybook/react";
import { Table } from './Table';
import { TableData } from './Table.types';

const tableDummyData = [
  {
    name: 'John Doe',
    age: 30,
    job: 'Software Engineer',
  },
  {
    name: 'Jane Doe',
    age: 25,
    job: 'Designer',
  },
  {
    name: 'James Smith',
    age: 35,
    job: 'Product Manager',
  },
];

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
    <Table 
      columns={Object.keys(tableDummyData[0])}
      data={tableDummyData}
      renderRow={renderRow}
    />
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
