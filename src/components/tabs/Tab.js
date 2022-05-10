import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import MuiTab from '@material-ui/core/Tab';

import { sizes, spacing, colors } from '../../theme';

export const Tab = ({ active, ...props }) => <StyledTab active={active ? 1 : 0} {...props} />;

Tab.propTypes = {
  active: PropTypes.bool,
};

const StyledTab = styled(MuiTab)`
  .MuiTab-wrapper {
    text-transform: none;
    cursor: pointer !important;
    font-size: 16px;
    color: ${({ active }) => (active ? colors.primary : colors.textPrimary)};
    transition: opacity ${sizes.transition.hover};
    padding: ${({ indent, offset }) =>
      `${sizes.indent[indent] || spacing(2)} ${sizes.indent[offset] || sizes.indent.small}`};

    ${({ active }) =>
      active &&
      css`
        &:hover {
          opacity: ${sizes.opacity.hover};
        }
      `}
  }
`;
