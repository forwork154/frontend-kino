import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { PaymentLayout } from '../../components/layouts';
import { isRequestPending, isRequestSuccess, isRequestError, getErrorMessage } from '../../utils/store';
import { setLoaded, setFail, submitPayment2FA } from '../../actions/payment2FA';

import { Payment2FAView } from './View';

export const Payment2FA = () => {
  const dispatch = useDispatch();

  const {
    isLoading,
    isLoaded,
    isError,
    errorMessage,
    socket,
    isPaymentDataLoaded,
    paymentType,
  } = useSelector(({ paymentData, payment2FA, socket }) => ({
    isLoading: isRequestPending(payment2FA.request),
    isLoaded: isRequestSuccess(payment2FA.request),
    isError: isRequestError(payment2FA.request),
    errorMessage: getErrorMessage(payment2FA.request),
    isPaymentDataLoaded: isRequestSuccess(paymentData.request),
    paymentType: paymentData?.data?.type,
    socket,
  }));

  useEffect(() => {
    if (socket) {
      socket.on('PAYMENT_2FA_GOOD', () => {
        dispatch(setLoaded());
      });

      socket.on('PAYMENT_2FA_BAD', () => {
        dispatch(setFail('Es wurde keine Bestätigung gefunden. versuchen Sie es nochmal.'));
      });
    }
  }, [socket]);

  const onSubmit = async (e) => {
    e.preventDefault();

    await dispatch(submitPayment2FA());
  };

  if (!isPaymentDataLoaded || paymentType !== '2FA') {
    return null;
  }

  return (
    <PaymentLayout cardVisible={!isLoaded}>
      <form onSubmit={onSubmit}>
        <Payment2FAView loading={isLoading} loaded={isLoaded} error={isError} errorMessage={errorMessage} />
      </form>
    </PaymentLayout>
  );
};
