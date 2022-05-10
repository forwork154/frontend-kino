import React, { useState } from 'react';

import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';

import { TextField } from '.';

export const TextFieldPassword = ({ ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <TextField
      type={showPassword ? 'text' : 'password'}
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            size="medium"
            onClick={() => setShowPassword(!showPassword)}
            onMouseDown={(e) => e.preventDefault()}
            edge="end"
          >
            {showPassword ? <Visibility fontSize="small" /> : <VisibilityOff fontSize="small" />}
          </IconButton>
        </InputAdornment>
      }
      {...props}
    />
  );
};
