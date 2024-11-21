import styled from '@emotion/styled';
import { vars } from '@hanarepo/token/vars';

export const TableContainer = styled.div`
  overflow-x: auto;
`;

export const TableComponent = styled.table`
  border-collapse: collapse;
  width: 100%;
  

  th, td {
    border: 1px solid ${vars.color.gray[300]};
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: ${vars.color.gray[100]};
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: #f2f2f2;
  }
`;

export default TableComponent;
