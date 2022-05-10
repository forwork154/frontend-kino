import React from 'react';
import PropTypes from 'prop-types';

import { TableRow, TableCell } from '../tables';
import { Skeleton } from './index';

export const SkeletonTableRow = ({ title }) => (
  <TableRow>
    <TableCell title={title ? 1 : 0} colSpan={100}>
      <Skeleton variant="text" height={18} width="100%" />
    </TableCell>
  </TableRow>
);

SkeletonTableRow.propTypes = {
  title: PropTypes.bool,
};

export const SkeletonTable = () => {
  return (
    <React.Fragment>
      <SkeletonTableRow />
      <SkeletonTableRow />
      <SkeletonTableRow />
      <SkeletonTableRow />
    </React.Fragment>
  );
};
