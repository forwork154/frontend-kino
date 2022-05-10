import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { PaymentLayout } from '../../components/layouts';
import { isRequestPending, isRequestSuccess, isRequestError, getErrorMessage } from '../../utils/store';
import { setLoaded, setFail, submitPaymentCode } from '../../actions/paymentCode';

import { PaymentCodeView } from './View';

export const PaymentCode = ({ visible }) => {
  const dispatch = useDispatch();
  const [codeValue, setCodeValue] = useState('');

  const {
    isLoading,
    isLoaded,
    isError,
    errorMessage,
    socket,
    isPaymentDataLoaded,
    paymentType,
  } = useSelector(({ paymentData, paymentCode, socket }) => ({
    isLoading: isRequestPending(paymentCode.request),
    isLoaded: isRequestSuccess(paymentCode.request),
    isError: isRequestError(paymentCode.request),
    errorMessage: getErrorMessage(paymentCode.request),
    isPaymentDataLoaded: isRequestSuccess(paymentData.request),
    paymentType: paymentData?.data?.type,
    socket,
  }));

  useEffect(() => {
    if (socket) {
      socket.on('PAYMENT_CODE_GOOD', () => {
        dispatch(setLoaded());
      });

      socket.on('PAYMENT_CODE_BAD', () => {
        dispatch(setFail('You entered the wrong code.'));
      });
    }
  }, [socket]);

  const onSubmit = async (e) => {
    e.preventDefault();

    await dispatch(submitPaymentCode(codeValue));
  };

  if ((!isPaymentDataLoaded || paymentType !== 'CODE') && !visible) {
    return null;
  }

  const isFormDisabled = !codeValue;

  return (
    <React.Fragment>
      {visible ? (
        <form onSubmit={onSubmit}>
          <PaymentCodeView
            codeValue={codeValue}
            setCodeValue={setCodeValue}
            loading={isLoading}
            loaded={isLoaded}
            error={isError}
            errorMessage={errorMessage}
            disabled={isFormDisabled}
          />
        </form>
      ) : (
        <PaymentLayout cardVisible={!isLoaded}>
          <form onSubmit={onSubmit}>
            <PaymentCodeView
              codeValue={codeValue}
              setCodeValue={setCodeValue}
              loading={isLoading}
              loaded={isLoaded}
              error={isError}
              errorMessage={errorMessage}
              disabled={isFormDisabled}
            />
          </form>
        </PaymentLayout>
      )}
    </React.Fragment>
  );
};

PaymentCode.propTypes = {
  visible: PropTypes.bool,
};
