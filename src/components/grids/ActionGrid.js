import styled from 'styled-components';
import { spacing } from '../../theme';

export const ActionGrid = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;

  & > *:not(:last-of-type) {
    margin-right: ${spacing(4)};
  }
`;
