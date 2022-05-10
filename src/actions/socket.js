import { SOCKET } from '.';

export const setSocket = (socket) => ({
  type: SOCKET.SET_SOCKET,
  socket,
});
