import React from 'react';
import PropTypes from 'prop-types';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { linkRedirect } from '../../utils/navigation';
import { Text } from '../index';

export const ModalMenu = ({ items, onSelect, onClose, open, activePath, anchorEl, pathConfig }) => {
  return (
    <Menu anchorEl={anchorEl} keepMounted open={open} onClose={onClose}>
      {items.map(({ tid, id, path }) => (
        <MenuItem
          key={id}
          selected={activePath === path}
          component="a"
          onClick={(e) => {
            if (typeof path === 'function') {
              linkRedirect(path, pathConfig)(e);
            } else {
              linkRedirect(path)(e);
            }
            onSelect();
          }}
        >
          <Text tid={tid} />
        </MenuItem>
      ))}
    </Menu>
  );
};

ModalMenu.propTypes = {
  items: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  activePath: PropTypes.string,
  pathConfig: PropTypes.object,
  anchorEl: PropTypes.object,
};
