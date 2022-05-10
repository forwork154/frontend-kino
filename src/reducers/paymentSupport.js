import { PAYMENT_SUPPORT } from '../actions';

const initialState = {
  data: {
    visible: false,
  },
};

export const paymentSupport = (state = initialState, action) => {
  switch (action.type) {
    case PAYMENT_SUPPORT.SET_VISIBLE:
      return {
        ...state,
        data: {
          ...state.data,
          visible: true,
        },
      };
    case PAYMENT_SUPPORT.SET_INVISIBLE:
      return {
        ...state,
        data: {
          ...state.data,
          visible: false,
        },
      };
    default:
      return state;
  }
};
