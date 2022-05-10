import styled from 'styled-components';
import { spacing } from '../../theme';

export const FieldGrid = styled.div`
  margin-bottom: ${(p) => (p.indent === false ? 0 : spacing(4))};
  display: grid;
  grid-gap: ${spacing(4)};
  grid-template-columns: ${(p) => (p.double ? (p.button ? 'auto max-content' : '1fr 1fr') : '1fr')};
  align-items: ${(p) => (p.button ? 'flex-start' : 'stretch')};
  @media all and (max-width: 1199px) {
    grid-template-columns: 1fr;
  }
`;
