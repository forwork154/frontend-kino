import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import LinkUI from '@material-ui/core/Link';
import { sizes, colors } from '../theme';
import { redirect } from '../utils/navigation';

export const Link = ({
  color = 'textPrimary',
  underline = 'always',
  onClick,
  href,
  target = '_self',
  download,
  ...props
}) => {
  return (
    <LinkStyled
      {...props}
      color={color}
      underline="none"
      href={href}
      target={target}
      download={download}
      onClick={(e) => {
        if (onClick) {
          e.preventDefault();
          onClick();
        }

        if (href[0] === '/' && target !== '_blank') {
          e.preventDefault();
          return redirect(href);
        }

        return null;
      }}
    />
  );
};

Link.propTypes = {
  color: PropTypes.string,
  underline: PropTypes.string,
  target: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
};

const LinkStyled = styled(LinkUI)`
  && {
    cursor: pointer;
    color: ${({ color }) => colors[color] || colors.textPrimary} !important;
    opacity: 1 !important;
    transition: opacity ${sizes.transition.default};
    text-decoration: none !important;

    &:hover {
      color: ${({ color }) => colors[color] || colors.textPrimary} !important;
      opacity: ${sizes.opacity.hover} !important;
    }
  }
`;
