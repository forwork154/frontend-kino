import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { TextFieldSkeleton } from './TextField';

import createComponent from '../../utils/lib/createComponent';
import mapError from '../../utils/mapError';
import { sizes, colors } from '../../theme';

export const createItems = (items) => {
  const { t } = useTranslation();
  return items.map(({ id, tid, name, value, disabled }) => (
    <MenuItem disabled={disabled} key={id} value={value}>
      {name || t(tid)}
    </MenuItem>
  ));
};

const SelectFieldComponent = ({
  className,
  variant = 'outlined',
  label,
  items,
  helperText,
  placeholder,
  error,
  size,
  multiple,
  value,
  loading,
  disabled,
  ...props
}) => {
  const { t } = useTranslation();

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);

  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  return (
    <Container
      size={size}
      variant={variant}
      loading={loading}
      className={`Mui-select ${className}`}
      error={error}
    >
      {loading && <TextFieldSkeleton />}
      <InputLabel ref={inputLabel}>{label}</InputLabel>
      <Select
        size={size}
        labelWidth={labelWidth}
        multiple={multiple}
        variant={variant || 'outlined'}
        value={multiple && !value ? [] : value}
        disabled={loading || disabled}
        {...props}
      >
        {placeholder && (
          <MenuItem value="" disabled>
            <em>{placeholder}</em>
          </MenuItem>
        )}
        {createItems(items, t)}
      </Select>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </Container>
  );
};

const Container = styled(FormControl)`
  width: 100%;
  position: relative;

  & legend {
    z-index: 10;
    background-color: ${({ loading }) => (loading ? 'transparent' : '#fff')};
  }
  & fieldset {
    transition: ${sizes.transition.field} !important;
    border-width: 1px !important;
    border-color: ${colors.gray};
  }
  & .MuiSelect-root {
    background-color: transparent !important;
  }
`;

SelectFieldComponent.propTypes = {
  name: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  items: PropTypes.array.isRequired,
  error: PropTypes.bool,
  multiple: PropTypes.bool,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  helperText: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.node,
};

export const SelectField = createComponent(
  SelectFieldComponent,
  ({ input: { ...inputProps }, ...props }) => ({
    ...mapError(props),
    ...inputProps,
  }),
);
