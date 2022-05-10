import React from 'react';
import PropTypes from 'prop-types';

import { Skeleton } from './index';
import { ListGrid } from '../grids';

export const SkeletonList = ({ size = 'medium' }) => {
  if (size === 'big') {
    return (
      <ListGrid>
        <Skeleton variant="text" height={18} width="100%" />
        <Skeleton variant="text" height={18} width="100%" />
        <Skeleton variant="text" height={18} width="100%" />
        <Skeleton variant="text" height={18} width="100%" />
        <Skeleton variant="text" height={18} width="100%" />
        <Skeleton variant="text" height={18} width="100%" />
        <Skeleton variant="text" height={18} width="100%" />
        <Skeleton variant="text" height={18} width="100%" />
      </ListGrid>
    );
  }

  if (size === 'medium') {
    return (
      <ListGrid>
        <Skeleton variant="text" height={18} width="100%" />
        <Skeleton variant="text" height={18} width="100%" />
        <Skeleton variant="text" height={18} width="100%" />
        <Skeleton variant="text" height={18} width="100%" />
      </ListGrid>
    );
  }

  if (size === 'small') {
    return (
      <ListGrid>
        <Skeleton variant="text" height={18} width="100%" />
        <Skeleton variant="text" height={18} width="100%" />
      </ListGrid>
    );
  }
};

SkeletonList.propTypes = {
  size: PropTypes.string,
};
