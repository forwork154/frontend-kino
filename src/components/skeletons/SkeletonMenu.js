import React from 'react';
import styled from 'styled-components';

import { Skeleton } from './index';
import { spacing } from '../../theme';

export const SkeletonMenu = ({ size = 'medium' }) => {
  if (size === 'big') {
    return (
      <Container size={size}>
        <Skeleton variant="text" height={18} width="93%" />
        <Skeleton variant="text" height={18} width="100%" />
        <Skeleton variant="text" height={18} width="95%" />
        <Skeleton variant="text" height={18} width="97%" />
        <Skeleton variant="text" height={18} width="93%" />
        <Skeleton variant="text" height={18} width="100%" />
        <Skeleton variant="text" height={18} width="95%" />
        <Skeleton variant="text" height={18} width="97%" />
      </Container>
    );
  }

  if (size === 'medium') {
    return (
      <Container size={size}>
        <Skeleton variant="text" height={18} width="93%" />
        <Skeleton variant="text" height={18} width="100%" />
        <Skeleton variant="text" height={18} width="95%" />
        <Skeleton variant="text" height={18} width="97%" />
      </Container>
    );
  }
};

const Container = styled.div`
  display: grid;
  grid-gap: ${spacing(3)};
  grid-template-columns: repeat(${({ size }) => (size === 'medium' ? 4 : size === 'big' ? 8 : 0)}, 50px);
`;
