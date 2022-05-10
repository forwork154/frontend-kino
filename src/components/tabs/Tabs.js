import React from 'react';

import MuiTabs from '@material-ui/core/Tabs';

export const Tabs = ({ ...props }) => {
  return <MuiTabs indicatorColor="primary" textColor="primary" variant="scrollable" {...props} />;
};
