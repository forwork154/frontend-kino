import React from 'react';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';

export const Box = ({ variant = 'outlined', ...props }) => <Paper variant={variant} {...props} />;

Box.propTypes = {
  variant: PropTypes.string,
};
