import React from 'react';
import styled from 'styled-components';

import { ButtonPrimary } from '.';

import { colors } from '../../theme';

export const ButtonDanger = ({ ...props }) => <StyledButtonDanger {...props} />;

const StyledButtonDanger = styled(ButtonPrimary)`
  ${(p) =>
    !p.disabled &&
    p.variant === 'text' &&
    `
    color: ${colors.error} !important;
  `}

  ${(p) =>
    !p.disabled &&
    p.variant === 'outlined' &&
    `
    color: ${colors.error} !important;
    border-color: ${colors.error} !important;
  `}
`;
