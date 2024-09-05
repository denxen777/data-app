import { FC } from 'react';
import { AccountCircle } from '@mui/icons-material';
import { IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { UserMenuProps } from './types.ts';

export const UserMenu: FC<UserMenuProps> = (props) => {
  return (
    <div>
      <IconButton color='inherit' onClick={props.handleMenu}>
        <AccountCircle fontSize='large' />
      </IconButton>
      <Menu
        anchorEl={props.anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(props.anchorEl)}
        onClose={props.handleClose}
      >
        <MenuItem onClick={props.handleClose}>
          <Typography onClick={props.handleLogoutClick}>Выйти</Typography>
        </MenuItem>
      </Menu>
    </div>
  );
};
