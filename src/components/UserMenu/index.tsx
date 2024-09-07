import { AccountCircle } from '@mui/icons-material';
import { IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { useRef, useState } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch.ts';
import { logout } from '../../store/auth/authSlice.ts';

export const UserMenu = () => {
  const dispatch = useAppDispatch();

  const iconRef = useRef<null | HTMLButtonElement>(null);

  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    handleClose();
    dispatch(logout());
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton color='inherit' onClick={handleOpen} ref={iconRef}>
        <AccountCircle fontSize='large' />
      </IconButton>
      <Menu
        anchorEl={iconRef.current}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleLogout}>
          <Typography>Выйти</Typography>
        </MenuItem>
      </Menu>
    </div>
  );
};
