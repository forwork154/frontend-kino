import React from 'react';
import styled from 'styled-components';

import { colors } from '../../../theme';
import { SkeletonMenu, SkeletonList } from '../../skeletons';

export const MarkdownSkeleton = () => (
  <Container>
    <TopBar>
      <SkeletonMenu size="big" />
    </TopBar>
    <TextField>
      <SkeletonList size="big" />
    </TextField>
  </Container>
);

const Container = styled.div`
  height: 370px;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  overflow: hidden;
`;
const TopBar = styled.div`
  display: grid;
  height: 49px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  width: 100%;
  border-left: 1px solid ${colors.gray};
  border-top: 1px solid ${colors.gray};
  border-right: 1px solid ${colors.gray};
`;
const TextField = styled.div`
  flex-grow: 1;
  padding: 15px;
  border: 1px solid ${colors.gray};
`;
