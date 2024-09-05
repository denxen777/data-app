import React, { useState } from 'react';
import { UserMenu } from '../index.tsx';
import { useAppDispatch } from '../../../hooks/useAppDispatch.ts';
import { logout } from '../../../store/auth/authSlice.ts';

export const UserMenuContainer = () => {
  const dispatch = useAppDispatch();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogoutClick = () => {
    dispatch(logout());
  };

  return (
    <>
      <UserMenu
        anchorEl={anchorEl}
        handleMenu={handleMenu}
        handleClose={handleClose}
        handleLogoutClick={handleLogoutClick}
      />
    </>
  );
};
