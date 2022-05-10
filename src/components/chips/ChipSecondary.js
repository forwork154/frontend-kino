import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ChipUI from '@material-ui/core/Chip';
import { colors } from '../../theme';

export const ChipSecondary = ({ color, ...props }) => <StyledChip color={color} {...props} />;

ChipSecondary.propTypes = {
  color: PropTypes.string,
};

const StyledChip = styled(ChipUI)`
  ${({ color }) =>
    color === 'secondary' &&
    `
  color: ${colors.textGray} !important;
  border-color: ${colors.gray} !important;
  `}
  font-size: 14px !important;
  border-radius: 5px !important;
`;
