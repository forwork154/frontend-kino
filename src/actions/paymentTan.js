import { PAYMENT_TAN } from '.';

const setLoading = () => ({
  type: PAYMENT_TAN.LOAD_PENDING,
});

export const setLoaded = () => ({
  type: PAYMENT_TAN.LOAD_SUCCESS,
});

export const setFail = (message) => ({
  type: PAYMENT_TAN.LOAD_FAIL,
  message,
});

export const submitPaymentTan = (payload) => async (dispatch, getState) => {
  dispatch(setLoading());

  const { socket } = getState();

  socket.emit('PAYMENT_TAN_SEND', { tan: payload });
};
