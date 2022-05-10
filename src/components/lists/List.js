import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import ListUi from '@material-ui/core/List';

export const List = ({ divider, ...props }) => <StyledList divider={divider ? 1 : 0} {...props} />;

const StyledList = styled(ListUi)`
  && {
    width: 100%;
    padding-top: 0;
    padding-bottom: 0;

    li {
      &:first-of-type {
        border-top: none !important;
      }

      ${({ divider }) =>
        divider &&
        css`
          border-top: 1px solid rgba(224, 224, 224, 1) !important;
        `}

      border-bottom: 0px solid transparent !important;
    }
  }
`;

List.propTypes = {
  divider: PropTypes.bool,
};
