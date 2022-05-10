import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Field from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

import { colors, sizes } from '../../../theme';
import createComponent from '../../../utils/lib/createComponent';
import mapError from '../../../utils/mapError';
import { TextFieldSkeleton } from '.';

const TextFieldComponent = ({
  className,
  endAdornment,
  children,
  label,
  loading,
  disabled,
  type = 'text',
  ...props
}) => {
  return (
    <React.Fragment>
      <Container className={className}>
        {loading && <TextFieldSkeleton />}
        <FieldStyled
          InputProps={{
            endAdornment: endAdornment && <InputAdornment position="end">{endAdornment}</InputAdornment>,
          }}
          label={label}
          variant="outlined"
          {...props}
          disabled={loading || disabled}
          type={type}
        >
          {children}
        </FieldStyled>
      </Container>
    </React.Fragment>
  );
};

const Container = styled.div`
  position: relative;
  & .MuiInputAdornment-root .MuiIconButton-root {
    padding: 10px !important;
  }
`;
const FieldStyled = styled(Field)`
  && {
    width: 100%;
  }
  & input {
    color: ${colors.textPrimary};
    -webkit-text-fill-color: ${colors.textPrimary};
  }
  & label {
    color: ${colors.textGray};
    max-width: calc(100% - 20px);
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    height: 18px;
  }
  & fieldset {
    transition: ${sizes.transition.field} !important;
    border-width: 1px !important;
    border-color: ${colors.gray};
  }
  &:hover {
    fieldset {
      transition: ${sizes.transition.field} !important;
      border-color: ${colors.textPrimary};
    }
  }
`;

TextFieldComponent.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.element,
  label: PropTypes.node,
  endAdornment: PropTypes.node,
};

export const TextField = createComponent(TextFieldComponent, ({ defaultValue, ...props }) => mapError(props));
