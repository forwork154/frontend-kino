import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Text, Link } from '.';
import { colors, spacing, sizes } from '../theme';

export const FormLinks = ({ items }) => (
  <FooterBlock length={items.length}>
    {items.map(({ link, tid, tvalues }) => (
      <React.Fragment key={link}>
        <Link href={link}>
          <Text tid={tid} tvalues={tvalues} />
        </Link>
      </React.Fragment>
    ))}
  </FooterBlock>
);

FormLinks.propTypes = {
  items: PropTypes.array.isRequired,
};

const FooterBlock = styled.div`
  background: #f4f8ff;
  padding: ${spacing(3)} ${spacing(7)};
  width: 100%;
  display: flex;
  justify-content: ${({ length }) => (length > 1 ? 'space-between' : 'center')};
  font-size: ${sizes.font.default};
  color: ${colors.textPrimary};
`;
