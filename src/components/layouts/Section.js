import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { sizes } from '../../theme';

export const SectionLayout = ({ children, className, indent, offset = 'default' }) => {
  return (
    <Grid indent={indent} offset={offset} className={className}>
      {children}
    </Grid>
  );
};

SectionLayout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  offset: PropTypes.string,
  indent: PropTypes.bool,
};

const Grid = styled.div`
  display: grid;
  padding-top: ${({ indent }) => (indent ? sizes.indent.default : 0)};
  grid-template-columns: 100%;
  grid-template-rows: auto;
  grid-gap: ${({ offset }) => sizes.indent[offset]};

  @media screen and (max-width: 1199px) {
    grid-gap: ${({ offset }) => parseInt(sizes.indent[offset]) / 1.5}px;
    padding-top: ${({ indent }) => (indent ? `${parseInt(sizes.indent.default) / 1.5}px` : 0)};
  }
`;
