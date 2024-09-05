import { CircularProgress } from '@mui/material';

export const Loader = () => {
  return (
    <CircularProgress
      color='success'
      sx={{ position: 'absolute', top: '50%', left: '50%' }}
    />
  );
};
