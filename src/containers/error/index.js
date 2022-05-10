import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { ErrorView } from './View';
import { headerNavigatePath } from '../../actions/navigation';

export const Error = ({ status }) => {
  const dispatch = useDispatch();

  useState(() => {
    dispatch(headerNavigatePath(null));
  }, []);

  const getErrorTid = () => {
    let errorTid;

    switch (status) {
      case 401: {
        errorTid = 'ACCESS_DENIED';
        break;
      }
      case 404: {
        errorTid = 'NOT_FOUND';
        break;
      }
      case 500: {
        errorTid = 'SERVER_ERROR';
        break;
      }
      default:
        return null;
    }

    return `ERROR.PAGE.${errorTid}`;
  };

  const getErrorIcon = () => {
    let errorSrc;

    switch (status) {
      case 401: {
        errorSrc = 'access-denied';
        break;
      }
      case 404: {
        errorSrc = 'not-found';
        break;
      }
      case 500: {
        errorSrc = 'error-server';
        break;
      }
      default:
        return null;
    }

    return `/static/png/${errorSrc}.png`;
  };

  return <ErrorView errorIconSrc={getErrorIcon()} errorTid={getErrorTid()} />;
};

Error.propTypes = {
  status: PropTypes.number,
};
