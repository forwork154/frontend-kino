import styled from 'styled-components';

import TableRowUI from '@material-ui/core/TableRow';

export const TableRow = styled(TableRowUI)`
  && {
    &:not(:last-of-type) {
      border-bottom: 0px;
    }
  }
`;
