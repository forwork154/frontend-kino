import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { socket } from '../../utils/socket';
import { setSocket } from '../../actions/socket';

export const Onload = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSocket(socket));
  }, []);

  return null;
};
