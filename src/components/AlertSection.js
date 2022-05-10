import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Alert } from '.';

import { spacing } from '../theme';

export const AlertSection = ({
  error,
  success,
  info,
  errorContent,
  successContent,
  infoContent,
  errorMessage,
  successMessage,
  infoMessage,
  offset = 3,
  offsetDirection = 'top',
}) => (
  <React.Fragment>
    {(error || success || info) && (
      <Container offsetDirection={offsetDirection} offset={offset}>
        {success && <Alert content={successContent} type="success" tid={successMessage} />}
        {info && <Alert content={infoContent} type="info" tid={infoMessage} />}
        {error && <Alert content={errorContent} type="error" tid={`ERROR.${errorMessage}`} />}
      </Container>
    )}
  </React.Fragment>
);

AlertSection.propTypes = {
  error: PropTypes.bool,
  info: PropTypes.bool,
  success: PropTypes.bool,
  errorMessage: PropTypes.string,
  offsetDirection: PropTypes.string,
  infoMessage: PropTypes.string,
  successMessage: PropTypes.string,
  offset: PropTypes.number,
};

const Container = styled.div`
  display: grid;
  grid-gap: ${spacing(1)};

  ${({ offset, offsetDirection }) => `margin-${offsetDirection}: ${spacing(offset)};`};
`;
