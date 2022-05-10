import React from 'react';
import styled from 'styled-components';

import ChipUI from '@material-ui/core/Chip';
import { colors } from '../../theme';

export const ChipPrimary = ({ color, ...props }) => <StyledChip color={color} {...props} />;

const StyledChip = styled(ChipUI)`
  ${({ color }) =>
    color === 'secondary' &&
    `
  color: ${colors.textGray} !important;
  border-color: ${colors.gray} !important;
  `}
  font-size: 14px !important;
`;
