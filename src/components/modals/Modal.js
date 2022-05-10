import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Dialog from '@material-ui/core/Dialog';

export const Modal = ({ fullScreen, children, ...props }) => (
  <StyledDialog fullScreen={fullScreen} {...props}>
    {children}
  </StyledDialog>
);

const StyledDialog = styled(Dialog)`
  && {
    .MuiDialog-paper {
      background-color: rgba(0, 0, 0, 0.44);
    }
  }
`;

Modal.propTypes = {
  fullScreen: PropTypes.bool,
  children: PropTypes.node,
};
