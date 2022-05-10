import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { colors } from '../theme';

export const Error = ({ error, ...props }) => {
  return <React.Fragment>{error && <ErrorText {...props}>{error}</ErrorText>}</React.Fragment>;
};

Error.propTypes = {
  error: PropTypes.oneOf([null, undefined, String]).isRequired,
};

const ErrorText = styled.p`
  color: ${colors.error};
  font-size: 14px;
`;
