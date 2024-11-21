export interface TableCellProps {
  children: React.ReactNode;
  header?: boolean;
}

export const TableCell = ({ children, header }: TableCellProps) => {
  const TableCell = header ? 'th' : 'td';

  return <TableCell>{children}</TableCell>;
};
