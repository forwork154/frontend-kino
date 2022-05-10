import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import CheckboxUI from '@material-ui/core/Checkbox';

import { sizes } from '../../theme';

export const Checkbox = ({ checked, input = null, onChange, value = true, label, ...props }) => {
  return (
    <Container
      control={
        <StyledCheckbox
          color="primary"
          checked={input ? !!input.value : checked}
          onChange={input ? input.onChange : onChange}
          value={value}
          {...props}
        />
      }
      label={label}
    />
  );
};

const Container = styled(FormControlLabel)`
  && {
    transition: ${sizes.transition.default} opacity;
    margin: 0;
    display: flex;
    align-items: center;

    &:hover {
      opacity: ${sizes.opacity.default};
    }
  }
`;
const StyledCheckbox = styled(CheckboxUI)`
  margin: 0 3px -2px 0 !important;
  ${({ size }) =>
    size === 'small' &&
    `
    padding: 5px !important;
    
  `}
`;

Checkbox.propTypes = {
  onChange: PropTypes.func,
  children: PropTypes.element,
  value: PropTypes.string,
  input: PropTypes.object,
  label: PropTypes.node,
  size: PropTypes.string,
  color: PropTypes.string,
  checked: PropTypes.bool,
};
