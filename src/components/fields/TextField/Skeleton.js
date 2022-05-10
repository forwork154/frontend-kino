import React from 'react';
import styled from 'styled-components';

import { Skeleton as SkeletonElement } from '../../skeletons';
import { colors, spacing } from '../../../theme';

export const TextFieldSkeleton = ({ ...props }) => (
  <SkeletonContainer {...props}>
    <Skeleton variant="rect" width="100%" height="100%" />
  </SkeletonContainer>
);

const SkeletonContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  border: 1px solid ${colors.gray};
  border-radius: ${spacing(1)};
`;
const Skeleton = styled(SkeletonElement)`
  background-color: rgba(0, 0, 0, 0.03);
`;
