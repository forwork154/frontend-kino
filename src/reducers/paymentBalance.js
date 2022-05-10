import { PAYMENT_BALANCE } from '../actions';
import { setRequestError, setRequestSuccess, setRequestPending, initRequestState } from '../utils/store';

const initialState = {
  request: initRequestState(),
};

export const paymentBalance = (state = initialState, action) => {
  switch (action.type) {
    case PAYMENT_BALANCE.LOAD_SUCCESS:
      return {
        ...state,
        request: setRequestSuccess(state.request),
      };
    case PAYMENT_BALANCE.LOAD_PENDING:
      return {
        ...state,
        request: setRequestPending(state.request),
      };
    case PAYMENT_BALANCE.LOAD_FAIL:
      return {
        ...state,
        request: setRequestError(state.request, action.message),
      };
    default:
      return state;
  }
};
