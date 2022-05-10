import React from 'react';
import PropTypes from 'prop-types';

import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';

import { TextField } from '.';

export const DynamicSelectField = ({
  label,
  multiple,
  input,
  getDataOnStart,
  getDataOnUpdate,
  groupBy,
  multipleValue,
  changeMultipleValue,
  ...props
}) => {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;
  const [requestLoading, setRequestLoading] = React.useState(false);

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    if (active) {
      (async () => {
        setRequestLoading(true);
        const data = await getDataOnStart();
        setOptions(data);
        setRequestLoading(false);
      })();
    }

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  const getListByValue = async (value) => {
    setRequestLoading(true);
    const data = await getDataOnUpdate(value);
    setOptions(data);
    setRequestLoading(false);
  };

  return multiple ? (
    <Autocomplete
      {...props}
      multiple
      loading={loading || requestLoading}
      options={options}
      getOptionLabel={(option) => option.name}
      onInputChange={(e, v) => getListByValue(v)}
      groupBy={groupBy}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      placeholder={label}
      value={multipleValue}
      onChange={(e, v) => changeMultipleValue(v)}
      getOptionSelected={(option, value) => {
        return option.name === value.name || option.name === multipleValue;
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading || requestLoading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
          fullWidth
          resetHeight
          label={label}
        />
      )}
    />
  ) : (
    <Autocomplete
      disableCloseOnSelect
      {...input}
      {...props}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      getOptionSelected={(option, value) => {
        return option.name === value.name || option.name === input.value;
      }}
      getOptionLabel={(option) => option.name || ''}
      options={options}
      groupBy={groupBy}
      onBlur={() => input.onBlur()}
      label={label}
      placeholder={label}
      onChange={(e, v) => {
        input.onChange(v);
      }}
      value={input.value || ''}
      name={input.name}
      loading={loading || requestLoading}
      renderInput={(params) => {
        return (
          <TextField
            {...params}
            label={label}
            variant="outlined"
            fullWidth
            resetHeight
            onChange={(e) => getListByValue(e.target.value)}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {loading || requestLoading ? <CircularProgress color="inherit" size={20} /> : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
          />
        );
      }}
    />
  );
};

DynamicSelectField.propTypes = {
  label: PropTypes.node,
  multiple: PropTypes.bool,
  getDataOnStart: PropTypes.func,
  getDataOnUpdate: PropTypes.func,
  groupBy: PropTypes.func,
  multipleValue: PropTypes.array,
  changeMultipleValue: PropTypes.func,
  input: PropTypes.object,
};
