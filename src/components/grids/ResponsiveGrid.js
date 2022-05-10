import styled from 'styled-components';
import { spacing } from '../../theme';

export const ResponsiveGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: ${spacing(5)};
`;
