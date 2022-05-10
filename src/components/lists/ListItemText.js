import React from 'react';
import styled from 'styled-components';

import ListItemTextUi from '@material-ui/core/ListItemText';

export const ListItemText = ({ ...props }) => <StyledListItemText {...props} />;

const StyledListItemText = styled(ListItemTextUi)`
  && {
    margin-top: 0;
    margin-bottom: 0;
  }
`;
