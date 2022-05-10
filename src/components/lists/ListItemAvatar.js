import React from 'react';
import styled from 'styled-components';

import ListItemAvatarUi from '@material-ui/core/ListItemAvatar';

import { spacing } from '../../theme';

export const ListItemAvatar = ({ ...props }) => <StyledListItemAvatar {...props} />;

const StyledListItemAvatar = styled(ListItemAvatarUi)`
  && {
    min-width: 0;
    margin-right: ${spacing(2)};
  }
`;
