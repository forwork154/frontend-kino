import React from 'react';
import styled from 'styled-components';

import TablePaginationUi from '@material-ui/core/TablePagination';
import { sizes } from '../../theme';

export const TablePagination = ({ ...props }) => (
  <TablePaginationStyled
    labelDisplayedRows={({ from, to, count }) => {
      return `${from}-${to === -1 ? count : to} / ${count !== -1 ? count : `more than ${to}`}`;
    }}
    {...props}
  />
);

export const TablePaginationStyled = styled(TablePaginationUi)`
  && {
    padding: ${sizes.indent.small} ${sizes.indent.default};
    border-bottom: none;
    border-top: ${(p) => (p.title ? 'none' : ' 1px solid rgba(224, 224, 224, 1)')};
    width: 100%;
  }
`;
