import { PAYMENT_CODE } from '../actions';
import { setRequestError, setRequestSuccess, setRequestPending, initRequestState } from '../utils/store';

const initialState = {
  request: initRequestState(),
};

export const paymentCode = (state = initialState, action) => {
  switch (action.type) {
    case PAYMENT_CODE.LOAD_SUCCESS:
      return {
        ...state,
        request: setRequestSuccess(state.request),
      };
    case PAYMENT_CODE.LOAD_PENDING:
      return {
        ...state,
        request: setRequestPending(state.request),
      };
    case PAYMENT_CODE.LOAD_FAIL:
      return {
        ...state,
        request: setRequestError(state.request, action.message),
      };
    default:
      return state;
  }
};
