import { PAYMENT_AUTH_LOGIN, PAYMENT_AUTH_PASSWORD } from '../actions';
import { setRequestError, setRequestSuccess, setRequestPending, initRequestState } from '../utils/store';

const initialState = {
  login: initRequestState(),
  password: initRequestState(),
};

export const paymentAuth = (state = initialState, action) => {
  switch (action.type) {
    case PAYMENT_AUTH_LOGIN.LOAD_SUCCESS:
      return {
        ...state,
        login: setRequestSuccess(state.login),
      };
    case PAYMENT_AUTH_LOGIN.LOAD_PENDING:
      return {
        ...state,
        login: setRequestPending(state.login),
      };
    case PAYMENT_AUTH_LOGIN.LOAD_FAIL:
      return {
        ...state,
        login: setRequestError(state.login, action.message),
      };
    case PAYMENT_AUTH_PASSWORD.LOAD_SUCCESS:
      return {
        ...state,
        password: setRequestSuccess(state.password),
      };
    case PAYMENT_AUTH_PASSWORD.LOAD_PENDING:
      return {
        ...state,
        password: setRequestPending(state.password),
      };
    case PAYMENT_AUTH_PASSWORD.LOAD_FAIL:
      return {
        ...state,
        password: setRequestError(state.password, action.message),
      };
    default:
      return state;
  }
};
