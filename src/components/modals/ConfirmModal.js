/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Dialog from '@material-ui/core/Dialog';
import DialogActionsComponent from '@material-ui/core/DialogActions';
import DialogContentComponent from '@material-ui/core/DialogContent';
import DialogContentTextComponent from '@material-ui/core/DialogContentText';
import DialogTitleComponent from '@material-ui/core/DialogTitle';

import { ButtonDanger, ButtonPrimary } from '../buttons';
import { colors, spacing } from '../../theme';
import { Text } from '../index';

export const ConfirmModal = ({ children, caption, action, actionTid }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAction = () => {
    handleClose();
    action();
  };

  return (
    <React.Fragment>
      <div onClick={handleClickOpen}>{children}</div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <Text tid="MODAL.CONFIRM.TITLE" />
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Text tid={caption} />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <ButtonPrimary onClick={handleClose} color="primary" variant="outlined">
            <Text tid="MODAL.CONFIRM.BUTTON_NOT_AGREE" />
          </ButtonPrimary>
          <ButtonDanger onClick={handleAction} color="primary" variant="outlined" autoFocus>
            <Text tid={actionTid} />
          </ButtonDanger>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

ConfirmModal.propTypes = {
  children: PropTypes.node,
  caption: PropTypes.string,
  action: PropTypes.func,
  actionTid: PropTypes.string,
};

const DialogTitle = styled(DialogTitleComponent)`
  && {
    background-color: rgba(0, 0, 0, 0.05);
    border-bottom: 1px solid ${colors.border};
    color: ${colors.textPrimary};
    font-weight: 600;
  }
`;
const DialogContentText = styled(DialogContentTextComponent)`
  && {
    margin: ${spacing(3)} 0;
    color: ${colors.textPrimary};
  }
`;
const DialogContent = styled(DialogContentComponent)`
  && {
    border-bottom: 1px solid ${colors.border};
  }
`;
const DialogActions = styled(DialogActionsComponent)`
  && {
    padding: ${spacing(3)} ${spacing(6)};
  }
`;
