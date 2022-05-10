import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { fade, sizes, colors } from '../../theme';
import { APP_PAGE_ID } from '../../constants';

export const PageLayout = ({ align = 'top', children }) => {
  return (
    <Page align={align} id={APP_PAGE_ID}>
      {children}
    </Page>
  );
};

const Page = styled.div`
  animation: ${fade} 0.5s;
  position: relative;
  min-height: 100vh;
  width: 100%;
  background-color: ${colors.background};
  display: flex;
  flex-direction: column;
  justify-content: ${({ align }) => (align === 'top' ? 'flex-start' : align === 'center' ? 'center' : null)};
  padding: ${sizes.indent.header} 0 ${sizes.indent.big};
`;

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  align: PropTypes.string,
};
