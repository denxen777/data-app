import { Alert } from '@mui/material';
import { FC } from 'react';
import { AlertErrorProps } from './types';

export const AlertError: FC<AlertErrorProps> = ({ children }) => {
  return (
    <Alert variant='standard' severity='error'>
      {children}
    </Alert>
  );
};
