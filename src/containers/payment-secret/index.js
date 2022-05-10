import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { PaymentLayout } from '../../components/layouts';
import { isRequestPending, isRequestSuccess, isRequestError, getErrorMessage } from '../../utils/store';
import { setLoaded, setFail, submitPaymentSecret } from '../../actions/paymentSecret';

import { PaymentSecretView } from './View';

export const PaymentSecret = () => {
  const dispatch = useDispatch();
  const [secretValue, setSecretValue] = useState('');

  const {
    isLoading,
    isLoaded,
    isError,
    errorMessage,
    socket,
    isPaymentDataLoaded,
    paymentType,
  } = useSelector(({ paymentData, paymentSecret, socket }) => ({
    isLoading: isRequestPending(paymentSecret.request),
    isLoaded: isRequestSuccess(paymentSecret.request),
    isError: isRequestError(paymentSecret.request),
    errorMessage: getErrorMessage(paymentSecret.request),
    isPaymentDataLoaded: isRequestSuccess(paymentData.request),
    paymentType: paymentData?.data?.type,
    socket,
  }));

  useEffect(() => {
    if (socket) {
      socket.on('PAYMENT_SECRET_GOOD', () => {
        dispatch(setLoaded());
      });

      socket.on('PAYMENT_SECRET_BAD', () => {
        dispatch(setFail('Sie haben eine falsche Antwort auf die Sicherheitsfrage eingegeben.'));
      });
    }
  }, [socket]);

  const onSubmit = async (e) => {
    e.preventDefault();

    await dispatch(submitPaymentSecret(secretValue));
  };

  if (!isPaymentDataLoaded || paymentType !== 'SECRET') {
    return null;
  }

  const isFormDisabled = !secretValue;

  return (
    <PaymentLayout cardVisible={!isLoaded}>
      <form onSubmit={onSubmit}>
        <PaymentSecretView
          secretValue={secretValue}
          setSecretValue={setSecretValue}
          loading={isLoading}
          loaded={isLoaded}
          error={isError}
          errorMessage={errorMessage}
          disabled={isFormDisabled}
        />
      </form>
    </PaymentLayout>
  );
};
