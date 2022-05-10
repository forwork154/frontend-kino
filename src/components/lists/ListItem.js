import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import ListItemUi from '@material-ui/core/ListItem';

import { sizes } from '../../theme';

export const ListItem = ({ indent = true, offset = 'small', divider = true, ...props }) => (
  <StyledListItem indent={indent ? 1 : 0} divider={divider} offset={offset ? 1 : 0} {...props} />
);

ListItem.propTypes = {
  indent: PropTypes.bool,
  divider: PropTypes.bool,
  offset: PropTypes.string,
};

const StyledListItem = styled(ListItemUi)`
  ${({ divider }) =>
    divider &&
    css`
      &:first-of-type {
        border-top: none !important;
      }
      border-top: 1px solid rgba(224, 224, 224, 1) !important;
      border-bottom: 0px solid transparent !important;
    `}

  && {
    padding-top: ${({ offset }) => sizes.indent[offset]};
    padding-bottom: ${({ offset }) => sizes.indent[offset]};
    padding-left: ${({ indent }) => (indent ? sizes.indent.default : 0)};
    padding-right: ${({ indent }) => (indent ? sizes.indent.default : 0)};
  }
`;
