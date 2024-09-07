import { Backdrop, Fade, Modal as ModalMui } from '@mui/material';
import { FC } from 'react';
import './style.css';
import { ModalProps } from './types.ts';

export const Modal: FC<ModalProps> = ({ children, ...props }) => {
  return (
    <ModalMui
      open={props.open}
      onClose={props.onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={props.open}>
        <div className='content'>{children}</div>
      </Fade>
    </ModalMui>
  );
};
