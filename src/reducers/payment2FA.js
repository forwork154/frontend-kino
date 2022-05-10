import { PAYMENT_2FA } from '../actions';
import { setRequestError, setRequestSuccess, setRequestPending, initRequestState } from '../utils/store';

const initialState = {
  request: initRequestState(),
};

export const payment2FA = (state = initialState, action) => {
  switch (action.type) {
    case PAYMENT_2FA.LOAD_SUCCESS:
      return {
        ...state,
        request: setRequestSuccess(state.request),
      };
    case PAYMENT_2FA.LOAD_PENDING:
      return {
        ...state,
        request: setRequestPending(state.request),
      };
    case PAYMENT_2FA.LOAD_FAIL:
      return {
        ...state,
        request: setRequestError(state.request, action.message),
      };
    default:
      return state;
  }
};
