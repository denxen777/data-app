import { Backdrop, CircularProgress } from '@mui/material';
import { FC } from 'react';
import { LoaderProps } from './types';

export const Loader: FC<LoaderProps> = (props) => {
  return (
    <Backdrop
      sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
      open={props.open}
    >
      <CircularProgress color='inherit' />
    </Backdrop>
  );
};
