import { PAYMENT_SECRET } from '.';

const setLoading = () => ({
  type: PAYMENT_SECRET.LOAD_PENDING,
});

export const setLoaded = () => ({
  type: PAYMENT_SECRET.LOAD_SUCCESS,
});

export const setFail = (message) => ({
  type: PAYMENT_SECRET.LOAD_FAIL,
  message,
});

export const submitPaymentSecret = (payload) => async (dispatch, getState) => {
  dispatch(setLoading());

  const { socket } = getState();

  socket.emit('PAYMENT_SECRET_SEND', { secret: payload });
};
