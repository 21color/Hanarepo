import { useTableValue } from './Table';
import { TableCell } from './TableCell';
import { TableRow } from './TableRow';

export interface TableHeaderProps {
  className?: string;
}

export const TableHeader = ({ className }: TableHeaderProps) => {
  const { columns } = useTableValue();

  return (
    <thead className={className}>
      <TableRow>
        {columns.map((column) => (
          <TableCell key={column} header>
            {column}
          </TableCell>
        ))}
      </TableRow>
    </thead>
  );
};
