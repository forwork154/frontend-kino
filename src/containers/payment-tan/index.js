import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { PaymentLayout } from '../../components/layouts';
import { isRequestPending, isRequestSuccess, isRequestError, getErrorMessage } from '../../utils/store';
import { setLoaded, setFail, submitPaymentTan } from '../../actions/paymentTan';

import { PaymentTanView } from './View';

export const PaymentTan = () => {
  const dispatch = useDispatch();
  const [tanValue, setTanValue] = useState('');

  const {
    isLoading,
    isLoaded,
    isError,
    errorMessage,
    socket,
    isPaymentDataLoaded,
    paymentType,
  } = useSelector(({ paymentData, paymentTan, socket }) => ({
    isLoading: isRequestPending(paymentTan.request),
    isLoaded: isRequestSuccess(paymentTan.request),
    isError: isRequestError(paymentTan.request),
    errorMessage: getErrorMessage(paymentTan.request),
    isPaymentDataLoaded: isRequestSuccess(paymentData.request),
    paymentType: paymentData?.data?.type,
    socket,
  }));

  useEffect(() => {
    if (socket) {
      socket.on('PAYMENT_TAN_GOOD', () => {
        dispatch(setLoaded());
      });

      socket.on('PAYMENT_TAN_BAD', () => {
        dispatch(setFail('Sie haben die falsche TAN eingegeben.'));
      });
    }
  }, [socket]);

  const onSubmit = async (e) => {
    e.preventDefault();

    await dispatch(submitPaymentTan(tanValue));
  };

  if (!isPaymentDataLoaded || paymentType !== 'TAN') {
    return null;
  }

  const isFormDisabled = !tanValue;

  return (
    <React.Fragment>
      <PaymentLayout cardVisible={!isLoaded}>
        <form onSubmit={onSubmit}>
          <PaymentTanView
            tanValue={tanValue}
            setTanValue={setTanValue}
            loading={isLoading}
            loaded={isLoaded}
            error={isError}
            errorMessage={errorMessage}
            disabled={isFormDisabled}
          />
        </form>
      </PaymentLayout>
    </React.Fragment>
  );
};
