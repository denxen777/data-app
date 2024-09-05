import React from 'react';

export interface UserMenuProps {
  anchorEl: null | HTMLElement;
  handleMenu: (event: React.MouseEvent<HTMLElement>) => void;
  handleClose: () => void;
  handleLogoutClick: () => void;
}
