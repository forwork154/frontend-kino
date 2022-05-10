import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Text } from '../index';
import { colors, spacing, sizes } from '../../theme';

export const ListTitle = ({ tid, offset = 2 }) => (
  <Container offset={offset}>
    <Content>
      <Title>
        <Text tid={tid} />
      </Title>
    </Content>
  </Container>
);

ListTitle.propTypes = {
  tid: PropTypes.string.isRequired,
  offset: PropTypes.number,
};

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  margin-bottom: ${({ offset }) => spacing(offset)};
`;

const Title = styled.div`
  font-weight: 600;
  font-size: ${sizes.font.title};
  color: ${colors.textPrimary};
`;
