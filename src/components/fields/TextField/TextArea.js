import React from 'react';
import PropTypes from 'prop-types';

import { TextField } from '.';

export const TextAreaField = ({ rowsMax = 6, ...props }) => {
  return <TextField multiline rowsMax={rowsMax} {...props} />;
};

TextAreaField.propTypes = {
  rowsMax: PropTypes.number,
};
