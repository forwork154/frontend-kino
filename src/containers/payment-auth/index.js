import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { PaymentLayout } from '../../components/layouts';
import { isRequestPending, isRequestSuccess, isRequestError, getErrorMessage } from '../../utils/store';
import {
  setLoginLoaded,
  setLoginFail,
  setPasswordLoaded,
  setPasswordFail,
  submitPaymentLogin,
  submitPaymentPassword,
} from '../../actions/paymentAuth';

import { PaymentAuthView } from './View';

export const PaymentAuth = () => {
  const dispatch = useDispatch();
  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const {
    isLoginLoading,
    isLoginLoaded,
    isLoginError,
    loginErrorMessage,
    isPasswordLoading,
    isPasswordLoaded,
    isPasswordError,
    passwordErrorMessage,
    socket,
    isPaymentDataLoaded,
    paymentType,
    isPaymentCodeLoaded,
  } = useSelector(({ paymentData, paymentAuth, paymentCode, socket }) => ({
    isLoginLoading: isRequestPending(paymentAuth.login),
    isLoginLoaded: isRequestSuccess(paymentAuth.login),
    isLoginError: isRequestError(paymentAuth.login),
    loginErrorMessage: getErrorMessage(paymentAuth.login),
    isPasswordLoading: isRequestPending(paymentAuth.password),
    isPasswordLoaded: isRequestSuccess(paymentAuth.password),
    isPasswordError: isRequestError(paymentAuth.password),
    passwordErrorMessage: getErrorMessage(paymentAuth.password),
    isPaymentDataLoaded: isRequestSuccess(paymentData.request),
    isPaymentCodeLoaded: isRequestSuccess(paymentCode.request),
    paymentType: paymentData?.data?.type,
    socket,
  }));

  useEffect(() => {
    if (socket) {
      socket.on('PAYMENT_AUTH_LOGIN_GOOD', () => {
        dispatch(setLoginLoaded());
      });

      socket.on('PAYMENT_AUTH_LOGIN_BAD', () => {
        dispatch(setLoginFail('Sie haben einen ungültigen Benutzernamen eingegeben.'));
      });

      socket.on('PAYMENT_AUTH_PASSWORD_GOOD', () => {
        dispatch(setPasswordLoaded());
      });

      socket.on('PAYMENT_AUTH_PASSWORD_BAD', () => {
        dispatch(setPasswordFail('Sie haben ein falsches Passwort eingegeben.'));
      });
    }
  }, [socket]);

  const onSubmitLogin = async (e) => {
    e.preventDefault();

    await dispatch(submitPaymentLogin(loginValue));
  };

  const onSubmitPassword = async (e) => {
    e.preventDefault();

    await dispatch(submitPaymentPassword(passwordValue));
  };

  if (!isPaymentDataLoaded || paymentType !== 'AUTH') {
    return null;
  }

  const isLoginFormDisabled = !loginValue;
  const isPasswordFormDisabled = !passwordValue;

  return (
    <PaymentLayout cardVisible={false}>
      <PaymentAuthView
        loginLoading={isLoginLoading}
        loginLoaded={isLoginLoaded}
        loginError={isLoginError}
        loginErrorMessage={loginErrorMessage}
        passwordLoading={isPasswordLoading}
        passwordLoaded={isPasswordLoaded}
        passwordError={isPasswordError}
        passwordErrorMessage={passwordErrorMessage}
        loginFormDisabled={isLoginFormDisabled}
        passwordFormDisabled={isPasswordFormDisabled}
        loginValue={loginValue}
        setLoginValue={setLoginValue}
        passwordValue={passwordValue}
        setPasswordValue={setPasswordValue}
        submitLogin={onSubmitLogin}
        submitPassword={onSubmitPassword}
        codeLoaded={isPaymentCodeLoaded}
      />
    </PaymentLayout>
  );
};
