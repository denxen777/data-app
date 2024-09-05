import { Backdrop, Box, Fade, Modal as ModalMui } from '@mui/material';
import { FC } from 'react';
import { ModalProps } from './types.ts';
import { style } from '../../assets/data/style_modal.ts';

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
        <Box sx={style}>{children}</Box>
      </Fade>
    </ModalMui>
  );
};
