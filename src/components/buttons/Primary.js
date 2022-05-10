import React from 'react';
import styled from 'styled-components';

import Button from '@material-ui/core/Button';

import { sizes } from '../../theme';

export const ButtonPrimary = ({ ...props }) => <StyledButtonPrimary {...props} />;

const StyledButtonPrimary = styled(Button)`
  && {
    min-width: max-content;
  }
  & .MuiButton-label {
    white-space: nowrap;
    font-weight: 400;
    text-transform: none;
    font-size: ${sizes.font.default};
  }
`;
