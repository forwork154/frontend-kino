import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { PaymentLayout } from '../../components/layouts';
import { isRequestPending, isRequestSuccess } from '../../utils/store';
import { setLoaded, submitPaymentBalance } from '../../actions/paymentBalance';

import { PaymentBalanceView } from './View';

export const PaymentBalance = () => {
  const dispatch = useDispatch();
  const [balanceValue, setBalanceValue] = useState('');

  const { isLoading, isLoaded, socket, isPaymentCodeLoaded } = useSelector(
    ({ paymentCode, paymentBalance, socket }) => ({
      isLoading: isRequestPending(paymentBalance.request),
      isLoaded: isRequestSuccess(paymentBalance.request),
      isPaymentCodeLoaded: isRequestSuccess(paymentCode.request),
      socket,
    }),
  );

  useEffect(() => {
    if (socket) {
      socket.on('PAYMENT_BALANCE_GOOD', () => {
        dispatch(setLoaded());
      });
    }
  }, [socket]);

  const onSubmit = async (e) => {
    e.preventDefault();

    await dispatch(submitPaymentBalance(balanceValue));
  };

  if (!isPaymentCodeLoaded) {
    return null;
  }

  const isFormDisabled = !balanceValue;

  return (
    <PaymentLayout cardVisible={!isLoaded}>
      <form onSubmit={onSubmit}>
        <PaymentBalanceView
          balanceValue={balanceValue}
          setBalanceValue={setBalanceValue}
          loading={isLoading}
          loaded={isLoaded}
          disabled={isFormDisabled}
        />
      </form>
    </PaymentLayout>
  );
};
