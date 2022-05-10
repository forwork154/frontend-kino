import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { sizes } from '../../theme';

const IndentLayoutComponent = ({ children, sizeWidth = 'default', sizeHeight = sizeWidth, ...props }) => {
  return (
    <Padding sizeWidth={sizeWidth} sizeHeight={sizeHeight} {...props}>
      {children}
    </Padding>
  );
};

export const IndentLayout = (props) => <IndentLayoutComponent {...props} />;

IndentLayoutComponent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  sizeWidth: PropTypes.string,
  sizeHeight: PropTypes.string,
};

export const Padding = styled.div`
  padding-top: ${({ sizeHeight }) => sizes.indent[sizeHeight]};
  padding-bottom: ${({ sizeHeight }) => sizes.indent[sizeHeight]};
  padding-left: ${({ sizeWidth }) => sizes.indent[sizeWidth]};
  padding-right: ${({ sizeWidth }) => sizes.indent[sizeWidth]};
  @media screen and (max-width: 1199px) {
    padding-top: ${({ sizeHeight }) => parseInt(sizes.indent[sizeHeight]) / 1.5}px;
    padding-bottom: ${({ sizeHeight }) => parseInt(sizes.indent[sizeHeight]) / 1.5}px;
    padding-left: ${({ sizeWidth }) => parseInt(sizes.indent[sizeWidth]) / 1.5}px;
    padding-right: ${({ sizeWidth }) => parseInt(sizes.indent[sizeWidth]) / 1.5}px;
  }
`;
