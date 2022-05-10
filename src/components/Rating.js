import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import MaterialRating from '@material-ui/lab/Rating';

import { colors } from '../theme';

export const Rating = ({ exact, ...props }) => {
  return <StyledRating readOnly {...props} precision={exact ? 0.1 : 1} />;
};

Rating.propTypes = {
  exact: PropTypes.bool,
};

const StyledRating = styled(MaterialRating)`
  .MuiRating-label,
  .MuiRating-iconFilled {
    color: ${colors.primary};
  }
`;
