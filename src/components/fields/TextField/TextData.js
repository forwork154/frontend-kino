import React from 'react';
import PropTypes from 'prop-types';

import IconButton from '@material-ui/core/IconButton';
import GetAppIcon from '@material-ui/icons/GetApp';
import InputAdornment from '@material-ui/core/InputAdornment';

import { downloadFile } from '../../../utils/file';

import { TextAreaField } from '.';

export const TextFieldData = ({ fileName, loading, value, ...props }) => {
  return (
    <TextAreaField
      value={value}
      endAdornment={
        <InputAdornment position="end">
          <IconButton size="medium" onClick={() => downloadFile({ fileName, value })}>
            <GetAppIcon fontSize="small" />
          </IconButton>
        </InputAdornment>
      }
      loading={loading}
      {...props}
    />
  );
};

TextFieldData.propTypes = {
  loading: PropTypes.bool,
  fileName: PropTypes.string,
  value: PropTypes.string,
};
