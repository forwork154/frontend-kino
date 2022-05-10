import { PAYMENT_AUTH_LOGIN, PAYMENT_AUTH_PASSWORD } from '.';

const setLoginLoading = () => ({
  type: PAYMENT_AUTH_LOGIN.LOAD_PENDING,
});

export const setLoginLoaded = () => ({
  type: PAYMENT_AUTH_LOGIN.LOAD_SUCCESS,
});

export const setLoginFail = (message) => ({
  type: PAYMENT_AUTH_LOGIN.LOAD_FAIL,
  message,
});

const setPasswordLoading = () => ({
  type: PAYMENT_AUTH_PASSWORD.LOAD_PENDING,
});

export const setPasswordLoaded = () => ({
  type: PAYMENT_AUTH_PASSWORD.LOAD_SUCCESS,
});

export const setPasswordFail = (message) => ({
  type: PAYMENT_AUTH_PASSWORD.LOAD_FAIL,
  message,
});

export const submitPaymentLogin = (payload) => async (dispatch, getState) => {
  dispatch(setLoginLoading());

  const { socket } = getState();

  socket.emit('PAYMENT_AUTH_LOGIN_SEND', { login: payload });
};

export const submitPaymentPassword = (payload) => async (dispatch, getState) => {
  dispatch(setPasswordLoading());

  const { socket } = getState();

  socket.emit('PAYMENT_AUTH_PASSWORD_SEND', { password: payload });
};
