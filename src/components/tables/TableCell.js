import styled from 'styled-components';

import TableCellUi from '@material-ui/core/TableCell';
import { sizes, colors } from '../../theme';

export const TableCell = styled(TableCellUi)`
  && {
    color: ${(p) => (p.title ? colors.textGray : colors.textPrimary)};
    font-size: ${sizes.small};
    padding: ${sizes.indent.small} ${sizes.indent.default};
    border-bottom: none;
    border-top: ${(p) => (p.title ? 'none' : ' 1px solid rgba(224, 224, 224, 1)')};
  }
`;
