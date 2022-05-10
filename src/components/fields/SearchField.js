import React from 'react';
import styled from 'styled-components';

import MuiSearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';

import { TextField } from '.';

export const SearchField = ({ ...props }) => {
  return (
    <TextField
      {...props}
      endAdornment={
        <InputAdornment position="end">
          <SearchIcon />
        </InputAdornment>
      }
    />
  );
};

const SearchIcon = styled(MuiSearchIcon)`
  color: rgba(0, 0, 0, 0.54);
`;
