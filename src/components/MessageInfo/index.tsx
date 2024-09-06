import { Box, Paper, Typography } from '@mui/material';
import { FC } from 'react';
import { MessageInfoProps } from './types';

export const MessageInfo: FC<MessageInfoProps> = ({ children }) => {
  return (
    <Paper
      sx={{
        maxWidth: 600,
        padding: 3,
        display: 'flex',
        justifyContent: 'center',
        margin: '25px auto 0',
      }}
      elevation={2}
    >
      <Box>
        <Typography variant='h5' align='center'>
          {children}
        </Typography>
      </Box>
    </Paper>
  );
};
