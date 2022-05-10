import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPaymentSupportInvisible } from '../../actions/paymentSupport';

import { Modal } from '../../components/modals';
import { PaymentSupportView } from './View';

export const PaymentSupport = () => {
  const dispatch = useDispatch();
  const { visible } = useSelector(({ paymentSupport: { data } }) => ({
    visible: data.visible,
  }));

  const handleClose = () => {
    dispatch(setPaymentSupportInvisible());
  };

  return (
    <Modal open={visible}>
      <PaymentSupportView handleClose={handleClose} />
    </Modal>
  );
};
