import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ResponsiveLayout, ContentLayout } from '../../components/layouts';
import { Text, Link } from '../../components';
import { colors, sizes, spacing } from '../../theme';
import { ROUTES } from '../../constants/routes';

export const ErrorView = ({ errorIcon: ErrorIcon, errorIconSrc, errorTid }) => {
  return (
    <ContentLayout>
      <ResponsiveLayout size="small">
        <Container>
          {ErrorIcon && <ErrorIcon alt="Error icon" />}
          {errorIconSrc && <img src={errorIconSrc} alt="Error icon" />}
          <Title>
            <Text tid="ERROR.PAGE.TITLE" />
          </Title>
          <ErrorText>
            <Text tid={errorTid} />
          </ErrorText>
          <BackToHomeLink href={ROUTES.HOME}>
            <Text tid="ERROR.PAGE.LINK" />
          </BackToHomeLink>
        </Container>
      </ResponsiveLayout>
    </ContentLayout>
  );
};

ErrorView.propTypes = {
  errorIcon: PropTypes.node,
  errorTid: PropTypes.string,
  errorIconSrc: PropTypes.string,
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  color: ${colors.textPrimary};
  font-weight: 600;
  font-size: 21px;
  line-height: 150%;
  margin: ${spacing(7)} 0 ${spacing(1)};
  text-align: center;
`;

const ErrorText = styled.p`
  font-size: ${sizes.font.default};
  line-height: 140%;
  text-align: center;
  margin-bottom: ${spacing(3)};
  color: ${colors.textGray};
`;

const BackToHomeLink = styled(Link)`
  transition: ${sizes.transition.default};
  color: ${colors.primary} !important;

  &:hover {
    color: ${colors.primary} !important;
    opacity: ${sizes.opacity.default};
  }
  font-size: ${sizes.font.default};
`;
