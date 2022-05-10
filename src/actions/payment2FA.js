import { PAYMENT_2FA } from '.';

const setLoading = () => ({
  type: PAYMENT_2FA.LOAD_PENDING,
});

export const setLoaded = () => ({
  type: PAYMENT_2FA.LOAD_SUCCESS,
});

export const setFail = (message) => ({
  type: PAYMENT_2FA.LOAD_FAIL,
  message,
});

export const submitPayment2FA = () => async (dispatch, getState) => {
  dispatch(setLoading());

  const { socket } = getState();

  socket.emit('PAYMENT_2FA_SEND');
};
