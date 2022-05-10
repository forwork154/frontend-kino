import { PAYMENT_SUPPORT } from '.';

export const setPaymentSupportVisible = () => ({
  type: PAYMENT_SUPPORT.SET_VISIBLE,
});

export const setPaymentSupportInvisible = () => ({
  type: PAYMENT_SUPPORT.SET_INVISIBLE,
});
