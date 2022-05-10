import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Text, Divider } from '../index';
import { ButtonText } from '../buttons';
import { colors, spacing, sizes } from '../../theme';

export const ListActionTitle = ({ tid, offset = 0, action, divider = true, actionTid }) => (
  <Container offset={offset}>
    <Content>
      <Title>
        <Text tid={tid} />
      </Title>
      {action && (
        <ButtonText
          color="primary"
          onClick={() => {
            if (action) action();
          }}
        >
          <Text tid={actionTid} />
        </ButtonText>
      )}
    </Content>
    {divider && <Divider />}
  </Container>
);

ListActionTitle.propTypes = {
  tid: PropTypes.string.isRequired,
  action: PropTypes.func,
  actionTid: PropTypes.string,
  offset: PropTypes.number,
  divider: PropTypes.bool,
};

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: ${sizes.indent.small} ${sizes.indent.default};

  @media all and (max-width: 420px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

const Container = styled.div`
  margin-bottom: ${({ offset }) => spacing(offset)};
`;

const Title = styled.div`
  font-weight: 600;
  font-size: ${sizes.font.title};
  color: ${colors.textPrimary};

  @media all and (max-width: 420px) {
    margin-bottom: ${spacing(1)};
  }
`;
