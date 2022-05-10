import React, { useEffect } from 'react';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import { setPageLoading } from '../../actions/navigation';
import { Loader } from '../../components';

export const RouteHandler = () => {
  const dispatch = useDispatch();
  const { pageLoading } = useSelector((state) => state.navigation);

  useEffect(() => {
    dispatch(setPageLoading(false));

    Router.events.on('routeChangeStart', () => {
      dispatch(setPageLoading(true));
    });
    Router.events.on('routeChangeComplete', () => {
      dispatch(setPageLoading(false));
    });
    Router.events.on('routeChangeError', () => {
      dispatch(setPageLoading(false));
    });
  }, []);

  return <React.Fragment>{pageLoading && <Loader />}</React.Fragment>;
};
