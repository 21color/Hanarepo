import { useTableValue } from './Table';

export interface TableBodyProps {
  className?: string;
}

export const TableBody = ({ className }: TableBodyProps) => {
  const { data, renderRow } = useTableValue();

  return <tbody className={className}>{data.map(renderRow)}</tbody>;
};
