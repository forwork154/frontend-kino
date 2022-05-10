import { SOCKET } from '../actions';

const initialState = null;

export const socket = (state = initialState, action) => {
  switch (action.type) {
    case SOCKET.SET_SOCKET:
      return action.socket;
    default:
      return state;
  }
};
