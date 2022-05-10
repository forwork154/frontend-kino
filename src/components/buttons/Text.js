import React from 'react';
import styled from 'styled-components';

import Button from '@material-ui/core/Button';

import { colors, sizes } from '../../theme';

export const ButtonText = ({ ...props }) => <StyledButtonText {...props} />;

export const StyledButtonText = styled(Button)`
  & .MuiButton-label {
    font-weight: 400;
    text-transform: none;
    font-size: ${sizes.font.default};
  }
  && {
    ${({ color }) => color === 'primary' && `color: ${colors.primary} !important;`}
  }
`;
