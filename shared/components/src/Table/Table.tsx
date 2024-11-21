import { createContext, ReactNode, useContext } from 'react';
import TableComponent, { TableContainer } from './Table.css';
import { TableProps } from './Table.types';
import { TableBody } from './TableBody';
import { TableCell } from './TableCell';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';


const TableContext = createContext<TableProps<unknown> | undefined>(undefined);

export const TableProvider = <T,>({
  children,
  value,
}: {
  children: ReactNode;
  value: TableProps<T>;
}) => {
  return (
    <TableContext.Provider value={value as TableProps<unknown>}>
      {children}
    </TableContext.Provider>
  );
};

export const Table = <T extends unknown>({
  columns,
  data,
  renderRow,
  className,
}: TableProps<T>) => {
  const tableClassName = className ? `${className}-table` : 'table';

  return (
    <TableProvider value={{ columns, data, renderRow }}>
      <TableContainer>
      <TableComponent className={tableClassName}>
        <TableHeader />
        <TableBody />
      </TableComponent>
      </TableContainer>
    </TableProvider>
  );
};

export const useTableValue = () => {
  const value = useContext(TableContext);

  if (!value) {
    throw new Error('useTableValue must be used within a Table component');
  }

  return value;
};

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;
Table.Cell = TableCell;
