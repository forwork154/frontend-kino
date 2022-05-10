import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Rating } from '../index';
import { colors, spacing } from '../../theme';

export const RatingField = ({ className, label, input, ...props }) => {
  return (
    <Container className={className}>
      <Label>{label}</Label>
      <Rating readOnly={false} {...props} {...input} />
    </Container>
  );
};

RatingField.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  input: PropTypes.object,
};

const Container = styled.div`
  border: 1px solid ${colors.gray};
  border-radius: 5px;
  padding: 0 14px;
  display: flex;
  align-items: center;
  height: 50px;
  width: max-content;
`;
const Label = styled.span`
  margin-right: ${spacing(4)};
  line-height: 1.2;
  font-size: 16px;
  color: ${colors.textPrimary};
`;
