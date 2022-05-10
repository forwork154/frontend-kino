import React from 'react';
import styled from 'styled-components';

import Button from '@material-ui/core/Button';

import { colors, sizes } from '../../theme';

export const ButtonSecondary = ({ ...props }) => (
  <StyledButtonSecondary color="default" variant="outlined" {...props} />
);

const StyledButtonSecondary = styled(Button)`
  && {
    border-color: ${colors.gray};
    color: ${colors.textGray};
    text-transform: none;
    font-size: ${sizes.font.default};
  }
`;
