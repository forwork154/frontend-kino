import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Text } from '../index';
import { colors, sizes, spacing } from '../../theme';

export const Title = ({ tid, offset = 0 }) => (
  <Container offset={offset}>
    <TitleText>
      <Text tid={tid} />
    </TitleText>
  </Container>
);

Title.propTypes = {
  tid: PropTypes.string.isRequired,
  offset: PropTypes.number,
};

const Container = styled.div`
  margin-bottom: ${({ offset }) => spacing(offset)};
`;

const TitleText = styled.div`
  font-weight: 600;
  font-size: ${sizes.font.title};
  color: ${colors.textPrimary};
`;
