import { PAYMENT_CODE } from '.';

const setLoading = () => ({
  type: PAYMENT_CODE.LOAD_PENDING,
});

export const setLoaded = () => ({
  type: PAYMENT_CODE.LOAD_SUCCESS,
});

export const setFail = (message) => ({
  type: PAYMENT_CODE.LOAD_FAIL,
  message,
});

export const submitPaymentCode = (payload) => async (dispatch, getState) => {
  dispatch(setLoading());

  const { socket } = getState();

  socket.emit('PAYMENT_CODE_SEND', { code: payload });
};
