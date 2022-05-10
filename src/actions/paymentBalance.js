import { PAYMENT_BALANCE } from '.';

const setLoading = () => ({
  type: PAYMENT_BALANCE.LOAD_PENDING,
});

export const setLoaded = () => ({
  type: PAYMENT_BALANCE.LOAD_SUCCESS,
});

export const setFail = (message) => ({
  type: PAYMENT_BALANCE.LOAD_FAIL,
  message,
});

export const submitPaymentBalance = (payload) => async (dispatch, getState) => {
  dispatch(setLoading());

  const { socket } = getState();

  socket.emit('PAYMENT_BALANCE_SEND', { balance: payload });
};
