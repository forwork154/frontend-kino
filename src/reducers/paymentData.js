import { PAYMENT_DATA } from '../actions';
import { setRequestError, setRequestSuccess, setRequestPending, initRequestState } from '../utils/store';

const initialState = {
  request: initRequestState(),
  data: null,
};

export const paymentData = (state = initialState, action) => {
  switch (action.type) {
    case PAYMENT_DATA.LOAD_SUCCESS:
      return {
        ...state,
        request: setRequestSuccess(state.request),
      };
    case PAYMENT_DATA.LOAD_PENDING:
      return {
        ...state,
        request: setRequestPending(state.request),
      };
    case PAYMENT_DATA.LOAD_FAIL:
      return {
        ...state,
        request: setRequestError(state.request, action.message),
      };
    case PAYMENT_DATA.SET_DATA:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
};
